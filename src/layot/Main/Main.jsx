import { CallList } from "../../components/CallList/CallList";
import { DateChanger } from "../../components/DateChanger/DateChanger";
import { Filter } from "../../components/Filter/Filter";
import "./Main.module.css";

const Main = () => {
  return (
    <main>
      <DateChanger />
      <Filter />
      <CallList />
    </main>
  );
};

export { Main };
