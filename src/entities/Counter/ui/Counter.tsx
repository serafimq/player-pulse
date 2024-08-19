import { useDispatch } from "react-redux"
import { counterAction } from "../model/slice/counterSlice";
import { useSelector } from "react-redux";
import { getCouneterValue } from "../model/selector/getCounterValue/getCounterValue";

export function Counter() {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCouneterValue);

    function handleClickPlus() {
        dispatch(counterAction.decrement())
    }
    function handleClickMinus() {
        dispatch(counterAction.increment())
    }
    return (
        <>
        <div>Value = {counterValue}</div>
        <button onClick={handleClickPlus}>click +</button>
        <button onClick={handleClickMinus}>click -</button>
        </>
    )
}