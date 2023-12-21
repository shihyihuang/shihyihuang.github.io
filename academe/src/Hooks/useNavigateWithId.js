import { createSearchParams, useNavigate } from "react-router-dom";

const useNavigateWithId = () => {
  const navigate = useNavigate();
  return (pathname, param) =>
    navigate({ pathname, search: `?${createSearchParams(param)}` });
};

export default useNavigateWithId;
