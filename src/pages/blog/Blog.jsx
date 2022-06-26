import "./blog.scss"
import { Layout, Section, BlogPreview, UserProfile } from "../../components"

function Blog() {
    return (
        <Layout>
            <Section title="Blog">
                <div className="blogContainer">
                    <BlogPreview />
                    <UserProfile />
                </div>
            </Section>
        </Layout>
    )
}

export default Blog