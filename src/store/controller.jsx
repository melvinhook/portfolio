import { create } from "zustand";
const controller = create((set)=>({  
    transition: false,
    pos: false,
    curtain: false,  
    setCurtain: (curtain) => set({curtain}),    
    setPos: (pos) => set({pos}),
    setTransition: (transition) => set({transition})
})) 
export default controller