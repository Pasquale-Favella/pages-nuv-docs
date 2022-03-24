import { GetStaticProps } from 'next'
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';
import { MARKDOWNS } from "../../../constants/markdowns";
import Link from "next/link";
import { getMarkdown } from '../../../service/nuvolaris.github.service';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  slug : string;
  markdown : string;
}

interface Props {
  content : string;
  slug : string;
  markdown : string;
}

const DocsPage : React.FC<Props>= ({ content ,slug , markdown})=> {
  
    return (
        <div className='prose mx-2 sm:mx-auto'>
            <Head>
                <title>Nuvolaris Docs | {slug}/{markdown}</title>
                <meta name="description" content={`Nuvolaris documentation | ${slug}/${markdown}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link href={`/docs`}>
                            <a>Docs</a>
                        </Link>
                    </li> 

                    <li><a>{slug}</a></li> 
                    <li><a>{markdown.toLowerCase()}</a></li> 

                    <li>
                      <div className="tooltip tooltip-right overflow-x-hidden sm:overflow-visible" data-tip={`${slug}`}>
                        <a className="btn btn-circle btn-outline btn-sm" href={`https://github.com/nuvolaris/${slug}`} target="_blank" rel="noopener noreferrer">
                          <svg width="24" height="24" fill="currentColor">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z">
                              </path>
                          </svg>                      
                        </a>
                      </div>
                    </li>
                </ul>
            </div>
            <div className="break-all" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
    );
  }

export default DocsPage;


export async function getStaticPaths() {
   
 
  const paths = Object.keys(MARKDOWNS)
    .map(slug =>
        MARKDOWNS[slug as keyof typeof MARKDOWNS]
            .map(markdown => ({ params: { slug, markdown } }))
    ).flat()

    

    
  return {
    paths,
    fallback: false,
  };
}
  

  

export const getStaticProps: GetStaticProps<Props , Params> = async (context) => {

  const README = await getMarkdown(context.params!.slug , context.params!.markdown);
   

  const { content } = matter(README);

  return {
    props: {
      content,
      slug :context.params!.slug,
      markdown :context.params!.markdown
    },
    revalidate: 60*60*24, // one day Incremental Static Regeneration
  };
}