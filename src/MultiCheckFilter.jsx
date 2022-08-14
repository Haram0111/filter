import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

function MultiCheckFilter() {

  const [food, setFood] = useState(["최신순", "정확도순", "내 맘대로"]);
  const [filter, setFilter] = useState();
  
  return (
    <div className="App">
      <Multiselect
        isObject={false}
        onRemove={(event) => {
          setFilter(event);
          console.log(filter);
        }}
        onSelect={(event) => {
          setFilter(event);
          console.log(filter);
        }}
        options={food}
        selectedValues={["최신순"]}
        showCheckbox
      />
    </div>
  );
}

export default MultiCheckFilter;
