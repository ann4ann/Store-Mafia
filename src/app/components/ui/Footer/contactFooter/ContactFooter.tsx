import styles from './ContactFooter.module.scss'
import vkIcon from '../images/vk.png'
import instagramIcon from '../images/instagram.png'
import youtubeIcon from '../images/youtube.png'

const ContactFooter: React.FC = () => {

    const items: { img: string, href: string }[] = [
        { img: vkIcon, href: '#' },
        { img: instagramIcon, href: '#' },
        { img: youtubeIcon, href: '#' },
    ]

    return (
        <div className={styles.contactFooter}>
            <h3>8 (064) 765-23-34</h3>
            <p className={styles.text}>ежедневно, 10:00-22:00</p>
            <h3>shop@mafia-rekvizit.ru</h3>
            <ul className={styles.list}>
                {items.map(elem => <li key={elem.img} className={styles.item}>
                    <a href={elem.href}> <img src={elem.img} alt="social" /> </a>
                </li>)}
            </ul>
        </div>
    );
};

export default ContactFooter;