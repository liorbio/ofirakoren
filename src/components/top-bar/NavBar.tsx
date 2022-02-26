import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const NavBar: React.FC = () => {
    
    return (
        <nav className={classes.navigation}>
        <NavLink className={(navData) => navData.isActive ? classes.selected : ''} to="/about"><h1>ABOUT</h1></NavLink>
        <NavLink className={(navData) => navData.isActive ? classes.selected : ''} to="/gallery"><h1>GALLERY</h1></NavLink>
        <NavLink className={(navData) => navData.isActive ? classes.selected : ''} to="/workflow"><h1>THE WORKFLOW</h1></NavLink>
        <NavLink className={(navData) => navData.isActive ? classes.selected : ''} to="/contact"><h1>CONTACT</h1></NavLink>
        <span><InstagramIcon /></span>
        <span><FacebookIcon /></span>
        </nav>
    )
};

export default NavBar;