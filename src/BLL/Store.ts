import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localstorageUtils";

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type ActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>
export type AppStateType = ReturnType<typeof rootReducer>;

export const actions = {
    incValueAC: () => ({type: "INC-VALUE"} as const),
    incStartValue: (startValue: number) => ({type: "INC-START-VALUE", startValue} as const),
    incMaxValue: (maxValue: number) => ({type: "INC-MAX-VALUE", maxValue} as const),
    setValueAC: () => ({type: "SET-VALUE-FROM-LS"} as const),
    resetValue: () => ({type: "RESET-VALUE"} as const)
}

export const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})
