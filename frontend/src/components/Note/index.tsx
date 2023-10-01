import styles from './styles.module.css';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import fav from '@/../public/fav.ico';
import notfav from '@/../public/notfav.ico';


export default function Note(props: any) {

    return(
        //need to create color style
        <div className={`${styles.noteCard} card border rounded mt-3 align-self-start`}>
            <div className="card-body">
                <div className={styles.cardHeader}>
                    <h5 className="card-title">{props.name}</h5>
                    <Image
                        src={props.favorite? fav : notfav}
                        width={20}
                        height={20}
                        alt="favorite"
                    />
                </div>
                <div className="card-text">
                    <ul>
                        {
                            props.content.map((item: string) => (<li>{item}</li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}