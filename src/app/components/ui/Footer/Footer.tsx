import Wrapper from "../Wrapper/Wrapper";
import ContactFooter from "./contactFooter/ContactFooter";
import CotalogFooter from "./cotalogFooter/CotalogFooter";
import DiscountFooter from "./discountFooter/DiscountFooter";
import styles from "./Footer.module.scss";
import LogoInner from "./logoInner/LogoInner";
import Support from "./support/Support";

const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>
            <Wrapper>
                <div className={styles.container}>
                    <LogoInner />
                    <CotalogFooter/>
                    <Support/>
                    <ContactFooter/>
                    <DiscountFooter />
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer;