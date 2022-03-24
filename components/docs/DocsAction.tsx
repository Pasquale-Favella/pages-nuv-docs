import Link from "next/link"
import { MARKDOWNS } from "../../constants/markdowns";
import { GithubRepo } from "../../models/githubRepo";

const DocsAction : React.FC<{repositoryName : GithubRepo["name"]}>= ({repositoryName})=>{
return(
    <div className="dropdown dropdown-top dropdown-end">

            <label tabIndex={0} className="btn btn-ghost btn-circle" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </label>

            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                
                {
                    MARKDOWNS[repositoryName].map((markdown , i)=>(
                        <li key={i}>
                            <Link href={`/docs/${repositoryName}/${markdown}`}>
                                <a className="active:bg-info active:text-white font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  text-info" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
                                    <path fillRule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                                    </svg>
                                    {markdown.toLowerCase().split('_').join(' ')}
                                </a>
                            </Link>
                        </li>
                    ))
                }
              
                
            </ul>
        </div>
)
}

export default DocsAction;