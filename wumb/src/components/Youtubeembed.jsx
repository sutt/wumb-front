import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ControlBar from "./ControlBar";

const YoutubeEmbed = ({ radioData, selectedSong, songId, setSongId }) => {
  const [youTubeData, setYouTubeData] = useState(selectedSong);
  const [onSwitch, setOnSwitch] = useState("true");

  // Fetches youtube data using the 'selectedSong' info
  useEffect(() => {
    const artistUrl = selectedSong.artist.replace(/ /g, "%20");
    const titleUrl = selectedSong.title.replace(/ /g, "%20");
    const url = `https://wumb-proxy-2.herokuapp.com/search-yt-api?artist=${artistUrl}&title=${titleUrl}&live=${onSwitch}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        window.videodata = data;
        setYouTubeData(data[0].id.videoId);
      })
      .catch(console.error);
  }, [selectedSong, onSwitch]);

  const urlSwitch = () => {
    if (onSwitch === "true") {
      setOnSwitch("false");
    } else {
      setOnSwitch("true");
    }
  };

  if (selectedSong && youTubeData) {
    return (
      <div className="embed-container">
        {/* <button onClick={urlSwitch}>Toggle Live Search</button>
        <div className="true-message">
          <h2> Live search is currently {onSwitch}</h2>
        </div> */}

        <div className="video-container">
          <div className="video-responsive">
            <iframe
              src={`https://www.youtube.com/embed/${youTubeData}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* <iframe src="https://www.youtube.com/embed/VIDEO_ID?playlist=wOwblaKmyVw,ZbZSe6N_BXs" title="YouTube video player playlist" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          </div>
          <div className="youtube-controler">
            <ControlBar
              radioData={radioData}
              songId={songId}
              setSongId={setSongId}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div> Loading, please wait!!</div>;
  }
};
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
