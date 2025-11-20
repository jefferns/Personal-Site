import { Link } from 'react-router-dom';
import './AppBar.scss';
import IconButton from '../IconButton';
// @ts-expect-error: plugin adds the ? extension 
import GitlabSVG from '../../assets/github.svg?react'; 
// @ts-expect-error: plugin adds the ? extension 
import LinkedInSVG from '../../assets/linkedin.svg?react';
// @ts-expect-error: plugin adds the ? extension 
import InstagramSVG from '../../assets/instagram.svg?react';

const INSTAGRAM_URL = 'https://www.instagram.com/nick.jefferis/';
const LINKEDIN_URL = 'https://www.linkedin.com/in/nicholas-jefferis-818106194';
const GITHUB_URL = "https://github.com/jefferns";

const AppBar = () => {
  return (
    <div className='appbar'>
      <div className="container a-c-center">  
        <div className="row s-between">
          <div className="col-2 ">
            <Link to={"/"}> jefferis.dev </Link>
          </div>
          <div className="col-1 d-flex flex-row s-evenly">
            <IconButton 
              to={LINKEDIN_URL}
              external={true}
              alt="Linked In"
              height={24}
            >
              <LinkedInSVG/>
            </IconButton>
            <IconButton 
              to={INSTAGRAM_URL}
              external={true}
              alt="Instagram"
              height={24}
            >
              <InstagramSVG/>
            </IconButton>
            <IconButton 
              to={GITHUB_URL}
              external={true}
              alt="GitHub"
              height={24}
            >
              <GitlabSVG/>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AppBar;