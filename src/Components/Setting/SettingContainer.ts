import {connect} from "react-redux";
import {Dispatch} from "redux";
import {actions, AppStateType} from "../../BLL/Store";
import {Setting} from "./Setting";
import {ChangeEvent} from "react";

interface IMapStatePropsReturn {
    startValue: number,
    maxValue: number,
    isChange: boolean
}

interface IMapDispatchPropsReturn {
    set: () => void,
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export type SettingContainerType = IMapStatePropsReturn & IMapDispatchPropsReturn

const mapStateToProps = (state: AppStateType): IMapStatePropsReturn => {
    return {
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue,
        isChange: state.counter.isChange
    }
}
const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchPropsReturn => {
    return {
        set: () => {
            dispatch(actions.setValueAC())
        },
        changeMaxValue: (e) => {
            dispatch(actions.incMaxValue(JSON.parse(e.currentTarget.value)))
        },
        changeStartValue: (e) => {
            dispatch(actions.incStartValue(JSON.parse(e.currentTarget.value)))
        }
    }
}

export const SettingContainer = connect(mapStateToProps, mapDispatchToProps)(Setting)

