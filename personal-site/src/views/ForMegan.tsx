import AppBar from "../components/AppBar/AppBar";
import Footer from "../components/Footer/Footer";
import ViewBody from "../components/ViewBody/ViewBody";

const MeganView = () => {
  return ( 
    <div className="view container-full-width">
      <AppBar/>
      <ViewBody>
        <h1>For Megan:</h1>
        <p>I also included an EPUB download if you have a Kindle</p>
        <a href="../assets/Abundance.pdf" download>Abundance - Ezra Klein and Derek Thompson</a> 
        &nbsp;&nbsp;(&nbsp;
          <a href="../assets/Abundance_EPUB.epub" download>.epub</a>
        &nbsp;)
        <br/>
        <a href="../assets/Flowers_For_Algernon.pdf" download>Flowers For Algernon - Daniel Keyes</a>
        &nbsp;&nbsp;(&nbsp;
          <a href="../assets/Flowers_For_Algernon_EPUB.epub" download>.epub</a>
        &nbsp;)
      </ViewBody>
      <Footer/>
    </div>
   );
}
 
export default MeganView;