import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import NotesSlider from '@/components/NotesSlider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Notes App</title>
        <meta name="description" content="Taking notes app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="top-area">
          <div className='container text-center mt-3'>
            <div className="row">
              <input className='col-12' type="text" placeholder='Create a note' />
            </div>
          </div>
        </section>
        <section className="middle-area h-100 text-center">
          <div className="container">
            <div className="row">
              <NotesSlider/>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container text-end mb-3">
          <div className="row justify-content-end">
            <p className='col-12'>Created by William Souza</p>
          </div>
        </div>
      </footer>
    </>
  )
};
