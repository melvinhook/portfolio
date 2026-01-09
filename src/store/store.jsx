import { create } from "zustand";
import axios from "axios";
const store = create((set) => ({  
  index: 0,
  setIndex: (index) => set({index}),
  fetch: async () => { 
    console.log("FETCHING LOCAL JSON")
    try {
      const res = await axios.get("/data/data.json"); 
      console.log("GOTCHA!,",res.data) 
      return res.data;
    } catch (error) {
        console.log("Fetching json failed:",error)
    }
  },
})); 
export default store
