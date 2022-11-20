import { useDispatch} from "react-redux";
import {getData} from '../store/action/userAction'
import {Link} from 'react-router-dom'

function Button(){
  const dispatch = useDispatch();
  return <div>

    <Link to='/userpage'>
       <button style={{
          width:'100px',
          height:'50px', 
          borderRadius: '20px',
          color: 'teal',
          backgroundColor:"lightgreen",
          borderStyle:'none',
          cursor: 'pointer'}} onClick={()=>{
     dispatch(getData());
    }}>CLICK TO LOAD</button></Link>
    
  </div>
}

export default Button;