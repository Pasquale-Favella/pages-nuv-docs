import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react"

const NavSearch = ()=>{
    const router = useRouter();
    const [isOpen , setIsOpen] = useState(false);
    const [term , setTerm] = useState('');

    const hadleSubmit = (e:FormEvent<HTMLFormElement>)=>{

        e.preventDefault();

        router.push(`/search?q=${term}`);
        setTerm('');
        toggleSearch();
    }

    const toggleSearch = (e ?: ChangeEvent<HTMLInputElement>)=>setIsOpen(prev => !prev)

    return (
        <>
        
        <label htmlFor="modal" className="btn btn-ghost btn-circle modal-button btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </label>


        <input type="checkbox" id="modal" className="modal-toggle" onChange={toggleSearch} checked={isOpen} value={'toggle search'}/>
        <div className="modal items-baseline">
            <div className="modal-box relative rounded-t-none rounded-b-lg sm:rounded-lg">
                <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Search in the docs</h3>
                <br/>
                <form className="form-control" onSubmit={hadleSubmit}>
                    <div className="input-group w-full">
                        <input 
                            type="text" 
                            placeholder="Search…" 
                            className="input input-bordered w-full"
                            value={term}
                            onChange={(e)=>setTerm(e.target.value)}
                        />
                        <button className="btn btn-square" disabled={!Boolean(term)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default NavSearch