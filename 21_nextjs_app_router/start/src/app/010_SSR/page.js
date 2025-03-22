import ClientComp from "./components/ClientComp";

export default function SSR() {
  return (
    <>
      <div>SSR page</div>
      <ClientComp />
    </>
  );
}
