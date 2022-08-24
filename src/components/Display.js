import React, { useState } from "react";
import "./Display.css";

export default function Display({ products, filters, total, setTotal }) {
  const [items, setItems] = useState([]);
  const [counter, setCounter] = useState(1);

  const buyNow = (price, i) => {
    if (!items.includes(products[i])) {
      setItems([...items, products[i]]);
    }
    if (items.includes(products[i])) {
      let newCounter = (products[i].Counter += 1);
      setCounter(newCounter);
    }
    setTotal(total + price);
  };

  console.log();

  const removeItems = (i, price, counter) => {
    let removedArr = items;
    removedArr.splice(i, 1);
    setItems([...removedArr]);
    setTotal(total - counter * price);
    products[i].Counter = 1;
  };

  return (
    <div>
      <h1>Purchased items:</h1>
      {items.map((e, i) => {
        return (
          <div key={e + i.toString()} className="card-items">
            <img src={e.image} alt="SlikaNeka" />
            <div>
              <h4 className="category">{e.title}</h4>
              <span className="price">{e["price"]}</span>
              <br></br>
              <p>Counter: {e.Counter}</p>
              <button onClick={() => removeItems(i, e.price, e.Counter)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div></div>
        {products.map((el, i) => {
          if (
            el.title
              .toLowerCase()
              .includes(filters.inputFilter.toLowerCase()) &&
            (!filters.categoryFilter || filters.categoryFilter === el.category)
          ) {
            return (
              <div className="card" key={el + i.toString()}>
                <img src={el.image} alt="SlikaNeka" />
                <div>
                  <h4 className="category">{el.title}</h4>
                  <p className="description">{el.description}</p>
                  <span className="price">{el["price"]}</span>
                  <br></br>
                  <button
                    onClick={() => {
                      buyNow(el.price, i);
                    }}
                  >
                    Buy now
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
