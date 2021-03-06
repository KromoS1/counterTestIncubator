import {AppStateType} from "../BLL/Store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return undefined;
    }
}

export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("state",serializedState)
    }catch {}

}
