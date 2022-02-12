import Gallery from '../components/gallery/Gallery';
import bgPhoto from '../NotMine.png';
import classes from './GalleryPage.module.css';

const GalleryPage: React.FC = () => {
    return (
        <div className={classes.bg}>
            <Gallery />
        </div>
    )
};

export default GalleryPage;