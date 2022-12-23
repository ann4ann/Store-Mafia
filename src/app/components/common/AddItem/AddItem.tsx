import React, { FC, useState } from "react";
import style from "./AddItem.module.scss";

export const AddItem: FC<{ quantity: number }> = ({ quantity }) => {
  const [count, setCount] = useState(quantity);

  const handleDec = () => {
    if (count < 10) setCount(count + 1);
  };

  const handleInc = () => {
    if (count !== 0) setCount(count - 1);
  };

  return (
    <div>
      <button
        className={style.btn}
        onClick={(event: any) => {
          handleInc();
        }}
      >
        -
      </button>
      <span>{count} шт. </span>
      <button
        className={style.btn}
        onClick={(event: any) => {
          handleDec();
        }}
      >
        +
      </button>
    </div>
  );
};
