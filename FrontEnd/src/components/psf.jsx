//psf.js
import React, { useState } from "react";
import NavBar from "./NavBar";

const PSF = () => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  const handleLike = (index) => {
    // Increment likes for the comment at the specified index
    const updatedComments = [...comments];
    updatedComments[index].likes++;
    setComments(updatedComments);
  };

  const handleDislike = (index) => {
    // Increment dislikes for the comment at the specified index
    const updatedComments = [...comments];
    updatedComments[index].dislikes++;
    setComments(updatedComments);
  };

  return (
    <div className="cyan-theme">
      <NavBar />
      <h1>Peer Support Forum</h1>
      <div className="comments-section">
        <CommentBox onCommentSubmit={handleCommentSubmit} />
        <div className="comments-list">
          {comments.map((comment, index) => (
            <Comment
              key={index}
              index={index}
              comment={comment}
              onLike={handleLike}
              onDislike={handleDislike}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CommentBox = ({ onCommentSubmit }) => {
  const [commentText, setCommentText] = useState("");
  const [personName, setPersonName] = useState("");

  const handleSubmit = () => {
    if (commentText.trim() && personName.trim()) {
      const newComment = {
        text: commentText,
        person: personName,
        likes: 0,
        dislikes: 0,
      };
      onCommentSubmit(newComment);
      setCommentText("");
      setPersonName("");
    }
  };

  return (
    <div className="comment-box">
      <textarea
        rows="4"
        placeholder="Write your comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Your name"
        value={personName}
        onChange={(e) => setPersonName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const Comment = ({ comment, index, onLike, onDislike }) => {
  return (
    <div className="comment">
      <p>{comment.text}</p>
      <p>By: {comment.person}</p>
      <button onClick={() => onLike(index)}>Like</button>
      <span>{comment.likes}</span>
      <button onClick={() => onDislike(index)}>Dislike</button>
      <span>{comment.dislikes}</span>
      <button>Reply</button>
    </div>
  );
};

export default PSF;
