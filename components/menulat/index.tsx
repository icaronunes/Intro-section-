import React, { Children, useState } from "react";
import Image from "next/image";
import styles from "../../styles/MenuLat.module.scss";
import up from "../../public/images/icon-arrow-up.svg";
import down from "../../public/images/icon-arrow-down.svg";
import calendar from "../../public/images/icon-calendar.svg";
import todo from "../../public/images/icon-todo.svg";
import reminders from "../../public/images/icon-reminders.svg";
import planning from "../../public/images/icon-planning.svg";
import { useMenu } from "../../useContext/useMenu";

type MenuLatProps = {
  features: boolean;
  setFeatures: React.Dispatch<React.SetStateAction<boolean>>;
  company: boolean;
  setCompany: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MenuLat({
  features,
  setFeatures,
  company,
  setCompany,
}: MenuLatProps) {
  const { isOpen } = useMenu();

  return (
    <div
      className={
        isOpen
          ? `${styles.div} ${styles.open}`
          : `${styles.div} ${styles.hidden}`
      }
    >
      <Menu
        img={features ? up : down}
        txt="Features"
        onHandle={() => {
          setFeatures(!features);
        }}
      />
      <ul className={features ? `${styles.openItems}` : `${styles.closeItems}`}>
        <li>
          <ItemMenu txt="Todo List" img={todo} />
        </li>
        <li>
          <ItemMenu txt="Calenar" img={calendar} />
        </li>
        <li>
          <ItemMenu txt="Reminders" img={reminders} />
        </li>
        <li>
          <ItemMenu txt="Planning" img={planning} />
        </li>
      </ul>

      <Menu
        img={company ? up : down}
        txt="Company"
        onHandle={() => {
          setCompany(!company);
        }}
      />
      <ul className={company ? `${styles.openItems}` : `${styles.closeItems}`}>
        <li>
          <ItemMenu txt="History" />
        </li>
        <li>
          <ItemMenu txt="Our Team" />
        </li>
        <li>
          <ItemMenu txt="Blog" />
        </li>
      </ul>
      <Menu txt="Careers" onHandle={() => {}} />
      <Menu txt="About" onHandle={() => {}} />
    </div>
  );
}

export type ItemMenuProps = {
  txt: string;
  img?: any | undefined;
};

export function ItemMenu({ txt, img }: ItemMenuProps) {
  const padding = {
    padding: "10px 0px",
  };

  return (
    <span className={styles.MenuItem}>
      {img ? (
        <>
          <Image src={img} />
          <h6>{txt}</h6>
        </>
      ) : (
        <h6 style={padding}>{txt}</h6>
      )}
    </span>
  );
}

type MenuProps = {
  txt: string;
  img?: any | undefined;
  onHandle?: () => void | undefined;
  children?: React.ReactNode;
  className?: string | undefined;
};

export function Menu({ txt, img, onHandle, className, children }: MenuProps) {
  return (
    <span>
      <span
        className={`${styles.Menu} ${className}`}
        style={{
          marginRight: "40px",
        }}
        onClick={onHandle}
      >
        <h6>{txt}</h6>
        {img && <Image src={img} />}
      </span>
      {children}
    </span>
  );
}
