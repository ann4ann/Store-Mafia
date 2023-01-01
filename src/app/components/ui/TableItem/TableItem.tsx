import { ICart, productItem } from '../../../../models/ICart';
import { useUpdateCartByIdMutation } from '../../../../services/CartService';
import { useFetchProductByIdQuery } from '../../../../services/ProductService';
import { AddItem } from '../../common/AddItem/AddItem';
import styles from './TableItem.module.scss';

interface IProps {
    quantity: number,
    productId: number,
    id: number,
    items: productItem[],
    cart: ICart
}

const TableItem: React.FC<IProps> = ({ quantity, productId, id, items, cart }) => {

    const { data } = useFetchProductByIdQuery(productId)
    const [deleteCartById] = useUpdateCartByIdMutation()

    const deleteProductHandler = async () => {
        await deleteCartById([1, [cart, items.filter(elem => elem.productId !== productId)]])
    }

    return (
        <tr className={styles.table__row}>
            <td>{productId}</td>
            <td>{data?.name || 'ItemName'}</td>
            <td>
                <AddItem quantity={quantity} productId={productId} id={id} items={items} cart={cart} />
            </td>
            <td>{data?.price || 'ItemPrice'}</td>
            <td>{quantity * (data?.price || 1)}</td>
            <td className={styles.table__btn_Inner}>
                <div
                    className={styles.table__btn}
                    onClick={() => deleteProductHandler()}>
                    X
                </div>
            </td>
        </tr>
    );
};

export default TableItem;