import React from "react";
import Image from "next/image";
import styles from "../../styles/Companys.module.scss";
import audiophile from "/public/images/client-audiophile.svg";
import maker from "/public/images/client-maker.svg";
import meet from "/public/images/client-meet.svg";
import databiz from "/public/images/client-databiz.svg";

export default function Companys() {
  return (
    <span className={styles.span}>
      <Image src={audiophile} />      
      <Image src={meet} />
      <Image src={databiz} />
      <Image src={maker} />
    </span>
  );
}
    