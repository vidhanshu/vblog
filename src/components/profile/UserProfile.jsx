import "./userProfile.scss";

import { BsInstagram, BsLinkedin, BsReddit, BsTwitch, BsTwitter } from "react-icons/bs";
import { Divider, FavBlog } from "..";
import { useEffect, useState } from "react";

import { BACKEND_URL } from "../../constants/constant";
import MediaQuery from "react-responsive";
import { getAuthUser } from "../../utils/utils";
import { getMeHandler } from "../../utils/userHandlers";
import { useGlobalContext } from "../../contexts/globalcontext";

function UserProfile() {
    const auth = getAuthUser();

    const { setIsLoading, userProfile, setUserProfile } = useGlobalContext();

    const [preview] = useState(`${BACKEND_URL}/user/${auth?.user?._id}/avatar` || 'https://th.bing.com/th/id/OIP.qw42y3S9KyR2Wn9JVAWArgHaHa?pid=ImgDet&rs=1')

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            await callGetMeHandler();
        }
        fetchData();
    }, []);

    const callGetMeHandler = async () => {
        const result = await getMeHandler(auth.token, setIsLoading);
        if (result.data) {
            setUserProfile(result.data);
            console.log(result)
        }
    }
    const { username, about = `I'm interested in blogging`, socialLinks = {}, } = userProfile || {};
    const { facebook = '', twitter = '', instagram = '', twitch = '', reddit = '', linkedin = '' } = socialLinks;
    const socialLinksArray = [facebook, twitter, instagram, twitch, reddit, linkedin];
    const socialIconsArray = [
        <BsInstagram />,
        <BsReddit />,
        <BsTwitch />,
        <BsTwitter />,
        <BsLinkedin />
    ]
    return (
        <div className="profileDetails">
            <div className="profileImage mtb-1">
                <img src={preview} alt="" />
                <p className="txtSB-2xx mtb-1">
                    {username}
                </p>
                <p className="txtL-2 mtb-1">
                    Followers 1.2k
                </p>
            </div>
            <div className="profileAbout txtL-3 mtb-1">
                {about}
            </div>
            <div className="profileFollow">
                <button className="circular-btn">Follow</button>
                <div className="socialIcons ml-2">
                    {socialLinksArray.map((link, idx) => (link ?
                        <a key={idx} href={`${link}`} target="_blank" rel="noreferrer">
                            {socialIconsArray[idx]}
                        </a>
                        : null))}
                </div>
            </div>
            <MediaQuery minWidth={1200}>
                <div className="profileFavoriteContainer mtb-2">
                    <p className="txtL-2xx">More from vblog.</p>
                    <div className="profileFavorite border">
                        <FavBlog />
                        <Divider />
                        <FavBlog />
                        <Divider />
                        <FavBlog />
                        <Divider />
                        <FavBlog />
                        <Divider />
                        <FavBlog />
                        <Divider />
                        <FavBlog />
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

export default UserProfile