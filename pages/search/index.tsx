import Head from "next/head";
import { useRouter } from "next/router";
import SearchBar from "../../components/search/SearchBar";
import SearchResults from "../../components/search/SearchResults";
import { SearchProvider } from "../../context/SearchContext";


const SearchIndex : React.FC= ()=>{

    const {query:{q}} = useRouter();

    return (   
            <SearchProvider >
                <Head>
                    <title>Nuvolaris Docs | search {q}</title>
                    <meta name="description" content={`Nuvolaris documentation | search ${q}`} />
                    <link rel="icon" href={`${process.env.NEXT_PUBLIC_ASSETS || ''}/favicon.ico`} />
                </Head>
                <SearchBar/>
                <SearchResults />
            </SearchProvider>
    )
}


export default SearchIndex;