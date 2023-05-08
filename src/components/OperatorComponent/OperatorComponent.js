import { CHOOOSE_OPERATOR } from "../../constants/constants";

export default function DigitComponent({operator,dispatch}){
    return(
        <button onClick={()=>dispatch({type:CHOOOSE_OPERATOR,payload:operator})}>{operator}</button>

    )
}
