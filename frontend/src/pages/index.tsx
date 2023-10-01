import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

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
        <div className='container text-center'>
          <div className="row">
            <input className='col-12' type="text" placeholder='Create a note' />
          </div>
        </div>
        <div className="middle-area">
          <NotesSlider/>
        </div>
      </main>
      <footer>
        <p>Created by William Souza</p>
      </footer>
    </>
  )
}
