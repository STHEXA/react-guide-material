const Form = ({ list, setList }) => {
  let text = "";
  const getVal = (e) => {
    text = e.target.value;
    console.log(text);
  };
  const addList = () => {
    const newList = [...list];
    console.log(newList);
    setList(
      newList.push({
        id: list.length,
        content: text,
      })
    );
  };
  return (
    <>
      <input type="text" onChange={getVal} />
      <button onClick={addList}>追加</button>
    </>
  );
};
export default Form;
