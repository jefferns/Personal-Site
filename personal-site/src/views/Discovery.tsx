import AppBar from "../components/AppBar/AppBar";
import Footer from "../components/Footer/Footer";
import ViewBody from "../components/ViewBody/ViewBody";
import './Views.scss';

const Discovery = () => {
  return ( 
    <div className="view container-full-width">
      <AppBar/>
      <ViewBody>
        discovery
      </ViewBody>
      <Footer/>
    </div>
   );
}
 
export default Discovery;