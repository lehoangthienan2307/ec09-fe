import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import usePaging from '../../hook/usePaging'


const Paging = ({totalPages, page}) => {
  const { 
    firstArr, lastArr, next, prev, jump 
  } = usePaging(totalPages, page)


  const isActive = (index) => {
      if(index === page) return "active";
      return ""
    }


  return (
    <div className='pagination'>
    <button onClick={prev}>&laquo;</button>

    {
      firstArr.map(num => (
        <button key={num} className={`${isActive(num)}`}
        onClick={() => jump(num)}>
          {num}
        </button>
      ))
    }

    { lastArr.length > 0 && <button>...</button> }

    {
      lastArr.map(num => (
        <button key={num} className={`${isActive(num)}`}
        onClick={() => jump(num)}>
          {num}
        </button>
      ))
    }

    <button onClick={next}>&raquo;</button>
  </div>
  )
}

export default Paging