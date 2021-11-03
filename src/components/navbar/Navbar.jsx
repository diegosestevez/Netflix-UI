import {useState} from 'react';
import "./navbar.scss";
import {Search, Notifications, ArrowDropDown} from '@material-ui/icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => window.onscroll = null
  }

  return(
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className='container'>
        <div className='left'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=""/>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My list</span>
        </div>
        <div className='right'>
          <Search className='icon'/>
          <span>KIDS</span>
          <Notifications className='icon'/>
          <img
            width="100%"
            src="https://www.publicdomainpictures.net/pictures/90000/velka/tete-de-pigeon-1398017497xQG.jpg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className='icon'/>
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    )
}

export default Navbar;
