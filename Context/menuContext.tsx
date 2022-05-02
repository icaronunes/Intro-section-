import { createContext, useState, useCallback, SetStateAction } from "react";

export const UseMenuContext = createContext({} as MenuContextType);

export type MenuContextType = {
  isOpen: Boolean;
  setOpen: React.Dispatch<SetStateAction<Boolean>>;
};

type MenuContextProps = {
  children: React.ReactNode;
};

const MenuContextProvider = ({ children }: MenuContextProps) => {
  const [isOpen, setOpen] = useState<Boolean>(false);

  return (
    <UseMenuContext.Provider value={{
        isOpen,
        setOpen
        }}>
      {children}
    </UseMenuContext.Provider>
  );
};

export default MenuContextProvider;
