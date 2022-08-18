import React from "react";
import "./Display.css";

export default function Display({ fetch1, filters }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {fetch1.map((el, i) => {
        if (
          el.title.toLowerCase().includes(filters.inputFilter.toLowerCase())
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
