const Example = () => {
  // 練習用
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  };
  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  };
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  };
  const strArray = repeatStr("Hello", 3);
  const numArray = repeatNum(1, 3);
  const tArray = repeat<number>(1, 3);
  const byeArray = repeat<"bye">("bye", 3);
  //省略も可
  const tArray2 = repeat(1, 3);
  console.log(strArray);
  console.log(numArray);
  console.log(tArray);
  console.log(byeArray);
  console.log(tArray2);
};

export default Example;
