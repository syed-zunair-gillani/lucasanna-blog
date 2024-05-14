import Hero from '../components/hero'
import TagsBar from '../components/tagsBar'
import PostDesign from '../components/postDesign'
import Sidebar from '../components/sidebar'
import Link from 'next/link'
import { POSTS} from '../config/query'
import { clientAppolo } from '../config/appoloClient'

export default function Home({allPost}) {
  console.log("🚀 ~ Home ~ allPost:", allPost)
  return (
    <>
      
      <TagsBar/>
      <Hero featurePost={allPost[0]}/>
      <section className='container px-4 lg:px-10 lg:flex mx-auto mt-16'>
        <div className='lg:w-3/4 lg:border-r-[1px] border-gray-100 lg:mr-10 lg:pr-10'>
          <Link href='/blog'><h1 className='text-4xl underline cursor-pointer font-sohne_700'>Blogs</h1></Link>
          {
            allPost?.slice(1,8)?.map((item, i)=>(
              <PostDesign key={i} item={item}/>
            ))
          }
        </div>
        <Sidebar/>
      </section>
    </>
  )
}


export async function getStaticProps() {
  const response = await clientAppolo.query({
    query: POSTS,
  });
  return { props: { allPost: response?.data?.posts } }
}


