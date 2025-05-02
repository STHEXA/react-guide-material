const Example = () => {
  let str: string = "Hello";
  str = "Bye";
  console.log(str);

  let int: number = 6;
  int = 10;
  console.log(int);

  let bigNum: bigint = 103n;
  console.log(bigNum);

  let bool: boolean = true;
  console.log(bool);

  let nullish: null = null;
  let undefinedValue: undefined = undefined;
  console.log(nullish);
  console.log(undefinedValue);

  //リテラル型
  let trueVal: true = true;
  let num123: 123 = 123;
  let strHello: "Hello" = "Hello";
};

export default Example;
