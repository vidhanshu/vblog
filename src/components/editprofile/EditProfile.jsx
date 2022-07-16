import "./editProfile.scss";
import Divider from "../divider/Divider";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineUpload } from "react-icons/ai";
import { BACKEND_URL } from "../../constants/constant";
import { useGlobalContext } from "../../contexts/globalcontext";
import { updateMeHandler, uploadAvatarHandler } from "../../utils/userHandlers";
import { getAuthUser } from "../../utils/utils";

function EditProfile() {

    const auth = getAuthUser();
    const { userProfile } = useGlobalContext();
    const [file, setFile] = useState('');
    const [preview, setPreview] = useState(`${BACKEND_URL}/user/62be06df2f0f818fdb936919/avatar` || 'https://th.bing.com/th/id/OIP.qw42y3S9KyR2Wn9JVAWArgHaHa?pid=ImgDet&rs=1')
    const [username, setUsername] = useState(userProfile.username);
    const [email, setEmail] = useState(userProfile.email);
    const [password, setPassword] = useState('');
    const [about, setAbout] = useState(userProfile.about);
    const [socialLinks, setSocialLinks] = useState({
        facebook: userProfile.socialLinks.facebook || '',
        instagram: userProfile.socialLinks.instagram || '',
        reddit: userProfile.socialLinks.reddit || '',
        twitch: userProfile.socialLinks.twitch || '',
        twitter: userProfile.socialLinks.twitter || '',
        linkedin: userProfile.socialLinks.linkedin || ''
    })

    const callUploadAvatarHandler = async () => {
        console.log(auth)
        const result = await uploadAvatarHandler(auth.token, file);
        if (result?.data) {
            console.log(result)
        }
    }
    const callUpdateMeHandler = async (data) => {
        const result = await updateMeHandler(auth.token, data);
        console.log(result);
    }
    const updateHandler = async (e) => {
        switch (e) {
            case 'username':
                await callUpdateMeHandler({ username });
                break;
            case 'email':
                await callUpdateMeHandler({ email });
                break;
            case 'password':
                await callUpdateMeHandler({ password });
                break;
            case 'about':
                await callUpdateMeHandler({ about });
                break;
            case 'socialLinks':
                await callUpdateMeHandler({ socialLinks });
                break;
            default:
                break;
        }
    }
    return (
        <div className="editProfile">
            <div className="image-wrapper">
                <div className="editProfileImage">
                    <div className="imageContainer mtb-1">
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
                <button style={{ fontSize: 22, maxWidth: "300px" }} className="btn-sqr mtb-1"
                    onClick={callUploadAvatarHandler}
                >
                    <AiOutlineUpload />
                </button>
            </div>
            <div className="update-fields">
                <p className="txtB-2">Personal details.</p>
                <div className="updateField">
                    <input value={username} type="text" className="input" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <button style={{ fontSize: 22 }} className="btn-sqr mtb-1" onClick={() => updateHandler('username')}>
                        <AiOutlineUpload />
                    </button>
                </div>
                <div className="updateField">
                    <input value={email} type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <button style={{ fontSize: 22 }} className="btn-sqr mtb-1" onClick={() => updateHandler('email')}>
                        <AiOutlineUpload />
                    </button>
                </div>
                <div className="updateField">
                    <textarea value={about} style={{ transition: 'none', maxWidth: "100%", minWidth: "100%", minHeight: 50, color: 'white' }} type="email" className="input" placeholder="About" onChange={(e) => setAbout(e.target.value)} />
                    <button style={{ fontSize: 22 }} className="btn-sqr mtb-1" onClick={() => updateHandler('about')}>
                        <AiOutlineUpload />
                    </button>
                </div>
                <Divider />
                <div className="updateField">
                    <p className="txtB-2">Auth details.</p>
                    <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button style={{ fontSize: 22 }} className="btn-sqr mtb-1" onClick={() => updateHandler('password')}>
                        <AiOutlineUpload />
                    </button>
                </div>

            </div>
            <div className="update-fields">
                <p className="txtB-2">Social media details.</p>
                <div>
                    <div className="updateField">
                        <input type="url" className="input" placeholder="Facebook" onChange={e => setSocialLinks((cur) => ({ ...cur, facebook: e.target.value }))} />
                    </div>
                    <div className="updateField">
                        <input type="url" className="input" placeholder="Instagram" onChange={e => setSocialLinks((cur) => ({ ...cur, instagram: e.target.value }))} />
                    </div>
                    <div className="updateField">
                        <input type="url" className="input" placeholder="Reddit" onChange={e => setSocialLinks((cur) => ({ ...cur, reddit: e.target.value }))} />
                    </div>
                    <div className="updateField">
                        <input type="url" className="input" placeholder="Twitch" onChange={e => setSocialLinks((cur) => ({ ...cur, twitch: e.target.value }))} />
                    </div>
                    <div className="updateField">
                        <input type="url" className="input" placeholder="Twitter" onChange={e => setSocialLinks((cur) => ({ ...cur, twitter: e.target.value }))} />
                    </div>
                    <div className="updateField">
                        <input type="url" className="input" placeholder="Linkedin" onChange={e => setSocialLinks((cur) => ({ ...cur, linkedin: e.target.value }))} />
                    </div>
                    <button style={{ fontSize: 22 }} className="btn-sqr mtb-1" onClick={() => updateHandler('socialLinks')}>
                        <AiOutlineUpload />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default EditProfile