import { useDeleteCartItemMutation } from '../../../../services/CartService';
import { useFetchProductByIdQuery } from '../../../../services/ProductService';
import { AddItem } from '../../common/AddItem/AddItem';
import styles from './TableItem.module.scss';

interface IProps {
    quantity: number,
    productId: string,
    userId: string,
}

const TableItem: React.FC<IProps> = ({ quantity, productId, userId }) => {

    const { data } = useFetchProductByIdQuery(productId)
    const [deleteCartById] = useDeleteCartItemMutation()

    const deleteProductHandler = async () => {
        await deleteCartById({productId, userId})
    }

    return (
        <tr className={styles.table__row}>
            <td>{productId}</td>
            <td>{data?.name || 'ItemName'}</td>
            <td>
                <AddItem quantity={quantity} productId={productId} userId={userId} />
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