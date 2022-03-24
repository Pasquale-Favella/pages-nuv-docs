import Link from "next/link";

const VideoCommunity = ()=>{
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">Watch Tutorials</h1>
                <p className="mb-8 leading-relaxed">
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </p>
                <div className="flex w-full md:justify-start justify-center items-end">
                    
                <Link href={`/videos`}>
                        <a className="btn btn-info text-white hover:text-white/80 gap-2">
                        <svg className="h-6 w-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z">
                            </path>
                        </svg>
                            Nuvolaris Videos
                        </a>
                    </Link>
                </div>
                
                
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                
                
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe 
                        src="https://www.youtube.com/embed/RlwPsCHWdd8" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                        </iframe>
                    </div>

                
                </div>
            </div>
        </section>

    )
}

export default VideoCommunity;