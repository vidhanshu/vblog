import "./settings.scss"
import { Layout, Section, EditProfile } from "../../components"

function Settings() {
    return (
        <Layout>
            <Section title="Edit profile">
                <EditProfile />
            </Section>
        </Layout>
    )
}

export default Settings