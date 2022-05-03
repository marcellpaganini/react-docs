import React, {useState} from 'react'

export default function Toggle() {
    const [toggle, setToggle] = useState(false);


    function handleClick() {
      // todo
       setToggle((!toggle));
        console.log('Clicked');
    }

  return (
    <button onClick={handleClick}>ON</button>
  )
}