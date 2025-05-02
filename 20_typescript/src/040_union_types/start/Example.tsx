const Example = () => {
  // 練習用
  let strOrNum: string | number = "hello";
  strOrNum = 123;
  console.log(strOrNum);
  let strOrNumOrBool: string | number | boolean = "hello";
  strOrNumOrBool = true;
  console.log(strOrNumOrBool);
  let helloOrNumOrBool: "hello" | number | boolean = 123;
  helloOrNumOrBool = "hello";
  console.log(helloOrNumOrBool);

  type helloOrNum = "hello" | number;
  const hello: helloOrNum = "hello";

  type DayofWeek = "mounday" | "tuseday";
  const day: DayofWeek = "mounday";
};

export default Example;
