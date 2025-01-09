import Breadcrumbs from "@/components/content/Breadcrumbs";
import Title from "@/components/content/Title";

export default async function Page() {
  return (
    <div>
      <Breadcrumbs />
      <Title />
      <p>{"body"}</p>
    </div>
  );
}
