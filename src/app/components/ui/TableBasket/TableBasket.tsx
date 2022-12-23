import React, { useState } from "react";
import { productAPI } from "../../../../services/ProductService";
import { IProduct } from "../../../../models/IProduct";
import { cartAPI } from "../../../../services/CartService";
import styles from "./TableBasket.module.scss";
import { AddItem } from "../../common/AddItem/AddItem";

const cart1 = {
  id: 1,
  userId: 1,
  items: [
    {
      productId: 1,
      quantity: 2,
    },
    {
      productId: 2,
      quantity: 1,
    },
    {
      productId: 6,
      quantity: 3,
    },
  ],
};

const TableBasket = () => {
  // const {
  //   data: cart,
  //   error: cartError,
  //   isLoading: isLoadingCart,
  // } = cartAPI.useFetchCartByIdQuery(1);
  // console.log(cart);

  // function getProductById(id: number) {
  //   const {
  //     data: product,
  //     error: errorProduct,
  //     isLoading: isLoadingProduct,
  //   } = productAPI.useFetchProductByIdQuery(id);
  //   return product;
  // }

  // cart?.items?.map((item) => {
  //   const {
  //     data: product,
  //     error: errorProduct,
  //     isLoading: isLoadingProduct,
  //   } = productAPI.useFetchProductByIdQuery(item.productId);
  //   return (
  //     <tr className={styles.table__row}>
  //       <td>{product?.img[0]}</td>
  //       <td>{product?.name}</td>
  //       <td>3</td>
  //       <td>{product?.price}</td>
  //       <td>5</td>
  //       <td>X</td>
  //     </tr>
  //   );
  // });

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
          {cart1 &&
            cart1.items.map((item) => (
              <tr className={styles.table__row}>
                <td>{item.productId}</td>
                <td>ItemName</td>
                <td>
                  <AddItem quantity={item.quantity} />
                </td>
                <td>ItemPrice</td>
                <td>ItemFinalPrice</td>
                <td>X</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBasket;
