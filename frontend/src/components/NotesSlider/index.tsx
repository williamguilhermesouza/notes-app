import Note from "../Note";
import NoteModal from "../NoteModal";
import 'bootstrap/dist/css/bootstrap.css';
import styles from './styles.module.css';
import backend from "@/pages/services/backend";
import { useState, useEffect } from "react";

interface noteInterface {
    id: number;
    name: string;
    creation_date: Date;
    favorite: boolean;
    color: number;
    content: string[];
}

export default function NotesSlider() {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState({
        "name": "Error",
        "creation_date": new Date(Date.now()),
        "favorite": false,
        "color": 0,
        "content": []
    });

    const [isShow, setIsShow] = useState(false);

    const initModal = (e: any, openNote?: any) => {
        if (openNote) {
            setNote(openNote);
        }
        return setIsShow(!isShow);
    }

    useEffect(() => {
        backend.get('notes').then((response: any) => {
            setNotes(response.data);
        })
    }, []);


    return(
        <div className={`${styles.mainContainer} container mt-5`}>
            <div className={`${styles.mainRow} row rounded justify-content-center align-items-center`}>
                {
                    notes.map((note: noteInterface) => <button className={styles.noteBtn} onClick={(e) =>initModal(e, note)}><Note key={note.id} name={note.name} favorite={note.favorite} content={note.content}  /></button>)
                }
            </div>
            <NoteModal initModal={initModal} isShow={isShow} note={note}/>
        </div>
    );
}