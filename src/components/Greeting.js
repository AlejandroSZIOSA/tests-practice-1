import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  return (
    <div>
      <h2>hola</h2>
      {/*   <p>It is good to see you</p> */}
      {!changedText && <Output>te veo</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={() => setChangedText(true)}>Change text</button>
    </div>
  );
};

export default Greeting;
