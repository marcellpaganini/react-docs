import Toggle from "./Toggle";

export default function Logged({isLoggedIn}) {
    return (
      <>
        <h1>My Application</h1>
        {isLoggedIn && <Toggle /> }
      </>
    );
  }