import React, { useState } from 'react';

interface AnimalInterface {

  name: string,
  type: string,
  age: number
}
export default function App() {
  const [queryResult, setQueryResult] = useState<AnimalInterface[]>([])

  const queryAnimalFarm: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    fetch("http://localhost:8080/animals?q=" + query)
      .then(res => res.json())
      .then(setQueryResult)
  }

  return (
    <div className="App">
      <form>
        <input placeholder="Type Animal Name.." onChange={queryAnimalFarm} />
      </form>

      <ul>
        {queryResult.map(animal => <Animal {...animal} />)}
      </ul>
      {queryResult.length === 0 && <>No mo dick..</>}
    </div>
  );
}

function Animal({ type, name, age }: AnimalInterface): JSX.Element {
  return (
    <li> <strong>{type}</strong> : name is {name} age is {age}</li>
  );
}