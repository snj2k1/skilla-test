import { Select } from "antd";
import styles from "./Filter.module.css";

const Filter = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={styles.filter}>
      <Select
        defaultValue="Все звонки"
        style={{
          width: 120,
          height: "100%",
        }}
        onChange={handleChange}
        options={[
          {
            value: "",
            label: "Все звонки",
          },
          {
            value: 1,
            label: "Входящие",
          },
          {
            value: 0,
            label: "Исходящие",
          },
        ]}
      />
    </div>
  );
};

export { Filter };
