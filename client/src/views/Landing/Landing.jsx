import React from "react";
import { Link } from "react-router-dom";
import landing from "./landing.module.css";

export default function Landing() {
  return (
    <div className={landing.landing}>
      <div>
        <Link to={"/home"}>
          <button className={landing.boton}>HOME PAGE</button>
        </Link>
      </div>
    </div>
  );
}
