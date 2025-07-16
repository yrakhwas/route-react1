import { Button } from "antd";
// import { useContext } from "react";
// import { CounterContext } from "../store/reducers/counter.reducer";
import { useDispatch } from "react-redux";
import {COUNTER_ACTION_TYPES, decrement, increment, reset} from "../store/reducers/counter.reducer";

function Counter (){

    // const {increment, decrement, reset} = useContext(CounterContext);
    const dispatch = useDispatch();
    // const increment = () => dispatch({type: COUNTER_ACTION_TYPES.INCREMENT});
    // const decrement = () => dispatch({type: COUNTER_ACTION_TYPES.DECREMENT});
    // const reset = () => dispatch({type: COUNTER_ACTION_TYPES.RESET});

    return (
        <>
            <h2>Counter manager</h2>
            <Button onClick={()=>dispatch(increment())}>Increment</Button>
            <Button onClick={()=>dispatch(decrement())}>Decrement</Button>
            <Button onClick={()=>dispatch(reset())}>Reset</Button>
        </>
    )
}

export default Counter;