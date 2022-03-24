import {withRouter} from "next/router"
import { useState , FormEvent } from "react";
import type { Router } from 'next/router'
import { useSearchContext } from "../../context/SearchContext";

const SearchBar =({router}:{router:Router})=>{
    const {loading} = useSearchContext();

    const [term , setTerm] = useState('');    

    const hadleSubmit = (e:FormEvent<HTMLFormElement>)=>{

        e.preventDefault();

        router.push(`/search?q=${term}`)
            
    }

    return(
        <div className="form-control flex items-center max-w-md mx-auto mt-5">
        <form className="input-group" onSubmit={hadleSubmit}>
            <input 
                type="text" 
                placeholder="Search…" 
                className="input input-bordered w-full"
                value={term}
                onChange={(e)=>setTerm(e.target.value)}
            />
            
            
            <button className={`btn btn-square ${loading && 'loading'}`} type="submit" disabled={!Boolean(term) && !loading}>
            {!loading && 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            }
            </button>
            
            
        </form>
        </div>
    )
}

export default withRouter(SearchBar)