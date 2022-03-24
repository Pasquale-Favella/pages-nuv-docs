import { REPOS } from "../constants/repos";
import api from "../lib/githubApi";
import axios from "axios";
import { GithubRepo } from "../models/githubRepo";
import { GithubSearchResponse } from "../models/githubSearch";
import { MARKDOWNS } from "../constants/markdowns";

export const getNuvRepos = async ()=>{

   const {data : nuvRepos} =  await api.get<GithubRepo[]>('users/nuvolaris/repos');

   return nuvRepos.filter(repo => REPOS.includes(repo.name))
}

export const getNuvReposForMarkdowns = async ()=>{

    const {data : nuvRepos} =  await api.get<GithubRepo[]>('users/nuvolaris/repos');
 
    return nuvRepos.filter(repo => Object.keys(MARKDOWNS).includes(repo.name))
}

export const getMarkdown = async (slug:string,markdown:string)=>{
    const {data} = await axios.get<string>(`https://raw.githubusercontent.com/nuvolaris/${slug}/master/${markdown}.md`);

    return data;            
}

export const getReadMe = async (slug:string)=>{
    const {data} = await axios.get<string>(`https://raw.githubusercontent.com/nuvolaris/${slug}/master/README.md`);

    return data;            
}

export const getSearch = async (q:string)=>{
    const {data : results} =  await api.get<GithubSearchResponse>(`search/code?q=${encodeURIComponent(q)}+in:file+org:nuvolaris`);

    return results
            .items
            .filter(result => REPOS.includes(result.repository.name))
}