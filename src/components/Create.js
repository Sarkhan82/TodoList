import React from "react";

const Create = () => {
  return (
    <div className="create-task">
      <input type="text" placeholder="Quoi faire aujourd'hui ?" />
      <input type="submit" value="Let's go" />
      <div className="list-container">
        <ul></ul>
      </div>
    </div>
  );
};

export default Create;
