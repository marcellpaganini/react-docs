import PlayerInfo from "./PlayerInfo";

const name = "Marcell Tanure";

const element = <h3>Hi, {name}</h3>;

const formatName = () => {
  return <h3>{name.toUpperCase()}</h3>;
}

const user = {
  firstName: "John",
  lastName: "Wayne" 
}

let date = new Date();

const formatDate = (date) => {
  return date.toDateString("MM-DD-YYYY");
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
      <PlayerInfo fullName={user.firstName + " " + user.lastName} age="22" nationality="American" date={formatDate(date)}/>
    </>
  );
}

export default App;