import { ICart, productItem } from "../../../../models/ICart";
import { useUpdateCartByIdMutation } from "../../../../services/CartService";
import style from "./AddItem.module.scss";

interface IProps {
  quantity: number,
  id: number,
  items: productItem[],
  productId: number,
  cart: ICart
}

export const AddItem: React.FC<IProps> = ({
  quantity, id, items, productId, cart
}) => {

  const [updateCartById] = useUpdateCartByIdMutation()

  const handleDec = async () => {
    if (quantity < 9) {
      await updateCartById([id, [cart, items.map(elem => {
        if (elem.productId === productId) {
          return { ...elem, quantity: quantity + 1 }
        }
        return elem
      })]])
    }
  };

  const handleInc = async () => {
    if (quantity !== 1) {
      await updateCartById([id, [cart, items.map(elem => {
        if (elem.productId === productId) {
          return { ...elem, quantity: quantity - 1 }
        }
        return elem
      })]])
    }
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
      <span>{quantity} шт. </span>
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
