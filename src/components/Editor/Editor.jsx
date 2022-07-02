import React, { useState, useEffect } from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import { infoCustom, successCustom, failureCustom } from '../../utils/notifications'
import { setInputField } from "../../utils/utils"
import { onKeyPressed } from '../../utils/utils'
import { getTags, postTag } from '../../api/tagRequest';
import Suggestions from './sub components/Suggestions'
import BlogPreview from '../blog preview/BlogPreview';
import TagsList from '../tagsList/TagsList'
import { useGlobalContext } from "../../contexts/globalcontext"
import { publishHandler } from '../../utils/blogHandlers'
import { useNavigate } from "react-router-dom"

import "./editor.scss"

function CustomEditor() {
    const navigate = useNavigate();
    const { setIsLoading, loggedInAs } = useGlobalContext();

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
        if (currentTag.trim().toLowerCase() === '' || !currentTag.trim().toLowerCase()) {
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
        setIsLoading(true);
        const res = await postTag(currentTag, setIsLoading);
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

    const callPublishHandler = async () => {
        const data = {
            title: Heading,
            text,
            tags,
        }
        await publishHandler(loggedInAs.token, data, setIsLoading, navigate);
    }

    return (
        <>
            <button
                onClick={callPublishHandler}
                className="circular-btn mb-1"
            >
                publish
            </button>
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
                            isSuggestion
                            && <Suggestions
                                filteredSug={filteredSug}
                                setCurrentTag={setCurrentTag}
                                setIsSuggestion={setIsSuggestion}
                                postNewTagHandler={postNewTagHandler}
                                currentTag={currentTag}
                            />
                        }
                    </div>
                    <div className="tagsContainer">
                        <TagsList tags={tags} removeTag={removeTag} />
                    </div>
                </div>
                <BlogPreview Heading={Heading} text={text} file={file} />
            </div >
        </>
    )
}

export default CustomEditor