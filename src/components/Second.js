import {useState} from 'react'
import Hoc from './Hoc'
const Second = () => {
    const [money,setMoney] = useState(1)
    const handleSubmit = () =>{
        setMoney(money*2)
    }
    return <>
    <h1> Second Component {money}</h1>
    <button onClick={handleSubmit}>Submit</button>
    </>
}

export default Hoc(Second)