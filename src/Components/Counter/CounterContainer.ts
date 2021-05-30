import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Counter} from "./Counter";
import {actions, AppStateType} from "../../BLL/Store";

interface IMapStatePropsReturn {
    value: number,
    maxValue: number
    startValue:number
    isChange:boolean
}

interface IMapDispatchPropsReturn {
    inc: () => void
    reset: () => void
}

export type CounterContainerType = IMapStatePropsReturn & IMapDispatchPropsReturn

const mapStateToProps = (state: AppStateType): IMapStatePropsReturn => {
    return {
        value: state.counter.value,
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue,
        isChange: state.counter.isChange
    }
}
const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchPropsReturn => {
    return {
        inc: () => {
            dispatch(actions.incValueAC());
        },
        reset: () => {
            dispatch(actions.resetValue());
        }
    }
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

