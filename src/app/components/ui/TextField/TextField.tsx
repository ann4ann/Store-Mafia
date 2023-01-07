import styles from './TextField.module.scss';

interface TextFieldProps {
    typeInput?: string;
    placeholder?: string;
    title?: string;
    value: string,
    setValue: (value: string) => void,
}

const TextField: React.FC<TextFieldProps> = (props) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(event.target.value);
    }

    return (
        <div className={styles.inputInner}>
            {props.title && <p className={styles.title}>{props.title}</p>}
            <input
                type={props.typeInput ? props.typeInput : 'text'}
                placeholder={props.placeholder ? props.placeholder : ''}
                value={props.value}
                onChange={handleChange}
                className={styles.input}
            />
        </div>
    );
}

export default TextField;