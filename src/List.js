export default function List() {
    const items = [
      {id: 1, name: 'bread'},
      {id: 2, name: 'milk'},
      {id: 3, name: 'eggs'}
    ];
  
    return (
      <>
        <h1>Grocery List</h1>
        <ul>
          {items.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </>
    );
  }