import NavBar from "./NavBar";
import classes from "./TopBar.module.css";

const TopBar: React.FC = () => {
    return (
        <div className={classes.topbar}>
            <div className={classes.logo}>
                <h1>OFIRA KOREN</h1>
                <h2>interior design</h2>
            </div>
            <NavBar />
        </div>
    )
};

export default TopBar;