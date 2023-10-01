import Note from "../Note";
import 'bootstrap/dist/css/bootstrap.css';
import styles from './styles.module.css';

const NoteMock = {
    "id": 0,
    "name": "tarefas",
    "creation_date": "2023-09-30T13:58:13.000Z",
    "favorite": false,
    "color": 1,
    "content": [
        "estudar para prova",
        "passear com dogua"
    ]
}

const NoteMock2 = {
    "id": 1,
    "name": "shows",
    "creation_date": "2023-09-30T13:58:13.000Z",
    "favorite": true,
    "color": 1,
    "content": [
        "ir no show do blind guardian",
        "ir no megadeath",
        "ir no show do shaman",
        "ir no show do birobiro",
        "ir no show do acdc",
    ]
}

const NoteMock3 = {
    "id": 2,
    "name": "compras",
    "creation_date": "2023-09-30T13:58:13.000Z",
    "favorite": false,
    "color": 1,
    "content": [
        "leite",
        "ovo",
        "pao",
        "manteiga",
        "fumo de rolo"
    ]
}

const NoteArray = [NoteMock, NoteMock2, NoteMock3];

export default function NotesSlider() {
    return(
        <div className={`${styles.mainContainer} container mt-5`}>
            <div className={`${styles.mainRow} row text-center rounded-4`}>
                {
                    NoteArray.map((note) => <Note key={note.id} name={note.name} favorite={note.favorite} content={note.content} />)
                }
                
            </div>
        </div>
    );
}