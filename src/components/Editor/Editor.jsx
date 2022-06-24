import React, { Component } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg"

const content = { "entityMap": {}, "blocks": [{ "key": "637gr", "text": "Initialized from content state.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }] };

class CustomEditor extends Component {
    constructor(props) {
        super(props);
        const contentState = convertFromRaw(content);
        this.state = {
            contentState,
        }
    }

    onContentStateChange = (contentState) => {
        this.setState({
            contentState,
        });
        console.log(JSON.stringify(contentState, null, 4))
    };

    render() {
        return (
            <div>
                <Editor
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    editorStyle={{
                        border: ".1px solid var(--hoverText)",
                        minHeight: "500px",
                        padding: "10px"
                    }}
                    onContentStateChange={this.onContentStateChange}
                />
            </div>
        );
    }
}

export default CustomEditor