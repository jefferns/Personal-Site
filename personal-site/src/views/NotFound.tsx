import { Link } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";

const NotFound = () => {
  return ( 
    <div className="container-full-width">
      <AppBar/>
      <p>
        Oh no!
      </p>
      <p>
        Page not found.
      </p>
      <Link to='/'>
        Back to Homepage
      </Link>
    </div>
   );
}
 
export default NotFound;