import "./about.scss"
import { Layout, Section, Card } from "../../components"

function About() {
    return (
        <Layout>
            <div className="aboutHeader">
                <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_oen2kc.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
            <Section title="About">
                <h1 className="motto-black mb">Start writing blog, In just 3 steps.</h1>
                <div className="aboutContainer">
                    <div className="about-write">
                        <Card>
                            <img src="./write.jpg" alt="" />
                            <p className="logoTitle">
                                01. Write
                            </p>
                        </Card>
                    </div>
                    <div className="about-edit">
                        <Card>
                            <img src="./edit.jpg" alt="" />
                            <p className="logoTitle">
                                02. Edit
                            </p>
                        </Card>
                    </div>
                    <div className="about-publish">
                        <Card>
                            <img src="./publish.jpg" alt="" />
                            <p className="logoTitle">
                                03. Publish
                            </p>
                        </Card>
                    </div>
                </div>
                <button className="circular-btn mtb">Write a blog</button>
            </Section>
        </Layout>
    )
}

export default About