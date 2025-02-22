
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {

  const list = animals.map((animal) => (<li>{animal}</li>))
  const animalsList = []
  for (const animal of animals ) {
    animalsList.push(<li>{animal}</li>)
  }

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animals.map((animal) => (<li>{animal}</li>))}
        {list}
        {animalsList}
      </ul>
    </>
  );
};

export default Example;
