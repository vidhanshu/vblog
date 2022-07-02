import "./blog.scss"
import { Layout, Section, BlogPreview, UserProfile } from "../../components"

function Blog() {
    return (
        <Layout>
            <Section title="Blog">
                <div className="blogContainer">
                    <BlogPreview Heading="Heading!" text="text1" file="f1" key={"a"} />
                    <UserProfile />
                </div>
            </Section>
        </Layout>
    )
}

export default Blog