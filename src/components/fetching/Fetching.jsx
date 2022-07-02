import "./fetching.scss"

import React from 'react'
import { generateRandomNo } from "../../utils/utils"

function Fetching() {
  const images = [
    "https://th.bing.com/th/id/R.7feef53b658f4308def010d5e40d54b4?rik=Nd9isWQWxd5Fow&riu=http%3a%2f%2fwww.gifsanimes.fr%2fgame-gifs%2fgame-gifs%2fminecraft%2fminecraft-gifs-animes-484177.gif&ehk=gjpmXgZrer3Z%2fhc2s9cHZ1EAeGnBK9k2oECjWKEhd%2fM%3d&risl=&pid=ImgRaw&r=0",
    "https://orig00.deviantart.net/34de/f/2012/204/b/c/grass_block_by_barakaldo-d58bi3u.gif",
    " https://media.giphy.com/media/wwTWHMEEHxSiA/giphy.gif",
    "https://31.media.tumblr.com/809bcb918f91d0a4c8aa508f10324f69/tumblr_mlpzqxfSkR1rfjowdo1_500.gif",
  ]
  return (
    <div className="fetching-container">
      <img src={images[generateRandomNo(0, images.length - 1)]} alt="fetching" />
      <h1 className="txtB-2" style={{ color: "whitesmoke" }}>
        Fetching
        <span className="one"> .</span>
        <span className="two"> .</span>
        <span className="three"> .</span>
      </h1>
    </div>
  )
}

export default Fetching