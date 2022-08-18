import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Display from "./components/Display";
import SearchInput from "./components/SearchInput";

const App = () => {
  const [display, setDisplay] = useState([]);
  const [filters, setFilters] = useState({
    inputFilter: "",
    categoryFilter: undefined,
  });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setDisplay(res.data);
      })
      .catch((message) => console.log(message));
  }, []);

  const inputValue = (value) => {
    setFilters({ ...filters, inputFilter: value });
    // setFilters((prevState) => {
    //   return {
    //     ...prevState,
    //     inputFilter: value,
    //   };
    // });

    // const arr = [...display];
    // let novi = arr.filter((el) => {
    //   if (el.title.toLowerCase().includes(value.toLowerCase())) {
    //     return el;
    //   }
    // });
    // setDisplay(novi)
  };

  return (
    <div>
      <SearchInput inputValue={inputValue} />
      <label>
        Pick your favorite category:
        <select value={filters.categoryFilter}>
          <option value="grapefruit">Musko</option>
          <option value="lime">Zensko</option>
          <option value="coconut">Pederi</option>
          <option value="mango">Nestotrece</option>
        </select>
      </label>{" "}
      <Display fetch1={display} filters={filters} />
    </div>
  );
};

export default App;
