import { GetStaticProps } from 'next'
import Head from 'next/head'
import DocsCard from '../../components/docs/DocsCard';

import { GithubRepo } from '../../models/githubRepo';
import { getNuvReposForMarkdowns } from "../../service/nuvolaris.github.service";

interface Props {repos:GithubRepo[]}

const DocsIndex : React.FC<Props>  = ({repos})=>{
    return (
      <div>
        <Head>
          <title>Nuvolaris Docs | docs explore</title>
          <meta name="description" content={`Nuvolaris documentation | docs explore`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4 mt-5 mb-5'>
        {repos.map((repo, i)=> <DocsCard key={i} repo={repo}/>)}
        </div>
      </div>
    )
}



export const getStaticProps: GetStaticProps<Props> = async () => {
  const repos = await getNuvReposForMarkdowns();
   
  return {
    props: {
      repos
    },
    revalidate: 60*60*24, // one day Incremental Static Regeneration
  };
}

export default DocsIndex;