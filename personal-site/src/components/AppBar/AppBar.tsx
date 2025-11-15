import { Link } from 'react-router-dom';
import './AppBar.scss';
import IconButton from '../IconButton';

const LINKEDIN_URL = 'https://www.linkedin.com/in/nicholas-jefferis-818106194';
const LINKEDIN_SVG = "https://www.svgrepo.com/show/128403/linkedin.svg"
const GITHUB_URL = "https://github.com/jefferns";
const GITHUB_SVG = "https://www.svgrepo.com/show/332401/github.svg";

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
              asset={LINKEDIN_SVG}
              external={true}
              alt="Linked In"
              height={24}
              style={{fill: 'white'}}
            />
            <IconButton 
              to={GITHUB_URL}
              asset={GITHUB_SVG}
              external={true}
              alt="GitHub"
              height={24}
              style={{fill: 'white'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AppBar;