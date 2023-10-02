import Note from "../Note";
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

    const [isShow, invokeModal] = useState(false);
    const initModal = () => {
        return invokeModal(!false);
    }

    useEffect(() => {
        backend.get('notes').then((response: any) => {
            setNotes(response.data);
        })
    }, []);


    return(
        <div className={`${styles.mainContainer} container mt-5`}>
            <div className={`${styles.mainRow} row text-center rounded justify-content-center`}>
                {
                    notes.map((note: noteInterface) => <Note key={note.id} name={note.name} favorite={note.favorite} content={note.content} />)
                }
                
            </div>           
        </div>
    );
}