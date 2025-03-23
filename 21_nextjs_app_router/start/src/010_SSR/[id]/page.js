import { ENDPOINT } from "@/constants";
import Article from "@/components/article";

export default async function SSR({ params }) {
  console.log(params);
  const articles = await fetch(`${ENDPOINT}/${params.id}`, {
    next: { revalidate: 10 },
  }).then((res) => res.json());
  return (
    <>
      <div>SSR page</div>
      <Article data={articles} />
    </>
  );
}
