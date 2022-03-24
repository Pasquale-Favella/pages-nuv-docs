import { useRouter } from 'next/router';
import { useEffect , useState } from 'react'
import { SearchDetails } from '../models/githubSearch';
import { getSearch } from '../service/nuvolaris.github.service';

export const useSearch = ()=>{

    const {query:{q}} = useRouter();

    const [results , setResults] = useState<SearchDetails[]>([]);
    const [loading , setLoading] = useState(false);


    useEffect(()=>{

        setLoading(true);
        
        q && getSearch(q as string)
            .then(results => results.map(
                ({name,path,html_url,repository,text_matches})=>
                ({    
                    name ,
                    path ,
                    html_url,
                    repository,
                    text_matches,
                })
            ))
            .then(searchResults =>setResults(searchResults))
            .catch((_err)=>[])
            .finally(()=>setLoading(false));
    },[q])



      return {
       query:q ,results ,loading
      }
}