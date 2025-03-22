import { ENDPOINT } from "@/constants";
import ClientComp from "./components/ClientComp";
import ArticleList from "@/components/articleList";

export default async function SSR() {
  const articles = await fetch(ENDPOINT, {
    cache: "no-store",
  }).then((res) => res.json());
  return (
    <>
      <div>SSR page</div>
      <ClientComp />
      <ArticleList list={articles} basePath={"/010_SSR"} />
    </>
  );
}
