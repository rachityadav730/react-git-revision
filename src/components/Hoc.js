import React from 'react'
import {useState} from 'react'

const Hoc = (NewComponent) => {
  function UpdatedComponent () {
    const [money,setMoney] = useState(1)
    const handleSubmit = () =>{
        setMoney(money*2)
    }
    return <NewComponent money = {money} handleSubmit = {handleSubmit}/>
  }
  return UpdatedComponent;
}

export default Hoc