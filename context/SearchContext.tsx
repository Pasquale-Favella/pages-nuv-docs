import { createContext, useContext } from 'react';
import { useSearch } from '../hooks/use-search';
import { SearchDetails } from '../models/githubSearch';


export interface SearchProp {
    query: string | string[] | undefined ;
    results : SearchDetails[];
    loading : boolean;
}

export const SearchContext = createContext<SearchProp>({
    query: '',
    results :[],
    loading : false,
});

export const useSearchContext = ()=>useContext(SearchContext);

export const SearchProvider : React.FC= ({ children } )=>{
 
    const {query, results ,loading } = useSearch();

    return (
        <SearchContext.Provider value={{query, results ,loading }} >
        
            {children}           
        
        </SearchContext.Provider>
        
    )
}