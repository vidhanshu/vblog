import "./profile.scss"

import { UserProfile,Layout,BlogCard,Section } from "../../components"

function Profile() {
    return (
        <Layout>
            <Section title="Blogs">
                <div className="profileBlogsContainer">
                    <div className="profileBlogs">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                    <UserProfile />
                </div>
            </Section>
        </Layout>
    )
}

export default Profile