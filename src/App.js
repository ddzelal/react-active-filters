import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Display from "./components/Display";
import SearchInput from "./components/SearchInput";
import Label from "./components/Label";

const App = () => {
  const [display, setDisplay] = useState([]);
  const [filters, setFilters] = useState({
    inputFilter: "",
    categoryFilter: "",
  });
  const [total, setTotal] = useState(0)
  const [amount, setAmount] = useState(1)



  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        res.data.forEach((el) => {
          el.Counter = amount;
        })
        setDisplay(res.data);
      })
      .catch((message) => console.log(message));
  }, []);

  
 
 
  // const Categorys = [];
  // for (const key of display) {
  //   Categorys.push(key.category);
  // }

  // let uniqueCategory = [...new Set(Categorys)];

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
      <Label display={display} filters={filters}   setFilters={setFilters} />
      <h1>Total :{total.toFixed(2)}</h1>
      <Display products={display} filters={filters} total={total} setTotal={setTotal} />
      {/* <Hamper /> */}
    </div>
  );
};

export default App;
