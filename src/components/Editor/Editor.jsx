import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import { setInputField } from "../../utils/utils"

import "./editor.scss"

function CustomEditor() {
    const [Heading, setHeading] = useState('');
    const [file, setFile] = useState('');
    const [text, setText] = useState('');

    const imageHandler = (evt) => {
        const file = evt.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onloadend = (evt) => {
            setFile(evt.currentTarget.result);
        }
    }

    const textHandler = (evt) => {
        const txt = evt.target.value;
        setText(txt);
    }
    return (
        <div className='editor'>
            <input
                className='blog-heading'
                type="text"
                placeholder='Heading'
                onChange={evt => setInputField(evt.target.value, setHeading)}
            />
            <label
                className='file-icon'
                htmlFor="file" >
                <AiOutlinePlus style={{
                    fontSize: "35px",
                    border: "2px solid var(--secondary-text-color)",
                    borderRadius: "50%",
                    color: "var(--secondary-text-color)",
                    cursor: "pointer"
                }} />
            </label>

            <div className="image-container">
                <input
                    className='file'
                    type="file"
                    name="file"
                    id="file"
                    onChange={imageHandler} />
                {file && <img src={file} alt="" />}
            </div>

            <textarea
                className='border textEditor'
                placeholder='Enter a blog content'
                onChange={textHandler}
            >
            </textarea>

            <p className="txtSB-1 mtb-2">
                Blog preview
            </p>
            <div className="preview border p-1">
                <h1 className="blog-heading">
                    {
                        Heading
                    }
                </h1>
                <div className="image-container">
                    {file && <img src={file} alt="" />}
                </div>
                <div className="text-preview">
                    {text}
                </div>
            </div>
        </div >
    )
}

export default CustomEditor