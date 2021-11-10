import React from "react"
import styles from "./index.css"

export default function Home() {
  return <>
    <div className="banner">
      <p class="banner-text">Logo mais com uma cara nova!
        <br />
        <br />
        Entre em contato,
        <br />
        <a alt='paulo.henrique@ituran.com.br' target="_blank" href='mailto:marketing@ituran.com.br?subject=Landing Page Contact'>marketing@ituran.com.br</a>
      </p>
    </div>
    <div class="video">
      <iframe width="100%" height="100%"
        src="https://www.youtube-nocookie.com/embed/DVS3cxeplIw?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
  </>
}
