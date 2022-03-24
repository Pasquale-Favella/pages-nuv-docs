import Link from "next/link"

const Hero = ()=>{
    return(
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" width={600} height={600} alt="hero" src={`${process.env.NEXT_PUBLIC_ASSETS || ''}/launch.svg`}/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">Nuvolaris 
                <br className="hidden lg:inline-block"/> is a project to build an Open Source distribution of Apache OpenWhisk
            </h1>
            <p className="mb-8 leading-relaxed">
                It will be open source and released under the Apache License.
                The entire platform will be managed by a single CLI allowing both to administer the platform and develop with it.
                The platform itself is managed by ab operator, that installs OpenWhisk, and its dependencies and additions.
                The core of our work will be to build such an operator.
                We will use the OpenWhisk code base as much as possible and contribute back our changes, but we will buld it as an independent and integrated product, more or less as the other project partecipants are building their own cloud offering.
            </p>
            <div className="flex justify-center">
                <Link href={`/docs`}>
                    <a className="btn btn-info text-white hover:text-white/80 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        view docs
                    </a>
                </Link>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Hero;