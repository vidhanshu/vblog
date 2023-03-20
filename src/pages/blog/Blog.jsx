import "./blog.scss"

import { ActualBlogPreview, Layout, Section, UserProfile } from "../../components"

import { getBlogByIdHandler } from "../../utils/blogHandlers"
import { useEffect } from "react"
import { useGlobalContext } from "../../contexts/globalcontext"
import { useParams } from "react-router-dom"
import { useState } from "react"

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
    }, [id, loggedInAs.token, setFetching])

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