const Example = () => {
  // 練習用
  type User = {
    name: string;
    age: number;
  };

  const user: User = { name: "Taro", age: 10 };

  type UserName = string;
  type UserAge = number;
  type UserGender = "men" | "women" | "other";

  type UserProfile = {
    name: UserName;
    age: UserAge;
    gender: UserGender;
  };

  const userProfile: UserProfile = {
    name: "hanako",
    age: 30,
    gender: "women",
  };
};

export default Example;
