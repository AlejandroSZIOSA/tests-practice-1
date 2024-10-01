import React, { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  return (
    <div>
      <h2>hola</h2>
      {/*   <p>It is good to see you</p> */}
      {!changedText && <p>te veo</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={() => setChangedText(true)}>Change text</button>
    </div>
  );
};

export default Greeting;
