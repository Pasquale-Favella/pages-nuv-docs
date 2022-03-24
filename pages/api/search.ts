import type { NextApiRequest, NextApiResponse } from 'next'
import { getSearch } from "../../service/nuvolaris.github.service";

export default async function handler(req :NextApiRequest, res:NextApiResponse) {

    if(req.method !== 'GET')
        return res.status(404).json({ message: `Method ${req.method} not supported` });

    const {term} = req.query;

    if(!term) 
        return res.status(404).json({ message: `term is required` });

    const searchResults = await getSearch(term as string);

    return res.status(200).json(searchResults);
    
}