import Breadcrumbs from "@/components/content/Breadcrumbs";

export default async function Page() {
  return (
    <div>
      <Breadcrumbs />
      <title>{"hello"}</title>
      <h1 className="text-4xl font-bold tracking-tight">{"header"}</h1>
      <p>{"body"}</p>
    </div>
  );
}
