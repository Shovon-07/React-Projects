import React from "react";
import { useParams } from "react-router-dom";

//___ Css ___//
import "./Video.css";

//___ Components ___//
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";

const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recommended />
    </div>
  );
};

export default Video;
