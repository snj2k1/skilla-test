import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav>
      <ul className="nav_list">
        <NavLink className="nav_list__results" to="/results">
          Итоги
        </NavLink>
        <NavLink className="nav_list__orders" to="/orders">
          Заказы
        </NavLink>
        <NavLink className="nav_list__messages" to="/messages">
          Сообщения
        </NavLink>
        <NavLink className="nav_list__calls" to="/">
          Звонки
        </NavLink>
        <NavLink className="nav_list__counterparties" to="/counterparties">
          Контрагенты
        </NavLink>
        <NavLink className="nav_list__documents" to="/documents">
          Документы
        </NavLink>
        <NavLink className="nav_list__performers" to="/performers">
          Исполнители
        </NavLink>
        <NavLink className="nav_list__reports" to="/reports">
          Отчеты
        </NavLink>
        <NavLink className="nav_list__db" to="/db">
          База знаний
        </NavLink>
        <NavLink className="nav_list__settings" to="/settings">
          Настройки
        </NavLink>
      </ul>
    </nav>
  );
};

export { Menu };
