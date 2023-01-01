import React from "react";
import styles from "./TableBasket.module.scss";
import { ICart } from "../../../../models/ICart";
import TableItem from "../TableItem/TableItem";

const TableBasket: React.FC<ICart> = (data) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.table__head}>
            <th>Фото</th>
            <th>Наименование</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Сумма</th>
            <th> </th>
          </tr>
          {data.items &&
            data.items.map((item, index) => (
              <TableItem key={index} {...item} id={data.id} items={data.items || []} cart={data}/>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBasket;
