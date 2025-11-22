import { Link } from "react-router-dom";
import './HomePageLink.scss';


const HomePageLink = () => {

  return ( 
    <div className="home-page-link d-flex a-c-center j-c-center">
      <Link to={"/"}> jefferis.dev </Link>
    </div>
  );
}
 
export default HomePageLink;