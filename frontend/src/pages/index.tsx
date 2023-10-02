import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import backend from './services/backend';
import NotesSlider from '@/components/NotesSlider';

export default function Home() {

  async function createNote(e: any) {
    e.preventDefault();

    let data: any;

    try {
      await backend.post('notes', data);
      //must reload page
    } catch (err) {
      alert('Error creating note.');
    }
  }

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
          <div className='container text-center mt-4'>
            <div className="row justify-content-center">
              <input className='create-note col-8 rounded-2 text-center' type="text" placeholder='Create a note' />
            </div>
          </div>
        </section>
        <section className="middle-area text-center">
          <div className="container">
            <div className="row">
              <NotesSlider/>
            </div>
          </div>
        </section>
        <footer>
          <div className="container text-end mb-3">
            <div className="row justify-content-end">
              <p className='col-12'>Created by William Souza</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
};
