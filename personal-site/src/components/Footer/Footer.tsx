import { useState } from "react";
import './Footer.scss';

const Footer = () => {
  const [count, _setCount] = useState<number>(0);
  return ( 
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col d-flex j-c-center">
            {count}
          </div>
        </div>        
      </div>
    </div>
   );
}
 
export default Footer;