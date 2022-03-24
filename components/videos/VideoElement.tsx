import { SyntheticEvent, useState } from "react";

const VideoElement : React.FC<{videoId:string}> = ({videoId})=>{
    
    const [loading , setLoading] = useState(true);

    const onLoad = ( _e: SyntheticEvent<HTMLIFrameElement>)=>{
        setLoading(false)
    }

    return(
        <div className="aspect-w-16 aspect-h-9">
            <iframe 
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy"
            onLoad={onLoad}
            className={`rounded-md ${loading && 'invisible'}`}
            >
            </iframe>
            {loading && <div className="animate-pulse shadow rounded-md bg-base-300"></div>}
        </div>
    )
}

export default VideoElement;