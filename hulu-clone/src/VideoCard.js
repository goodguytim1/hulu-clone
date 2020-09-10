import React from 'react';
import './VideoCard.css';
function VideoCard({movie}) {
  return (
    <div className="videoCard">
      <img src="https://image.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg" alt=""/>
      <p>This is an example film</p>
      <h2>Movie Title</h2>
      <p>Number of likes</p>
    </div>
  )
}

export default VideoCard;
