import { useSearchContext } from "../../context/SearchContext"
import LoadingCard from "./LoadingCard";
import NoResults from "./NoResults"
import SearchCard from "./SearchCard"



const SearchResults : React.FC = ()=>{

    const {results , query , loading} = useSearchContext();
    
    return (
        <div className='flex flex-col gap-4 mx-auto items-center mb-5 mt-3'>
            {
                loading 
                ? [...Array(3)].map( (_ ,i)=>
                
                    <LoadingCard key={i}/>
                )
                : !results.length 
                    ? <NoResults query={query as string}/>
                    : results.map((result , i )=><SearchCard key={i} data={result}/>)
            }
        </div>
    )
}

export default SearchResults