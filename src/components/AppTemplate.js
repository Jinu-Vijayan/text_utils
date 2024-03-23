import React, { useReducer } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const initialValue = {
  input_data : "",
  total_characters : 0,
  total_words : 0,
  total_time_req_to_read : 0,
  dark_mode : false
}

// function reducer(state, action){
//   switch (action.type){
//       case "change":{

//           const totalCharacters = action.payLoad.input.split("").length;
//           const totalWords = action.payLoad.input.split(" ").filter((data)=>{
//               if(data !== ""){
//                   return true;
//               }
//               return false;
//           }).length;

//           return{
//               ...state,
//               input_data: action.payLoad.input,
//               total_characters : totalCharacters,
//               total_words : totalWords,
//               total_time_req_to_read : totalWords * 0.008
//           }
//       }
//       case 'upperCase':
//           return{
//               ...state,
//               input_data : state.input_data.toUpperCase()
//           }
//       case 'lowerCase':
//           return{
//               ...state,
//               input_data : state.input_data.toLowerCase()
//           }
//       case 'clear':
//           return{
//               ...state,
//               input_data : "",
//               total_characters : 0,
//               total_words : 0,
//               total_time_req_to_read : 0
//           }
//       case 'trim':
//           return{
//               ...state,
//               input_data : state.input_data.trim(),
//               total_characters : state.input_data.trim().length
//           }
//       default:
//           return {...state}
//   }
// }

const AppTemplate = () => {
  // const [state, dispatch] = useReducer(reducer,initialValue);
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppTemplate