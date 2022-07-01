import "./profile.scss"

import { UserProfile, Layout, BlogCard, Section } from "../../components"
import { useGlobalContext } from "../../contexts/globalcontext"

function Profile() {
    let { blogs } = useGlobalContext();
    if (!blogs) {
        blogs = [];
    }
    return (
        <Layout>
            <Section title="Profile">
                <div className="profileBlogsContainer">
                    <div className="profileBlogs">
                        {blogs.length
                            ? blogs.map((blog, idx) => <BlogCard key={blog._id} {...blog} />)
                            : <div className="txtL-2">No blogs yet...</div>
                        }
                    </div>
                    <UserProfile />
                </div>
            </Section>
        </Layout>
    )
}

export default Profile