"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import getYouTubeId from "get-youtube-id";

function YoutubeComponent({ url }: { url: string }) {
  if (!url) {
    return <div>Missing YouTube URL</div>;
  }
  const id = getYouTubeId(url);

  if (!id) {
    return <div>Error on get ID</div>;
  }
  return <LiteYouTubeEmbed id={id} title={"Youtube"} iframeClass="youtube" />;
}

export default YoutubeComponent;
