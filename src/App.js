import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Display from "./components/Display";
import SearchInput from "./components/SearchInput";

const App = () => {
  const [display, setDisplay] = useState([]);
  const [filters, setFilters] = useState({
    inputFilter: "",
    categoryFilter: "",
  });

  const [category , setCategory] = useState([])

  

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setDisplay(res.data);
      })
      .catch((message) => console.log(message));
  }, []);

 
    
    const Categorys = []
    for (const key of display) {
      Categorys.push(key.category)
    }

    let uniqueCategory = [...new Set(Categorys)];
    

  
  
  const inputValue = (value) => {
    setFilters({ ...filters, inputFilter: value });
    // setFilters({...filters , categoryFilter: })
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

  const changeCategory = (e) => {
    // for (const key of display) {
    //   const no = display.filter((s) => {
    //     return s.category === e;
    //   });
    //   setDisplay(no);
    // }

    setFilters({ ...filters, categoryFilter: e });
  };

  return (
    <div>
      <SearchInput inputValue={inputValue} />
      <label>
        Pick your favorite category:
        <select
          onChange={(e) => {
            changeCategory(e.target.value);
          }}
          value={filters.categoryFilter}
        >
          <option value="">all</option>
        {uniqueCategory.map( el => {
          return (
            <option value={el}>{el}</option>
          )
        } )}
        </select>
      </label>{" "}
      <Display products={display} filters={filters}  />
    </div>
  );
};

export default App;
