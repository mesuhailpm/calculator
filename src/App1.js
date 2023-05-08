// import React from "react";
import reducer,{intitialState} from "./reducers/Reducer";
// import './App.css'
import './App1.css'
import { useReducer } from "react";
import {ADD_DIGIT,CHOOOSE_OPERATOR,EVALUATE,DELETE,CLEAR} from './constants/constants'
import DigitComponent from './components/DigitComponent/DigitComponent'
import OperatorComponent from './components/OperatorComponent/OperatorComponent'




const App =  () => {

    const [{currentOperant,previousOperant,operator},dispatch] = useReducer(reducer,intitialState)
console.log(currentOperant,'is curent',previousOperant,'is prev',operator)


    return(
    <div className="app">
        <div className="output">
            <div className="previous">{`${previousOperant}${operator}`}</div>
            <div className="current">{currentOperant}</div>
        </div>
        <div className="input">

                <button className="span two" onClick={()=>dispatch({type:CLEAR})}>AC</button>
                <button onClick={()=>dispatch({type:DELETE})}>DEL</button>
                <OperatorComponent operator='÷' dispatch={dispatch} />
                <DigitComponent digit='7' dispatch={dispatch}/>
                <DigitComponent digit='8' dispatch={dispatch}/>
                <DigitComponent digit='9' dispatch={dispatch}/>
                <OperatorComponent operator='x' dispatch={dispatch} />

                <DigitComponent digit='4' dispatch={dispatch}/>
                <DigitComponent digit='5' dispatch={dispatch}/>
                <DigitComponent digit='6' dispatch={dispatch}/>
                <OperatorComponent operator='-' dispatch={dispatch} />


                <DigitComponent digit='1' dispatch={dispatch}/>
                <DigitComponent digit='2' dispatch={dispatch}/>
                <DigitComponent digit='3' dispatch={dispatch}/>
                <OperatorComponent operator='+' dispatch={dispatch} />


                <DigitComponent digit='0' dispatch={dispatch}/>
                <DigitComponent digit='00' dispatch={dispatch}/>
                <DigitComponent digit='.' dispatch={dispatch}/>
                <button onClick={()=>dispatch({type:EVALUATE})}>=</button>

        </div>
        <main>
            <item>Item1</item>
            <item>Item2</item>
            <item>Item3</item>
            <item>Item4</item>
            <item>Item5</item>
            <item>Item6</item>
            <item>Item7</item>
            <item>Item8</item>
            <item>Item9</item>
            <item>Item10</item>
            <item>Item11</item>
            <item>Item12</item>
            <item>Item</item>
            <item>Item</item>
            <item>Item</item>
            <item>Item</item>
            <item>Item</item>
        </main>

    </div>
)}
export default App
