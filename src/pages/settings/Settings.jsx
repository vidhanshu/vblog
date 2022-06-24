import "./settings.scss"
import { Layout, Section, EditProfile } from "../../components"

function Settings() {
    return (
        <Layout>
            <Section>
                <h1 className="motto-black mb">Edit profile.</h1>
                <EditProfile />
            </Section>
        </Layout>
    )
}

export default Settings