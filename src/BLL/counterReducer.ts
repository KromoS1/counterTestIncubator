import {actions, ActionsType} from "./Store";

const initialState = {
    value: 0,
    maxValue: 0,
    startValue:0
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType<typeof actions>): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            if (state.value< state.maxValue){
                return {...state, value: state.value + 1}
            }
            return {...state};
        case "SET-VALUE-FROM-LS":
            return {...state,value: state.startValue}
        case "INC-START-VALUE":
            return {...state,startValue:action.startValue}
        case "INC-MAX-VALUE":
            return {...state,maxValue: action.maxValue}
        case "RESET-VALUE":
            return {...state,value:state.startValue}
        default:
            return state;
    }
}
