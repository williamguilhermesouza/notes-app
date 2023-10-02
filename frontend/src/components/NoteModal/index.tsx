import 'bootstrap/dist/css/bootstrap.css';
import styles from './styles.module.css';
import { Modal, Button } from 'react-bootstrap';
import Image from 'next/image';
import fav from '@/../public/fav.ico';
import notfav from '@/../public/notfav.ico';


export default function NoteModal(props: any) {
    //include variable for items 

    return(
        <>
            <Modal show={props.isShow} className='text-center'>
                <Modal.Header  className={styles.modalHeader}>
                    <Modal.Title>{props.note? <input value={props.note.name} className={styles.newInput}/> : 'Error'}</Modal.Title>
                    <button className={styles.favButton}>
                        <Image
                            src={props.note.favorite? fav : notfav}
                            width={20}
                            height={20}
                            alt="favorite"
                            className={styles.favLogo}
                        />
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <input placeholder='New item' className={styles.newInput}/>
                    {
                        props.note? props.note.content.map((item: string, index: number) => (<li key={index}><input value={item} className={styles.newInput}/></li>)) : 'Error'
                    }
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={props.initModal}>
                    Close
                </Button>
                <Button variant="success" onClick={props.initModal}>
                    Save changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
);
}