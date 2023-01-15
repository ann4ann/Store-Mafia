import { useUpdateQuantityMutation } from "../../../../services/CartService";
import style from "./AddItem.module.scss";

interface IProps {
  quantity: number,
  productId: string,
  userId: string
}

export const AddItem: React.FC<IProps> = ({ quantity, productId, userId }) => {

  const [updateCartById] = useUpdateQuantityMutation()

  const handleInc = async () => {
    if (quantity < 9) {
      await updateCartById({ productId, quantity: quantity + 1, userId })
    }
  };

  const handleDec = async () => {
    if (quantity !== 1) {
      await updateCartById({ productId, quantity: quantity - 1, userId })
    }
  };

  return (
    <div>
      <button
        className={style.btn}
        onClick={() => {
          handleDec();
        }}
      >
        -
      </button>
      <span>{quantity} шт. </span>
      <button
        className={style.btn}
        onClick={() => {
          handleInc();
        }}
      >
        +
      </button>
    </div>
  );
};
