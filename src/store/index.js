import { create } from "zustand";
import { createRefSlice } from "./refSlice/refSlice";


export const useAppStore = create()((set) => ({
    ...createRefSlice(set),
 
}))