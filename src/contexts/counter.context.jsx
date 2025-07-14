import { createContext, useState } from "react";

export const CounterContext =  createContext({
    count: 0,
    increment: ()=> null,
    decrement: ()=> null,
    reset: ()=> null,
});
export const CounterProvider = ({children})=>{
    const[count, setCount] = useState(0);

    const increment = ()=> setCount(count + 1);
    const decrement = ()=> setCount(count - 1);     
    const reset = ()=> setCount(0);
    
    return <CounterContext.Provider value={{count, increment, decrement, reset}}>{children}</CounterContext.Provider>;
}
