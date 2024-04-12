import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  const handleChange = (inx, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const newFields = [...fields];
    newFields[inx][name] = value;
    setFields(newFields);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(fields);
  };
  const handleAddField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };
  const handleRemove = (inx) => {
    const newFields = [...fields];
    newFields.splice(inx, 1);
    setFields(newFields);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {fields.map((f, inx) => (
          <div key={inx}>
            <input
              type="text"
              name="name"
              value={f.name}
              onChange={(e) => handleChange(inx, e)}
              placeholder="Name"
            />
            <input
              type="text"
              name="age"
              value={f.age}
              onChange={(e) => handleChange(inx, e)}
              placeholder="Age"
            />
            <button onClick={() => handleRemove(inx)}>Remove</button>
          </div>
        ))}
        <button onClick={handleAddField}>Add more...</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
