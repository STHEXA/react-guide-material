type HelloProps = {
  text: string;
  children: React.ReactNode;
};
//関数宣言だとこっち
// export default function Hello(props: HelloProps) {
//   return <h1>Hello {props.text}</h1>;
// }

const Hello: React.FC<HelloProps> = (props) => {
  return (
    <h1>
      Hello {props.text}! {props.children}
    </h1>
  );
};

type FnProps = {
  fn: (text: string) => void;
};

export const Btn: React.FC<FnProps> = (props) => {
  return <button onClick={() => props.fn("Type")}>ボタン</button>;
};

export default Hello;
