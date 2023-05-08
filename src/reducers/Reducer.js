import {ADD_DIGIT,DELETE,CHOOOSE_OPERATOR,EVALUATE,CLEAR} from '../constants/constants'
export const intitialState ={currentOperant:'0',previousOperant:'',operator:''}

export const evaluate = (prev,current,operator)=>{
    const num1 = parseFloat(prev)
    const num2 = parseFloat(current)

    switch(operator){
        case '+':
            return (num1 + num2).toString()

        case '-':
            return (num1 - num2).toString()

        case '÷':
            return (num1 / num2).toString()

        case 'x':
            return (num1 * num2).toString()

        default:
            return num1.toString();
    }
}
export default function reducer  (state = intitialState,{type,payload}){

    switch (type) {
        case ADD_DIGIT:
            if(state.rewrite) return {...state,currentOperant:payload,rewrite:false}
            if(payload==='.' && state.currentOperant.includes('.')) return state;
            if(payload==='.' && state.currentOperant==='') return {...state,currentOperant:'0.'}
            if(state.currentOperant) return {...state,currentOperant:`${state.currentOperant}${payload}`}
            return {...state, currentOperant:payload};

        case DELETE:
            if(state.currentOperant) return {...state,currentOperant:state.currentOperant.slice(0,-1)};
            return state

        case CLEAR:
            return intitialState

        case CHOOOSE_OPERATOR:
            if(!state.currentOperant && !state.previousOperant) return state;
            if(state.currentOperant && state.previousOperant) return {...state,previousOperant:evaluate(state.previousOperant,state.currentOperant,state.operator),currentOperant:'',operator:payload}
            if(state.currentOperant) return {...state,currentOperant:'', previousOperant:evaluate(state.currentOperant),  operator:payload}
            return{...state,operator:payload}

        case EVALUATE:
            if(state.currentOperant==='.') return {...state,currentOperant:'0'}
            if(state.currentOperant && state.previousOperant) return {...state, currentOperant:evaluate(state.previousOperant,state.currentOperant,state.operator), previousOperant:'',operator:'',rewrite:true}
            if(state.previousOperant) return {...state, currentOperant:evaluate(state.previousOperant),previousOperant:'',operator:'',rewrite:true}
            return {...state,currentOperant:evaluate(state.currentOperant),rewrite:true}

        default:
            return state;
    }

}
