import Profile from "./components/Profile";

const Example = () => {
  const profileList = [
    {
      name: 'Geo',
      Age: 18,
      Hobby: [
        'sports',
        'music'
      ]
    },
    {
      name: 'Tom',
      Age: 25,
      Hobby: [
        'movie',
        'music'
      ]
    },
    {
      name: 'Lisa',
      Age: 21,
      Hobby: [
        'sports',
        'travel',
        'game'
      ]
    }
  ]
  return (
    <>
      <h3>練習問題</h3>
      <p>Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。</p>
      <p>また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。</p>
      <ul>
        {profileList.map((profile) => (
            <Profile name={profile.name} age={profile.Age} hobbies={profile.Hobby} key={profile.name}/>
          )
        )}
      </ul>
    </>
  );
};

export default Example;
