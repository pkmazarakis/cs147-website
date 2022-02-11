/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./YoutubeEmbed.css";

const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe
      src="https://player.vimeo.com/video/671369079?h=b2b7bba8ee"
      width="640"
      height="360"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
    <p>
      <a href="https://vimeo.com/671369079">5-9 Concept Video</a> from{" "}
      <a href="https://vimeo.com/user165032844">Tara Parekh</a> on{" "}
      <a href="https://vimeo.com">Vimeo</a>.
    </p>
  </div>
);

export default YoutubeEmbed;
