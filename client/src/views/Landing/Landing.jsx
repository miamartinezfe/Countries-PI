import React from "react";
import { Link } from "react-router-dom";
import styles from "./landing.module.css";

export default function Landing() {
  return (
    <div className={styles.body}>
      <Link to={"/home"}>
        <button>HOME PAGE</button>
      </Link>
    </div>
  );
}
