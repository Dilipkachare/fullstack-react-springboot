import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
//import "./footer.css";
import styles from "./footer.module.css";
import styled from "styled-components";
import EazyButton from "../EazyButton";

const H1=styled.h1`
color: #5B21B6;
text-align: center;
`;

export default function Footer() {
  const isActive = Math.random() > 0.5;
  return (
    <>
    <H1>
      Welcome to Eazy Store!
    </H1>
    <EazyButton $primary>submit</EazyButton>
    {/* <h1
        className={`${styles["my-heading"]} ${
          isActive ? styles["primary-color"] : styles["secondary-color"]
        }`}
      >
     demo of global scope from footer
      </h1>
      */}
   {/*<h1 style={{
    textAlign: "center",
    color: isActive ? "#333" : "#5B21B6"
    }}
    >
     demo of global scope from footer
     </h1>}
     */}
   {/*<h1 className="my-heading"> demo of global scope from footer</h1>*/}
    <footer className={styles.footer}>
      Buit with
      <FontAwesomeIcon
        icon={faHeart}
        className={styles["footer-icon"]}
        aria-hidden="true"
      />
      by
      <a href="https://dilipkachare.netlify.app/" target="_blank" rel="noreferrer">
        Dilip K
      </a>
    </footer>
     </>
  );
}
