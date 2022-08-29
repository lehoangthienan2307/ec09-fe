import React from 'react';

const Sorting = ({calback, sort}) => {
  const handleSort = (e) => {
    const { value } = e.target;
    calback(value)
   
  }


  return <div className='sorting' >
        <h4>Sắp xếp theo: </h4>
    <select onChange={handleSort} value={sort}>
      <option value="1">Price: Low-Hight</option>
      <option value="2">Price: Hight-Low</option>
      <option value="3">Oldest</option>
      <option value="4">Newest</option>
    </select>

  </div>;
};

export default Sorting;

  