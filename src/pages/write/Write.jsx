import "./write.scss"
import { Section, Layout } from "../../components"
import React from 'react';
import { CustomEditor } from "../../components"

function Write() {

    return (
        <Layout>
            <Section title="Start writing a blog...">
                <div>
                    <CustomEditor />
                </div>
            </Section>
        </Layout>
    )
}

export default Write