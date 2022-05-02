const name = "Marcell Tanure";

const element = <h3>Hi, {name}</h3>;

const formatName = () => {
  return <h3>{name.toUpperCase()}</h3>;
}

const user = {
  firstName: "John",
  lastName: "Wayne" 
}

const printUser = (user) => {
  if (user) {
    return <h3>{user.firstName} {user.lastName}</h3>
  }
  return <h3>Hello, stranger.</h3>
}

function App() {
  return (
    <>
      <h1>Hello World</h1>
      {element}
      {formatName()}
      {printUser(user)}
    </>
  );
}

export default App;