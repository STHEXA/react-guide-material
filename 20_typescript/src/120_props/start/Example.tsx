import Hello, { Btn } from "./Hello";

const Example: React.FC = () => {
  return (
    <>
      <Hello text="Type Script">Children</Hello>;
      <Btn fn={(text) => console.log(`Hello ${text}`)} />
    </>
  );
};

export default Example;
