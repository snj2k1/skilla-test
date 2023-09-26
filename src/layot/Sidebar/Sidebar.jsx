import styles from "./Sidebar.module.css";
import Logo from "../../img/logo.svg";
import { Menu } from "../../components/Menu/Menu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <Link to="/" className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </Link>
      <Menu />
      <div className={styles.buttons}>
        <button className={styles.btn_add}>Добавить заказ</button>
        <button className={styles.btn_pay}>Оплата</button>
      </div>
    </aside>
  );
};

export { Sidebar };
