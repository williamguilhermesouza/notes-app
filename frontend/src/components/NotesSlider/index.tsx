import Note from "../Note";
import 'bootstrap/dist/css/bootstrap.css';
import styles from './styles.module.css';


export default function NotesSlider() {
    return(
        <div className={`${styles.mainContainer} container mt-3`}>
            <div className={`${styles.mainRow} row text-center`}>
                <Note/>
                <Note/>
                <Note/>
            </div>
        </div>
    );
}