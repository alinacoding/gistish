import { useEffect } from "react";
const NavigateExternal = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, []);
  return null;
};
export default NavigateExternal;
