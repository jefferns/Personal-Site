import { Link } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";
import ViewBody from "../components/ViewBody/ViewBody";
import Footer from "../components/Footer/Footer";

const NotFound = () => {
  return ( 
    <div className="view container-full-width">
      <AppBar/>
      <ViewBody>
        <p>
          Oh no!
        </p>
        <p>
          Page not found.
        </p>
        <Link to='/'>
          Back to Homepage
        </Link>
      </ViewBody>
      <Footer/>
    </div>
   );
}
 
export default NotFound;