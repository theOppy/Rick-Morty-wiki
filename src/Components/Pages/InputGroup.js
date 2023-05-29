import React from "react";

const InputGroup = ({setID, name, total}) => {


  return (
    <div>
      <div class="form-floating mt-4 mx-4">
        <select
        onChange={(e=>{
            setID(e.target.value) 
        })}
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          {[...Array(total).keys()].map(e=>{
              return  <option value={e + 1}>{name} - {e + 1}</option>
          })}
         
        </select>
        <label for="floatingSelect">Choose the {name}</label>
      </div>
    </div>
  );
};

export default InputGroup;
