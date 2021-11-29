import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {

    let text = "/product";
    

          window.scrollTo(0, 300);
      
    
  }, [pathname]);

  return null;
}