import Note from "../Note";
import 'bootstrap/dist/css/bootstrap.css';
import styles from './styles.module.css';

const NoteMock = {
    "id": 0,
    "name": "First Note",
    "creation_date": "2023-09-30T13:58:13.000Z",
    "favorite": false,
    "color": 1,
    "content": [
        "comprar leite",
        "passear com dogua"
    ]
}

export default function NotesSlider() {
    return(
        <div className={`${styles.mainContainer} container mt-5`}>
            <div className={`${styles.mainRow} row text-center rounded-4`}>
                <Note name={NoteMock.name} favorite={NoteMock.favorite} content={NoteMock.content} />
            </div>
        </div>
    );
}