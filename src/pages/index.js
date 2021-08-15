import Head from 'next/head' 
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from '../components/hero/Pagina';

export default function Home() {
  return (
    <>
      <Head>
        <title>Heroes e Viloes</title>
        <meta name="description" content="Heroes e Vilões" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
        <Pagina></Pagina>
  </>
       
  )
}
