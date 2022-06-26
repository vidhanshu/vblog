import "./write.scss"
import { Section, Layout } from "../../components"
import React from 'react';
import { CustomEditor } from "../../components"
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Write() {

    return (
        <Layout>
            <Section title="Start writing a blog...">
            <button className="circular-btn mb-1">
                publish
            </button>
                <div>
                    <CustomEditor />
                </div>
            </Section>
        </Layout>
    )
}

export default Write