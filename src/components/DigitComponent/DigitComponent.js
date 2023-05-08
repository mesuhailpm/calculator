import { ADD_DIGIT } from "../../constants/constants"

export default function DigitComponent({digit,dispatch}){
    return(
        <button onClick={()=>dispatch({type:ADD_DIGIT,payload:digit})}>{digit}</button>
    )
}
