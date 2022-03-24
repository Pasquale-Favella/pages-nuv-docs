import Head from 'next/head'
import VideoGrid from '../../components/videos/VideoGrid';


const VideoIndex = ()=>{
    return (
        <div className=' mx-2 sm:mx-auto'>
            <Head>
                <title>Nuvolaris Docs | Videos</title>
                <meta name="description" content={`Nuvolaris documentation | Video Gallery`} />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_ASSETS || ''}/favicon.ico`} />
            </Head>
            <VideoGrid/>
        </div>
    )
}

export default VideoIndex;