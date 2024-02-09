import React from 'react';
import '../Topic/Topic.scss';

export const Topic = () => {
  return (
    <article className="Topic">
      <div className="Topic_headerWrapper">
        <div className="Topic_title">
          Systems Development NQF5
        </div>

        <div className="Topic_title">
          Introduction to HTML
        </div>

        <button className="Topic_btn">
          Dashboard
        </button>
      </div>

      <div className="Topic_buttons">
        <button className="Topic_videos">
          Videos
        </button>

        <button className="Topic_theory">
          Theory
        </button>

        <button className="Topic_practice">
          Practice
        </button>
      </div>

      <div className="Topic_contentWrapper">
        <div className="Topic_content">
        <iframe
          className="Topic_content--video"
          src="https://youtube.com/embed/uEwZOQfcTys">
        </iframe>
        </div>

        <div className="Topic_playlist">
          <h3 className="Topic_playlist--title">Playlist / Links</h3>
        </div>
      </div>

    </article>
  );
};
