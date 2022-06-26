import React, { Component } from 'react';
import { convertFromRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html"

class CustomEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentState: '',
        }
    }

    onContentStateChange = (contentState) => {
        const regx1 = new RegExp('<p></p>', 'ig')
        const regx2 = new RegExp('text-align:none', 'ig')
        this.setState({
            contentState: draftToHtml(contentState).replace(regx2, "text-align:center").replace(regx1, "<br/>"),
        });
        console.log(draftToHtml(contentState))
    };

    render() {
        return (
            <>
                <div>
                    <Editor
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor border"
                        editorStyle={{
                            minHeight: "500px",
                            padding: "10px"
                        }}
                        onContentStateChange={this.onContentStateChange}
                    />
                </div>
                <h1 className="semiBoldTitle-sm mtb">
                    Blog Preview
                </h1>
                <div
                    className="mtb border p10"
                    dangerouslySetInnerHTML={
                        {
                            __html: this.state.contentState === '' ?
                                `<p class="lightText">Start writing a blog to see preview...</p>`
                                : this.state.contentState
                        }
                    }
                ></div>
            </>
        );
    }
}

export default CustomEditor