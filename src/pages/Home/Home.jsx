import './home.scss'
import { useEffect } from 'react';
import { getAllBlogs } from '../../api/blogRequests';
import { Layout, Section, Header, BlogCard, Sidebar } from '../../components'
import { useGlobalContext } from '../../contexts/globalcontext';
import {simpleTimeNDate} from "../../utils/utils"
function Home() {

  let { blogs, setBlogs } = useGlobalContext();
  if (!blogs) {
    blogs = [];
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllBlogs()
      setBlogs(data.map(e => ({ ...e, createdAt: simpleTimeNDate(e.createdAt) })));
    }
    fetch();
  }, []);

  return (
    <Layout>
      <Header />
      <div className='containerWithSidebar'>
        <Section title="Recent Blogs">
          <div className="recentBlogs">
            {blogs.length
              ? blogs.map((blog, idx) => <BlogCard key={blog._id} {...blog} />)
              : <div className="txtL-2">No blogs yet...</div>
            }
          </div>
        </Section>
        <Sidebar />
      </div>
    </Layout>
  )
}

export default Home