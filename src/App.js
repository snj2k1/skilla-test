import { Main } from "./layot/Main/Main";
import styles from "./App.module.css";
import { Sidebar } from "./layot/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/results" element={<Main />} />
          <Route path="/orders" element={<Main />} />
          <Route path="/messages" element={<Main />} />
          <Route path="/counterparties" element={<Main />} />
          <Route path="/documents" element={<Main />} />
          <Route path="/performers" element={<Main />} />
          <Route path="/reports" element={<Main />} />
          <Route path="/db" element={<Main />} />
          <Route path="/settings" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
