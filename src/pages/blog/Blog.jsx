import "./blog.scss"
import { Layout, Section, ActualBlogPreview, UserProfile } from "../../components"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { getBlogByIdHandler } from "../../utils/blogHandlers"
import { useEffect } from "react"
import { useGlobalContext } from "../../contexts/globalcontext"

function Blog() {
    const [blog, setBlog] = useState({})
    const { id } = useParams();
    const { loggedInAs = {}, setFetching } = useGlobalContext();
    useEffect(() => {
        const fetch = async () => {
            const blog = await getBlogByIdHandler(loggedInAs.token, id, setFetching);
            setBlog({ ...blog.data, image: blog.image });
            console.log()
        }
        fetch();
    }, [])

    return (
        <Layout>
            <Section title="Blog">
                <div className="blogContainer">
                    <ActualBlogPreview {...blog} />
                    <UserProfile />
                </div>
            </Section>
        </Layout>
    )
}

export default Blog