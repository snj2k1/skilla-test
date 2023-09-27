import { useDispatch } from "react-redux";
import styles from "./DateChanger.module.css";
import { DatePicker } from "antd";
import { clearDate, setDate } from "../../features/filters/filters-slice";
const { RangePicker } = DatePicker;

const DateChanger = () => {
  const dispatch = useDispatch();

  const handleChange = (data) => {
    if (!data[0] && !data[1]) {
      dispatch(clearDate());
    } else {
      dispatch(setDate(data));
    }
  };

  return (
    <div className={styles.datePicker}>
      <RangePicker onChange={(_, dateString) => handleChange(dateString)} />
    </div>
  );
};

export { DateChanger };
