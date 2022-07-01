import React, { useState, useEffect } from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import { infoCustom, successCustom, failureCustom } from '../../utils/notifications'
import { setInputField } from "../../utils/utils"
import { onKeyPressed } from '../../utils/utils'
import TagWCross from '../tag with cross/TagWcross'
import { getTags, postTag } from '../../api/tagRequest';

import "./editor.scss"

function CustomEditor() {
    const [Heading, setHeading] = useState('');
    const [file, setFile] = useState('');
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isSuggestion, setIsSuggestion] = useState(false);
    const [tags, setTags] = useState([]);
    const [filteredSug, setFilteredSug] = useState([])
    const [currentTag, setCurrentTag] = useState('');

    useEffect(() => {
        const fetch = async () => {

            const result = await getTags();

            if (result.error) {
                return;
            }
            setSuggestions(result.data);
        }
        fetch();
    }, []);


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

    const handleCurrentTag = async (evt) => {
        const cat = evt.target.value.trim().toLowerCase();
        if (cat === '' || !cat) {
            setIsSuggestion(false);
        } else {
            setIsSuggestion(true);
        }
        filterTheSuggestions(cat);
        setCurrentTag(cat);
    }

    const addTag = () => {
        if (currentTag === '') {
            infoCustom("Please enter a valid tag");
            return;
        }
        if (tags.includes(currentTag)) {
            infoCustom("Tag already exists");
            return;
        }
        if (tags.length >= 5) {
            return infoCustom("at max 5 tags allowed");
        }
        setTags([...tags, currentTag]);
        setCurrentTag(' ');
        setIsSuggestion(false)
    }

    const removeTag = (tag) => {
        const newTags = tags.filter(t => t !== tag);
        setTags(newTags);
    }

    const postNewTagHandler = async () => {
        const res = await postTag(currentTag);
        if (res.data) {
            setIsSuggestion(false);
            setSuggestions(res.data);
            return successCustom("Thanks for adding new tag!");
        }
        failureCustom("Something went wrong");
    }

    const filterTheSuggestions = (keyword) => {

        const filtered = suggestions.filter((sug => sug?.match(new RegExp(keyword, 'gi'))))

        setFilteredSug(filtered);
    }
    return (
        <div className='editor'>
            <input
                className='blog-heading'
                type="text"
                placeholder='Heading'
                onChange={evt => setInputField(evt.target.value, setHeading)}
                autoFocus={true}
                value={Heading}
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
            <div className="addCategories">
                <p className="txt-2">Add tags</p>
                <div className="tag-input-container">
                    <input
                        type="text"
                        onKeyDown={(e) => onKeyPressed(e.key, addTag, 'Enter')}
                        onChange={handleCurrentTag}
                        value={currentTag}
                        className="login-input tag-input"
                        placeholder="Add tags"
                    />
                    <button className="login-btn" onClick={addTag}>Add</button>
                    {
                        isSuggestion &&
                        <ul className="suggestions">
                            {
                                filteredSug.length
                                    ? filteredSug.map((sug, idx) => (
                                        <li
                                            key={idx}
                                            onClick={() => {
                                                setCurrentTag(sug);
                                                setIsSuggestion(false);
                                            }}
                                            className="sug"
                                        >
                                            {sug}
                                        </li>
                                    ))
                                    : <li onClick={postNewTagHandler}>add {currentTag}</li>
                            }
                        </ul>
                    }
                </div>
                <div className="tags-list">
                    {tags.length !== 0
                        ? tags.map((tag, index) => <TagWCross key={index} handler={() => removeTag(tag)}>{tag}</TagWCross>)
                        : <p className='txtL-3'>No tags available</p>}
                </div>
            </div>
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