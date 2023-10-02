import { Modal, Button } from 'react-bootstrap';


export default function NoteModal(props: any) {
    return(
        <>
            <Button variant="success" onClick={props.initModal}>
                Open Modal
            </Button>
            <Modal show={props.isShow}>
                <Modal.Header closeButton onClick={props.initModal}>
                    <Modal.Title>React Modal Popover Example</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={props.initModal}>
                    Close
                </Button>
                <Button variant="dark" onClick={props.initModal}>
                    Store
                </Button>
                </Modal.Footer>
            </Modal>
        </>
);
}