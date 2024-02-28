import React from "react";

type video = {
  videoId: string;
};

const YouTubeVideo = ({ videoId }: video) => {
  return (
    <div className="w-full">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubeVideo;
