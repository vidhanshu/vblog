import './home.scss'
import { Layout, Section, Header, BlogCard, Sidebar } from '../../components'

function Home() {
  return (
    <Layout>
      <Header />
      <div className='containerWithSidebar'>
        <Section title="Recent Blogs">
          <div className="recentBlogs">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </Section>
        <Sidebar />
      </div>
    </Layout>
  )
}

export default Home