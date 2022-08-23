import React from 'react'

export default function Label( {display, filters ,  setFilters } ) {
 
  const Categorys = [];
  for (const key of display) {
    Categorys.push(key.category);
  }
  let uniqueCategory = [...new Set(Categorys)];
     
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
    <label>
    Pick your favorite category:
    <select
      onChange={(e) => {
        changeCategory(e.target.value);
      }}
      value={filters.categoryFilter}
    >
      <option value="">all</option>
      {uniqueCategory.map((el , i) => {
        return <option key={el + i.toString()} value={el}>{el}</option>;
      })}
    </select>
  </label>
  )
}
