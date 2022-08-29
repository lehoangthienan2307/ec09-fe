import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


const usePaging = (totalPages, page) => {
    const [firstArr, setFirstArr] = useState([])
    const [lastArr, setLastArr] = useState([])
    const navigate=useNavigate()
  
    useEffect(() => {
      const newArr = [...Array(totalPages)].map((_,i) => i + 1)
      if(totalPages <= 4)
        return setFirstArr(newArr);
  
      if(totalPages - page >= 3) {
        setFirstArr(newArr.slice(page - 1, page + 2))
        setLastArr(newArr.slice(totalPages - 1))
      }else{
        setFirstArr(newArr.slice(totalPages - 4, totalPages))
        setLastArr([])
      }
    },[totalPages, page])
  
      const prev=()=>{
        const newPage=Math.max(page - 1, 1)
        navigate(`?page=${newPage}`)
      }
      const next=()=>{
        const newPage=Math.min(page + 1, totalPages)
        navigate(`?page=${newPage}`)
      }
  
      const jump=(num)=>{
        navigate(`?page=${num}`)
      }


      return { firstArr, lastArr, next, prev, jump }
}

export default usePaging