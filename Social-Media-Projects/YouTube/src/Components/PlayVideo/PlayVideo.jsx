import React from "react";

//___ Images ___//
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

//___ Css ___//
import "./PlayVideo.css";

const PlayVideo = ({ videoId }) => {
  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h2>
        Create YouTube Clone Using React JS | Build Complete Website Like
        YouTube In React JS 2024
      </h2>
      <div className="play-video-info">
        <p>15K &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" /> 1242
          </span>
          <span>
            <img src={dislike} alt="" /> 12
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Shovon</p>
          <span>1M</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>This a great learning chanel</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam illum
          earum neque, cumque aspernatur magnam necessitatibus quas nihil labore
          aliquid autem esse accusamus.
        </p>
        <hr />
        <h4>130 comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jubair <span>1 day ago</span>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, libero iusto. Ipsum, praesentium voluptatibus error
              quam expedita totam possimus ipsam molestiae nisi rem voluptates
              consectetur! Vel optio id non fuga qui placeat consectetur
              perspiciatis voluptate at, nihil quo, eaque ea aliquid quibusdam
              nostrum enim sed? Voluptate tenetur reprehenderit similique minus.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jubair <span>1 day ago</span>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, libero iusto. Ipsum, praesentium voluptatibus error
              quam expedita totam possimus ipsam molestiae nisi rem voluptates
              consectetur! Vel optio id non fuga qui placeat consectetur
              perspiciatis voluptate at, nihil quo, eaque ea aliquid quibusdam
              nostrum enim sed? Voluptate tenetur reprehenderit similique minus.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jubair <span>1 day ago</span>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, libero iusto. Ipsum, praesentium voluptatibus error
              quam expedita totam possimus ipsam molestiae nisi rem voluptates
              consectetur! Vel optio id non fuga qui placeat consectetur
              perspiciatis voluptate at, nihil quo, eaque ea aliquid quibusdam
              nostrum enim sed? Voluptate tenetur reprehenderit similique minus.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
