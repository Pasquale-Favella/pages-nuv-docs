import { useState , MouseEvent } from "react";
import { VideoCategory, VIDEOS } from "../../constants/video";
import VideoElement from "./VideoElement";

const VideoGrid = ()=>{

    const [filter , setFilter] = useState(VideoCategory.all);

    const handleClickFilter = (e:MouseEvent<HTMLElement>)=>{
        setFilter(e.currentTarget.textContent || VideoCategory.all)
    }

    return (
        <>
            <div className="tabs justify-center">
                <a className={`tab tab-bordered ${filter === VideoCategory.all && 'tab-active'}`} onClick={handleClickFilter}>All</a> 
                <a className={`tab tab-bordered ${filter === VideoCategory.training && 'tab-active'}`} onClick={handleClickFilter}>Training</a> 
                <a className={`tab tab-bordered ${filter === VideoCategory.community && 'tab-active'}`} onClick={handleClickFilter}>Community</a> 
            </div>
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-5 mb-5'>
            {
                VIDEOS
                .filter(video => video.category === filter || filter === VideoCategory.all)
                .map(video => <VideoElement videoId={video.videoId} key={video.videoId}/>)
            }
            </div>
        </>
    )
}

export default VideoGrid;