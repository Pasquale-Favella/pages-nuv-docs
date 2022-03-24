import { GithubRepo } from "../../models/githubRepo"
import DocsAction from "./DocsAction"

const DocsCard : React.FC<{repo:GithubRepo}> = ({repo})=>{
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-auto w-full">
            <figure><img src="/card-image.svg" alt="Nuvolaris logo" /></figure>
            <div className="card-body">
                <h2 className="card-title capitalize">
                    {repo.name}
                </h2>
                <div className="card-title flex ">
                    {repo.language && <div className="badge badge-neutral">{repo.language}</div>}
                    {repo?.stargazers_count > 0 && 
                    <div className="badge badge-neutral">
                        {repo.stargazers_count}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </div>
                    }
                    <div className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip={`${repo.name}`}>
                        <a className="btn btn-ghost btn-circle normal-case btn-sm" href={repo.html_url} target="_blank" rel="noopener noreferrer" >
                        <svg width="24" height="24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z">
                            </path>
                        </svg>
                        </a>
                    </div>
                </div>
                <p>{repo.description}</p>

                <div className="card-actions justify-end">
                    <DocsAction repositoryName={repo.name}/>
                </div>
                
            </div>
        </div>
    )
}

export default DocsCard