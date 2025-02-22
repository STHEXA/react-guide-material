const List = ({ list, completed }) => {
  const comp = (id) => {
    completed(id);
  };
  return (
    <>
      {list.map((item) => (
        <div key={item.id}>
          <button onClick={() => comp(item.id)}>完了</button>
          <span>{item.content}</span>
        </div>
      ))}
    </>
  );
};
export default List;
