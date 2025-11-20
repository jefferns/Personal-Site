import type { ReactNode } from "react";
import './ViewBody.scss';

type ViewBodyProps = {
  children: ReactNode;
}

const ViewBody = ({ children }: ViewBodyProps) => {
  return ( 
    <div className="view-body">
      <div className="container">
        <div className="row">
          <div className="col">
            {children}
          </div>
        </div>
      </div>  
    </div>
   );
}
 
export default ViewBody;