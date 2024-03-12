import {useState} from 'react'
import Hoc from './Hoc'
const First = ({money,handleSubmit}) => {
    // const [money,setMoney] = useState(1)
    // const handleSubmit = () =>{
    //     setMoney(money*2)
    // }
    return <>
    <h1> First Component {money}</h1>
    <button onClick={handleSubmit}>Submit</button>
    </>
}

export default Hoc(First)

// export default Hoc(First);