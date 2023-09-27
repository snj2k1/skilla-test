import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCalls, selectCallInfo, selectCallsList } from "./calls-slice";
import { selectFilters } from "../filters/filters-slice";

export const useCalls = () => {
  const dispatch = useDispatch();
  const calls = useSelector(selectCallsList);
  const { status, error, qty } = useSelector(selectCallInfo);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    if (!qty) dispatch(fetchCalls());
  }, [qty, dispatch]);

  useEffect(() => {
    if (Object.keys(filters).length) dispatch(fetchCalls(filters));
  }, [filters, dispatch]);

  return [calls, { status, error, qty }];
};
