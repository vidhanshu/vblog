import { useState } from "react"
import "./editProfile.scss"
import { AiOutlineUpload, AiOutlineEdit } from "react-icons/ai"
import Divider from "../divider/Divider";

function EditProfile() {
    const [file, setFile] = useState('')
    const [preview, setPreview] = useState('https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [socialLinks, setSocialLinks] = useState({
        facebook: '',
        instagram: '',
        reddit: '',
        twitch: '',
        twitter: '',
        linkedin: ''
    })
    return (
        <div className="editProfile">
            <div className="editProfileImage">
            <div className="imageContainer">
                <img src={preview} alt="" />
            </div>
                <label className="btn" htmlFor="image">
                    <AiOutlineEdit />
                </label>
                <input id="image" type="file" onChange={evt => {
                    const img = evt.target.files[0];
                    setFile(img);
                    const reader = new FileReader();
                    reader.readAsDataURL(img);

                    reader.onload = (event) => {
                        setPreview(event.target.result);
                        console.log("some thing")
                    }

                }} />
            </div>

            <div className="update-fields">
                <p className="txtB-2">Personal details.</p>
                <div className="updateField">
                    <input type="text" className="input" placeholder="Name" />
                    <button className="btn">
                        <AiOutlineUpload />
                    </button>
                </div>
                <div className="updateField">
                    <input type="email" className="input" placeholder="Email" />
                    <button className="btn">
                        <AiOutlineUpload />
                    </button>
                </div>
                <Divider />
                <div className="updateField">
                    <p className="txtB-2">Auth details.</p>
                    <input type="password" className="input" placeholder="Password" />
                    <button className="btn">
                        <AiOutlineUpload />
                    </button>
                </div>

            </div>
            <div className="update-fields">
                <p className="txtB-2">Social media details.</p>
                <div className="updateField">
                    <input type={"url"} className="input" placeholder="Facebook" />
                    <button className="btn">
                        <AiOutlineUpload />
                    </button>
                </div>
                <div className="updateField">
                    <input type={"url"} className="input" placeholder="Instagram" />
                    <button className="btn">
                        <AiOutlineUpload />
                    </button>
                </div>
                <div className="updateField">
                    <input type={"url"} className="input" placeholder="Reddit" />
                    <button className="btn">
                        <AiOutlineUpload />
                    </button>
                </div>
                <div className="updateField">
                    <input type={"url"} className="input" placeholder="Twitch" />
                    <button className="btn">
                        <AiOutlineUpload />
                    </button>
                </div>
                <div className="updateField">
                    <input type={"url"} className="input" placeholder="Twitter" />
                    <button className="btn">
                        <AiOutlineUpload />
                    </button>
                </div>
                <div className="updateField">
                    <input type={"url"} className="input" placeholder="Linkedin" />
                    <button className="btn">
                        <AiOutlineUpload />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default EditProfile