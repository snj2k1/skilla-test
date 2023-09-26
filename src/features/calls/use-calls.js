import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCalls, selectCallInfo, selectCallsList } from "./calls-slice";

export const useCalls = () => {
  const dispatch = useDispatch();
  const calls = useSelector(selectCallsList);
  const { status, error, qty } = useSelector(selectCallInfo);

  useEffect(() => {
    if (!qty) dispatch(fetchCalls());
  }, [qty, dispatch]);

  /*useEffect(() => {
    if (Object.keys(filters).length) dispatch(loadGames(filters));
  }, [filters, dispatch]);*/

  return [calls, { status, error, qty }];
};
