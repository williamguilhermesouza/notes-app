import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import backend from './services/backend';
import NotesSlider from '@/components/NotesSlider';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  let [noteName, setNoteName] = useState('');

  const router = useRouter();

  async function createNote(e: any) {
    e.preventDefault();

    let data: any = {
      name: noteName,
      creation_date: new Date(Date.now()),
      favorite: false,
      color: 0,
      content: [],
    };

    try {
      await backend.post('notes', data);
      //must reload page
    } catch (err) {
      alert('Error creating note.');
    }

    router.reload();
    alert('Reloading!');
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
              <form onSubmit={createNote}>
                <input className='create-note col-8 rounded-2 text-center' onChange={e => setNoteName(e.target.value)} type="text" placeholder='Create a note' />
              </form>
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
