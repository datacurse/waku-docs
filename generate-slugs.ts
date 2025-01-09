import { Project, ObjectLiteralExpression, PropertyAssignment, Node } from "ts-morph";

// Slug generation function
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[\s\-_]+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/^-+|-+$/g, '');
}

async function transformTitles() {
  // Initialize project
  const project = new Project();

  // Add source file
  const sourceFile = project.addSourceFileAtPath("./src/sidebarStructure.ts");

  // Find the sidebarStructure variable declaration
  const sidebarStructure = sourceFile.getVariableDeclarationOrThrow("sidebarStructure");

  // Function to process object literals recursively
  function processObjectLiteral(node: ObjectLiteralExpression) {
    // Get all properties
    const properties = node.getProperties();

    // First find the title if it exists
    const titleProp = properties.find(prop =>
      prop instanceof PropertyAssignment && prop.getName() === "title"
    ) as PropertyAssignment | undefined;

    if (titleProp) {
      // Get the title value
      const titleInitializer = titleProp.getInitializer();
      if (titleInitializer) {
        const titleText = titleInitializer.getText();
        // Remove quotes from the title text
        const cleanTitle = titleText.replace(/['"]/g, '');
        // Generate slug
        const slug = generateSlug(cleanTitle);

        // Add or update slug property
        const slugProp = node.getProperty("slug");
        if (slugProp && slugProp instanceof PropertyAssignment) {
          slugProp.setInitializer(`"${slug}"`);
        } else {
          node.addPropertyAssignment({
            name: "slug",
            initializer: `"${slug}"`,
          });
        }
      }
    }

    // Process children recursively
    for (const prop of properties) {
      if (prop instanceof PropertyAssignment && prop.getName() === "children") {
        const initializer = prop.getInitializer();
        if (Node.isArrayLiteralExpression(initializer)) {
          // Process each element in the children array
          initializer.getElements().forEach(element => {
            if (Node.isObjectLiteralExpression(element)) {
              processObjectLiteral(element);
            }
          });
        }
      }
    }
  }

  // Get the array literal expression
  const initializer = sidebarStructure.getInitializer();
  if (Node.isArrayLiteralExpression(initializer)) {
    // Process each object in the array
    initializer.getElements().forEach(element => {
      if (Node.isObjectLiteralExpression(element)) {
        processObjectLiteral(element);
      }
    });
  }

  // Format the file with 2-space indentation
  sourceFile.formatText({
    indentSize: 2,
    convertTabsToSpaces: true
  });

  // Save the changes
  await sourceFile.save();
  console.log("Successfully added slugs based on titles");
}

// Run the transformation
transformTitles().catch(console.error);
