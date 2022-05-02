import React from "react";
import { ItemMenu, ItemMenuProps } from "../menulat/index";
import styles from "../../styles/ToolTip.module.scss";

type ToolTipPros = {
  dates: Array<ItemMenuProps>;
  isOpen: boolean
};

export default function ToolTip({ dates, isOpen }: ToolTipPros) {
  return (
    <div className={ `${styles.tooltip} ${isOpen ? styles.isOpen : styles.isClose}`}>
      {dates.map((item) => {
        return (
          <div key={item.txt}
            style={{
              padding: "5px",
            }}>
            <ItemMenu txt={item.txt} img={item.img} />
          </div>
        );
      })}
    </div>
  );
}
