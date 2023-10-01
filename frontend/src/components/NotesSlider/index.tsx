import Note from "../Note";
import 'bootstrap/dist/css/bootstrap.css';
import styles from './styles.module.css';
import backend from "@/pages/services/backend";
import { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';

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

interface noteInterface {
    id: number;
    name: string;
    creation_date: Date;
    favorite: boolean;
    color: number;
    content: string[];
}


const NoteArray = [NoteMock, NoteMock2, NoteMock3];

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


            <>
                <Button variant="success" onClick={initModal}>
                    Open Modal
                </Button>
                <Modal show={isShow}>
                    <Modal.Header closeButton onClick={initModal}>
                        <Modal.Title>React Modal Popover Example</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={initModal}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={initModal}>
                        Store
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
}