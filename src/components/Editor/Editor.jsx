import React, { Component } from 'react';
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
        const newContentState = draftToHtml(contentState).replace(regx2, "text-align:center").replace(regx1, "<br/>");
        /* *****storing to local storage***** */
        localStorage.setItem("draft", JSON.stringify({ html: newContentState }));
        this.setState({
            contentState: newContentState,
        });
    };
    componentDidMount() {
        const draft = localStorage.getItem("draft");
        if (draft) {
            this.setState({
                contentState: JSON.parse(draft).html,
            })
        }
    }
    render() {
        return (
            <>
                <div>
                    <Editor
                        editorClassName="border"
                        editorStyle={{
                            minHeight: "500px",
                            padding: "10px",
                            color: "var(--secondary-text-color)"
                        }}
                        onContentStateChange={this.onContentStateChange}
                        toolbarStyle={{
                            backgroundColor: "var(--secondary)",
                            color: "black !Important"
                        }}
                    />
                </div>
                <h1 className="txtSB-2 mtb-1">
                    Blog Preview
                </h1>
                <div
                    className="mtb-1 border p-1"
                    style={{
                        color: "var(--secondary-text-color)"
                    }}
                    dangerouslySetInnerHTML={
                        {
                            __html: this.state.contentState === '' ?
                                `<p class="txtL-2">Start writing a blog to see preview...</p>`
                                : this.state.contentState
                        }
                    }
                ></div>
            </>
        );
    }
}

export default CustomEditor