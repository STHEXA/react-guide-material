// これはstaticインポート
import { add } from "./add";

const Example = () => {
  // dynamicImportの書き方その①
  const dynamicImport = async () => {
    const module = await import("./add");
  };
  dynamicImport();

  // dynamicImportの書き方その②
  import("./add").then((module) => {
    console.log(module);
  });
  // console.log(add(1, 2));
};

export default Example;
