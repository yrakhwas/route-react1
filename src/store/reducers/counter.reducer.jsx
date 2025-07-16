// import { useReducer } from "react";
// import { createContext } from "react";

const INITIAL_STATE = {
    count: 1,
    name: 'Counter',
}

// export const CounterContext =  createContext({
//     count: 0,
//     increment: ()=> null,
//     decrement: ()=> null,
//     reset: ()=> null,
// });

export const COUNTER_ACTION_TYPES = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
}

export const increment = () => ({type: COUNTER_ACTION_TYPES.INCREMENT});
export const decrement = () => ({type: COUNTER_ACTION_TYPES.DECREMENT});
export const reset = () => ({type: COUNTER_ACTION_TYPES.RESET});

export const selectCount = (state) => state.counter.count;
export const selectName = (state) => state.counter.name;

export const counterReducer = (state = INITIAL_STATE, action)=>{
    const {type, payload} = action;
    switch(type){
        case COUNTER_ACTION_TYPES.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };

        case COUNTER_ACTION_TYPES.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case COUNTER_ACTION_TYPES.RESET:
            return {
                ...state,
                count: INITIAL_STATE.count,
            };
        default:
            return state;
    }
}

// export const CounterProvider = ({children})=>{
//     const[{count, name}, dispatch] =  useReducer(counterReducer, INITIAL_STATE);

//     const increment = () => dispatch({type: COUNTER_ACTION_TYPES.INCREMENT});
//     const decrement = () => dispatch({type: COUNTER_ACTION_TYPES.DECREMENT});
//     const reset = () => dispatch({type: COUNTER_ACTION_TYPES.RESET});


//     const value = {
//         count,
//         name,
//         increment,
//         decrement,
//         reset,
//     };

//     return <CounterContext.Provider value={value}>
//         {children}
//     </CounterContext.Provider>;
// }
