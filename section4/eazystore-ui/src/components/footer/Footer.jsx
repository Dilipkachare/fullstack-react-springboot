import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
//import "./footer.css";
import styles from "./footer.module.css";

export default function Footer() {
  const isActive = Math.random() > 0.5;
  return (
    <>
     <h1
        className={`${styles["my-heading"]} ${
          isActive ? styles["primary-color"] : styles["secondary-color"]
        }`}
      >
     demo of global scope from footer
      </h1>
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
        className={styles["heart-icon"]}
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
