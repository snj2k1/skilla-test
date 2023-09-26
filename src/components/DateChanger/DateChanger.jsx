import { useState } from "react";
import Left from "../../img/keyboard_arrow_left.svg";
import Right from "../../img/keyboard_arrow_right.svg";
import styles from "./DateChanger.module.css";

const DateChanger = () => {
  const [days, setDays] = useState(1);
  return (
    <div className={styles.datePicker}>
      <button onClick={() => (days !== 1 ? setDays(days - 1) : 1)}>
        <img src={Left} alt="left-arrow" />
      </button>
      <span>
        {days +
          " " +
          (days === 1
            ? "день"
            : days === 2 || days === 3 || days === 4
            ? "дня"
            : "дней")}
      </span>
      <button onClick={() => setDays(days + 1)}>
        <img src={Right} alt="right-arrow" />
      </button>
    </div>
  );
};

export { DateChanger };
