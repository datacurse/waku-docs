import Breadcrumbs from "@/components/content/Breadcrumbs";
import { Description } from "@/components/content/Description";
import { ImageWithCaption } from "@/components/content/ImageWithCaption";
import LastUpdated from "@/components/content/LastUpdated";
import Title from "@/components/content/Title";
import { stat } from 'fs/promises';
import { fileURLToPath } from 'url';

export default async function Page() {
  // Get the last modified time using fs.stat
  const getLastModifiedDate = async () => {
    try {
      // Get the current file's path automatically
      const currentFilePath = fileURLToPath(import.meta.url);
      const stats = await stat(currentFilePath);
      return stats.mtime.toISOString();
    } catch (error) {
      // If there's an error reading the file stats, return current date
      return new Date().toISOString();
    }
  };

  const lastModified = await getLastModifiedDate();

  return (
    <div>
      <div className="flex flex-col gap-3 mb-6">
        <Breadcrumbs />
        <Title />
        <Description>Add and edit blocks within your content.</Description>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          GitBook is a block-based editor, meaning you can add different kinds of blocks to your content — from standard text and images to interactive blocks. Your pages can include any combination of blocks you want, and there’s no limit to the number of blocks you can have on a page.
        </div>
        <ImageWithCaption
          src="/public/images/creating-content-blocks.png"
          description="GitBook's built in content blocks."
        />
        <h1>Inserting a new content block</h1>
        <div>You can insert a new content block below an existing block using your mouse:</div>
        <ol>
          <li>Hover over the block above the place you need the new content block.</li>
          <li>Hover over the block above the place you need the new content block.</li>
          <li>Hover over the block above the place you need the new content block.</li>
        </ol>
        <div>Alternatively, on a new line, you can press / to launch the insert palette, which lists all the available blocks. You can scroll through the list to find the one you want, or use your keyboard to search for the block you want, navigate up and down the list, and insert it with Enter.</div>
        <h1>Exiting a block</h1>
        <div>Some content blocks capture the editing cursor to allow you to add content in the context of that block. For example, when you’re writing in a hint block, hitting Enter will add a new line within the hint block, rather than a new paragraph below.</div>
        <div>When you are done, you can continue adding new content to the page either by inserting a new block using the + button to the left of your content, or by hitting ⌘ + Enter on a Mac or Ctrl + Enter on a PC.</div>
        <h1>Selecting blocks and interacting with selected blocks</h1>
        <div>You can select a single block by pressing the Esc key with the cursor in the block. You can also select multiple blocks by highlighting content within them and hitting Esc.</div>
        <div>Once selected, you can:</div>
        <ul>
          <li>Select more blocks by clicking on them while keeping the Shift ⇧ key pressed.</li>
          <li>Moving up and down to select the block above or below, using the ↑ and ↓ keys</li>
          <li>Copy the entire block using ⌘ + C (Mac) or Ctrl + C (Windows)</li>
          <li>Cut the entire block using ⌘ + X (Mac) or Ctrl + X (Windows)</li>
          <li>Delete the selected block or blocks using ⌫ or Del.</li>
        </ul>
        <h1>Full-width blocks</h1>
        <div>By making your blocks full width, you can create a clear visual hierarchy in your content, or simply give more space to content that needs it.</div>
        <div>To make a block full width, click on the Options menu  next to your block and select Full width. This feature is available for the following block types:</div>
        <ul>
          <li>Code Blocks</li>
          <li>Image blocks</li>
          <li>Tables</li>
          <li>Cards</li>
          <li>API Blocks</li>
          <li>Integration blocks</li>
        </ul>
        <LastUpdated timestamp={lastModified} />
      </div>
    </div>
  );
}
