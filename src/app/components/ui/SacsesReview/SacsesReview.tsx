import styles from './SacsesReview.module.scss'

interface IPrors {
    setVisible: any, 
    title: string
}

const SacsesReview: React.FC<IPrors> = ({ setVisible, title }) => {

    return (
        <div className={styles.sacsesInner} onClick={() => setVisible(false)}>
            <div className={styles.sacses}>
                <h3 className={styles.title}>{title}</h3>
                <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M78.6839 11.0734C77.4923 9.87975 75.5589 9.8777 74.3674 11.0683L37.7444 47.5946L24.531 33.2435C23.3892 32.0041 21.4589 31.9238 20.2174 33.0654C18.977 34.2071 18.8975 36.1385 20.0393 37.3789L35.4049 54.0664C35.9677 54.678 36.7552 55.0331 37.5856 55.0504C37.6079 55.0513 37.6294 55.0513 37.6508 55.0513C38.4578 55.0513 39.2341 54.7308 39.806 54.161L78.6779 15.3909C79.8725 14.2004 79.8746 12.267 78.6839 11.0734Z" fill="#75D67E" />
                    <path d="M77.9472 37.4472C76.261 37.4472 74.8945 38.8137 74.8945 40.5C74.8945 59.4659 59.4659 74.8945 40.5 74.8945C21.5352 74.8945 6.10553 59.4659 6.10553 40.5C6.10553 21.5352 21.5352 6.10553 40.5 6.10553C42.1861 6.10553 43.5528 4.73897 43.5528 3.05285C43.5528 1.36656 42.1861 0 40.5 0C18.168 0 0 18.168 0 40.5C0 62.831 18.168 81 40.5 81C62.831 81 81 62.831 81 40.5C81 38.8139 79.6334 37.4472 77.9472 37.4472Z" fill="#75D67E" />
                </svg>
            </div>
        </div>
    );
};

export default SacsesReview;