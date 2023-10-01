import Note from "../Note";
import 'bootstrap/dist/css/bootstrap.css';

export default function NotesSlider() {
    return(
        <div className="container mt-3 w-80">
            <div className="row text-center">
                <Note/>
                <Note/>
                <Note/>
            </div>
        </div>
    );
}