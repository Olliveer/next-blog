import LiteYouTubeEmbed from "react-lite-youtube-embed";
import getYouTubeId from "get-youtube-id";

import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function YoutubePreview(props: any) {
  const { url, renderDefault } = props;
  if (!url) {
    return <div>Missing YouTube URL</div>;
  }
  const id = getYouTubeId(url);

  if (!id) {
    return <div>Error on get ID</div>;
  }

  return (
    <div>
      // 👇 Renders the default preview UI
      {renderDefault({ ...props, title: "YouTube Embed" })}
      // 👇 Renders the video preview below
      <LiteYouTubeEmbed id={id} title={"Youtube"} />
    </div>
  );
}

export default YoutubePreview;
