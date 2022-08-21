import React, { useEffect, useState } from "react";
import "./Display.css";

export default function Display({ products, filters  }) {
  const [category, setCategory] = useState([]);
  
  

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((el, i) => {
        if (
          el.title.toLowerCase().includes(filters.inputFilter.toLowerCase()) &&
          (!filters.categoryFilter || filters.categoryFilter === el.category)
         ) {
          return (
            <div className="card" key={el + i.toString()}>
              <img src={el.image} alt="SlikaNeka" />
              <div>
                <h4 className="category">{el.title}</h4>
                <p className="description">{el["description"]}</p>
                <span className="price">{el["price"]}</span>
              </div>
             
            </div>
          );
        }
      })}
    </div>
  );
}
