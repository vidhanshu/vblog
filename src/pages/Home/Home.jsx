import './home.scss'
import { Layout, Section, Header, BlogCard, Sidebar } from '../../components'
import { useGlobalContext } from '../../contexts/globalcontext';

function Home() {

  let { blogs = [] } = useGlobalContext();

  return (
    <Layout>
      <Header />
      <div className='containerWithSidebar'>
        <Section title="Recent Blogs">
          <div className="recentBlogs">
            {blogs.length
              ? blogs.map((blog) => <BlogCard key={blog._id} {...blog} />)
              : <div className="txtL-2">
                <img className='loading-image' src="https://orig00.deviantart.net/34de/f/2012/204/b/c/grass_block_by_barakaldo-d58bi3u.gif" alt="" />
              </div>
            }
          </div>
        </Section>
        <Sidebar />
      </div>
    </Layout>
  )
}

export default Home