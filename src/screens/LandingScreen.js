import { useReducer } from 'react';
import './LandingScreen.css'

const initialValue = {
    input_data : "",
    total_characters : 0,
    total_words : 0,
    total_time_req_to_read : 0,
    dark_mode : false
}

function reducer(state, action){
    switch (action.type){
        case "change":{

            const totalCharacters = action.payLoad.input.split("").length;
            const totalWords = action.payLoad.input.split(" ").filter((data)=>{
                if(data !== ""){
                    return true;
                }
                return false;
            }).length;

            return{
                ...state,
                input_data: action.payLoad.input,
                total_characters : totalCharacters,
                total_words : totalWords,
                total_time_req_to_read : totalWords * 0.008
            }
        }
        case 'upperCase':
            return{
                ...state,
                input_data : state.input_data.toUpperCase()
            }
        case 'lowerCase':
            return{
                ...state,
                input_data : state.input_data.toLowerCase()
            }
        case 'clear':
            return{
                ...state,
                input_data : "",
                total_characters : 0,
                total_words : 0,
                total_time_req_to_read : 0
            }
        case 'trim':
            return{
                ...state,
                input_data : state.input_data.trim(),
                total_characters : state.input_data.trim().length
            }
        default:
            return {...state}
    }
}

function LandingScreen(){

    const [state, dispatch] = useReducer(reducer, initialValue);

    function inputChangeHandler(e){
        dispatch({type:"change", payLoad : {input : e.target.value}});
    }

    function clickHandler(e){
        if(e.target.innerText === "Convert Uppercase"){
            dispatch({type: "upperCase"})
        } else if (e.target.innerText === "Convert Lowercase"){
            dispatch({type: "lowerCase"})
        } else if (e.target.innerText === "Clear Text"){
            dispatch({type:"clear"})
        } else if (e.target.innerText === "Copy To Clipboard"){
            navigator.clipboard.writeText(state.input_data)
        } else if (e.target.innerText==="Remove Extra Space"){
            dispatch({type:"trim"})
        }
    }

    return(
        <div>
            <header>
                <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
            </header>
            <div>
                <p>Enter Your Text Here:</p>
                <textarea value={state.input_data} onChange={inputChangeHandler}/>
                <div onClick={clickHandler}>
                    <button>Convert Uppercase</button>
                    <button>Convert Lowercase</button>
                    <button>Clear Text</button>
                    <button>Copy To Clipboard</button>
                    <button>Remove Extra Space</button>
                </div>
            </div>
            <div>
                <h3>Summery Of Your Text</h3>
                <p>Nummber of words :{state.total_words} </p>
                <p>Number of charecters : {state.total_characters} </p>
                <p>Reading Time: {state.total_time_req_to_read} </p>
            </div>
            <div>
                <h3>Preview Document</h3>
                <textarea value={state.input_data}/>
            </div>
        </div>
    )
}

export default LandingScreen;