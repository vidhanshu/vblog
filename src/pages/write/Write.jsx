import "./write.scss"
import { Section, Layout } from "../../components"
import React from 'react';
import { CustomEditor } from "../../components"
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Write() {

    return (
        <Layout>
            <Section>
            <h1 className="motto-black mb">Start writing blog!</h1>
            <button className="circular-btn mb">
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