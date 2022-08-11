import React from "react";

const NewsItem =(props)=> {
 
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span
              className="badge rounded-pill bg-danger"
              
            >
              {source}
              </span>
              </div>
          <img
            src={
              !imageUrl
                ? "https://thumbs.dreamstime.com/b/breaking-news-banner-announcement-trending-urgent-events-incidents-vector-198504331.jpg"
                : imageUrl
            }
            className="card-img-top style={{    width: '100%';
              height: '230px';}}"
            alt="..."
          />
          <div className="card-body">
           
              {/* <span class="visually-hidden">unread messages</span>
            </span> */}
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="norefreence"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
