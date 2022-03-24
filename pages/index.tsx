import Head from 'next/head'
import Features from '../components/home/Features'
import Hero from '../components/home/Hero'
import VideoCommunity from '../components/home/VideoCommunity'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Nuvolaris Docs</title>
        <meta name="description" content="Nuvolaris documentation | Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <Hero/>
        <Features/>
        <VideoCommunity/>
      </div>
     
    </div>
  )
}
