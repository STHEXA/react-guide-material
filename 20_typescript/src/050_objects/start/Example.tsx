const Example = () => {
  // 練習用
  const array1: number[] = [1, 2, 3];
  const array2: string[] = ["hello", "bye"];
  const array3: Array<string> = ["hello", "bye"];
  const array4: (number | string)[] = [1, "hello"];
  const array5: Array<number | string> = [1, "hello"];

  type Person = { name: string; age?: number };
  const obj1: Person = { name: "Taro", age: 18 };

  const user: Person[] = [{ name: "Taro" }, { name: "Hanako", age: 18 }];
  const user2: { name: string; age?: number }[] = [
    { name: "Taro" },
    { name: "Hanako", age: 18 },
  ];
};

export default Example;
