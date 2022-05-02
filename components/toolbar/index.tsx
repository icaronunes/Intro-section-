import React, { useState } from "react";
import Image from "next/image";
import { useMenu } from "../../useContext/useMenu";
import styles from "../../styles/Toolbar.module.scss";
import logo from "../../public/images/logo.svg";
import menu from "../../public/images/icon-menu.svg";
import menuClose from "../../public/images/icon-close-menu.svg";
import up from "../../public/images/icon-arrow-up.svg";
import down from "../../public/images/icon-arrow-down.svg";

import calendar from "../../public/images/icon-calendar.svg";
import todo from "../../public/images/icon-todo.svg";
import reminders from "../../public/images/icon-reminders.svg";
import planning from "../../public/images/icon-planning.svg";

import MenuLat, { Menu } from "../menulat";
import ToolTip from "../toolTip";

type ToolBarPropsType = {};

const ToolBar = ({}: ToolBarPropsType) => {
  const { isOpen, setOpen } = useMenu();

  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  const featuresDate = [
    { img: todo, txt: "Todo List" },
    { img: calendar, txt: "Calenar" },
    { img: reminders, txt: "Reminders" },
    { img: planning, txt: "Planning" },
  ];

  const companyDate = [
    { img: undefined, txt: "History" },
    { img: undefined, txt: "Our Team" },
    { img: undefined, txt: "Blog" },
  ];

  function handleMenu(target: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    target.preventDefault();
    setOpen(!isOpen);
  }

  const logoMenu = isOpen ? menuClose : menu;

  return (
    <div className={styles.div}>
      <span className={styles.menuContainer}>
        <Image src={logo} alt="logo" />
        <div className={styles.menu}>
          <Menu
            txt="Features"
            img={features ? up : down}
            className={`${styles.menu} ${styles.features}`}            
            onHandle={ () => setFeatures(!features)}
          >
            <ToolTip dates={featuresDate} isOpen={features} />
          </Menu>

          <Menu
            txt="Company"
            img={company ? up : down}
            className={styles.menu}
            onHandle={() => {              
              setCompany(!company);
            }}
          >
            <ToolTip dates={companyDate} isOpen={company} />
          </Menu>
          <Menu txt="Careers" className={styles.menu} />
          <Menu txt="About" className={styles.menu} />
        </div>
      </span>
      <span className={styles.buttons}>
        <button className={`${styles.menu} ${styles.login}`}>Login</button>
        <button className={`${styles.menu} ${styles.register}`}>
          Register
        </button>
      </span>
      <span className={styles.hamburger}>
        <Image src={logoMenu} alt="logo" onClick={handleMenu} />
      </span>
      <MenuLat
        features={features}
        setFeatures={setFeatures}
        setCompany={setCompany}
        company={company}
      />
    </div>
  );
};

export default ToolBar;
