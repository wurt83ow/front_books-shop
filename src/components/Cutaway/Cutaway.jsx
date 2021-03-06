import React from "react";
import s from "./Cutaway.module.sass";

export default function Cutaway({ name, mail, phone, img_name }) {
  return (
    <div className={s.cutaway}>
      <img
        src={`${window.location.origin}/backImg/${img_name}`}
        alt={img_name}
      />
      <div className={s.cutaway_info}>
        <h2>{name}</h2>
        <p>{`Mail: ${mail}`}</p>
        <p>{`Phone: ${phone}`}</p>
      </div>
    </div>
  );
}
