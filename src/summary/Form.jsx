import React from "react";
import { useState } from "react";

function Form() {
    const [namee, setNamee] = useState('');
    const [hobby, setHobby] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://640234e1302b5d671c35b40b.mockapi.io/namesubmit', {
          method: 'POST',
          body: JSON.stringify({ namee , hobby }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      }
      function handleChange1(event) {
        setNamee(event.target.value);
        
      }
      function handleChange2(event) {
        setHobby(event.target.value);
      }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={namee} onChange={handleChange1} />
        </label>
        <label>
          hobby:
          <input type="text" value={hobby} onChange={handleChange2} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
