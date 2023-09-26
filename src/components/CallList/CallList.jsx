import React from "react";
import { Checkbox } from "antd";
import { useCalls } from "../../features/calls/use-calls";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Call1 from "../../img/call1.svg";
import Call0 from "../../img/call0.svg";
import styles from "./CallList.module.css";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 48, color: "white" }} spin />
);

const CallList = () => {
  const [calls, { error, status }] = useCalls();

  return (
    <>
      {error && <h2>Failed to load...</h2>}
      {status === "pending" && (
        <Spin
          style={{ position: "absolute", top: "50%", right: "50%" }}
          indicator={antIcon}
        />
      )}
      {status === "succeeded" && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <Checkbox />
              </th>
              <th>Тип</th>
              <th>Время</th>
              <th>Сотрудник</th>
              <th>Звонок</th>
              <th>Источник</th>
              <th>Статус</th>
              <th>Длительность</th>
            </tr>
          </thead>
          <tbody>
            {calls.results.map((el, index) => {
              return (
                <tr key={index}>
                  <th>
                    <Checkbox />
                  </th>
                  <th>
                    {el.in_out === 1 ? (
                      <img src={Call1} alt="call_type" />
                    ) : (
                      <img src={Call0} alt="call_type" />
                    )}
                  </th>
                  <th>
                    {new Date(el.date).toLocaleString("ru", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </th>
                  <th>
                    <img src={el.person_avatar} alt="person_avatar" />
                  </th>
                  <th>{el.in_out === 1 ? el.from_number : el.to_number}</th>
                  <th style={{ color: "rgba(94, 119, 147, 1)" }}>
                    {el.partner_data.name}
                  </th>
                  <th>
                    {el.status === "Дозвонился" ? (
                      <span
                        style={{
                          color: "green",
                          padding: "10px",
                          border: "1px solid green",
                          borderRadius: "10px",
                        }}
                      >
                        {el.status}
                      </span>
                    ) : (
                      <span
                        style={{
                          color: "red",
                          padding: "10px",
                          border: "1px solid red",
                          borderRadius: "10px",
                        }}
                      >
                        {el.status}
                      </span>
                    )}
                  </th>
                  <th style={{ textAlign: "right" }}>
                    {new Date(el.time * 1000).toISOString().slice(14, 19)}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export { CallList };
