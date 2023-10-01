import styles from './styles.module.css';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import fav from '@/../public/fav.ico';
import notfav from '@/../public/notfav.ico';


export default function Note() {
    return(
        //need to create color style
        <div className={`${styles.noteCard} card border rounded`}>
            <div className="card-body">
                <div className={styles.cardHeader}>
                    <h5 className="card-title">Note name</h5>
                    <Image
                        src={fav}
                        width={20}
                        height={20}
                        alt="favorite"
                    />
                </div>
                <div className="card-text">
                    <ul>
                        <li>note 1</li>
                        <li>note 2</li>
                        <li>note 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}