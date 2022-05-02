import { isContext } from "vm";
import MenuContextProvider, { UseMenuContext } from "../Context/menuContext";
import { useContext} from 'react'

export function useMenu() {
    return  useContext(UseMenuContext)
}