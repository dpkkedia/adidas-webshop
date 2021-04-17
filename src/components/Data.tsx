import { useActions } from "../hooks/useActions";
import { useEffect } from "react";

const Data: React.FC = () => {
  const { searchProducts } = useActions();
  useEffect(() => {
    searchProducts();
  }, [searchProducts]);
   return (<></>);
};

export default Data;
