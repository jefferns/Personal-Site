import AppBar from "../components/AppBar/AppBar";
import Footer from "../components/Footer/Footer";
import ViewBody from "../components/ViewBody/ViewBody";
import './Views.scss'

const HomePage = () => {
  return ( 
    <div className="view container-full-width">
      <AppBar/>
      <ViewBody>
        <p>
          Hey, thanks for stopping by.
        </p>
        <h3>Goal:</h3>
        <p>I wanted to host my own web server and needed something to host. </p>
        <p>My goal is to turn this into an interactive repository; a home for all my previous (and future) projects.</p>
        <h3>Specs: </h3>
        <p>
          This is a Type Script React App built with Vite. I am currently hosting it on a Raspberry Pi 4 B in my living room. I built a script to remotely 
          build and deploy this code to my Nginx server. I have also learned a lot about networking while setting up my custom domain.
        </p>
        <p>I implemented a CSS Grid System from scratch as practice.</p>
        <h3>Plans:</h3>
        <ul>
          <li>Breakpoints and media queries for mobile support</li>
          <li>Dark Mode</li>
          <li>Sub domains for each project</li>
          <li>Togglable borders for grid system visualization</li>
          <li>Better styling</li>
          <li>File Embedding</li>
          <li>Visit counter like 2k sites</li>
          <li>Mail server</li>
        </ul>
      </ViewBody>
      <Footer/>
    </div>
   );
}
 
export default HomePage;