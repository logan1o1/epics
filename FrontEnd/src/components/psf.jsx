import React, { useState } from "react";

const PSF = () => {
  
  const [comments, setComments] = useState([]);

  
  const addComment = (newComment) => {
    setComments([...comments, { text: newComment, reactions: { like: 0, dislike: 0 }, replies: [] }]);
  };

  
  const handleLikeDislike = (index, reaction) => {
    const updatedComments = [...comments];
    updatedComments[index].reactions[reaction]++;
    setComments(updatedComments);
  };

    const addReply = (commentIndex, replyText) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies.push(replyText);
    setComments(updatedComments);
  };

  return (
    <div className="container mx-auto mt-24 bg-cyan-100 p-8 rounded-md">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Peer Support Forum</h1>

      {/* Component for adding new comments */}
      <div className="mb-6">
        <textarea placeholder="Write your comment here..." className="w-full mb-2 px-2 py-1 border rounded"></textarea>
        <button onClick={() => addComment("new comment")} className="px-4 py-1 bg-cyan-500 text-white rounded">Submit</button>
      </div>

      {/* Display existing comments */}
      <div>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="border rounded-lg p-4 mb-4">
              <p>{comment.text}</p>
              <div className="flex items-center mt-2">
                <button onClick={() => handleLikeDislike(index, "like")} className="mr-2">Like</button>
                <span>{comment.reactions.like}</span>
                <button onClick={() => handleLikeDislike(index, "dislike")} className="ml-2">Dislike</button>
                <span>{comment.reactions.dislike}</span>
              </div>
              <div className="mt-2">
                <input type="text" placeholder="Write a reply..." className="mr-2 px-2 py-1 border rounded" />
                <button onClick={() => addReply(index, "new reply")} className="px-4 py-1 bg-cyan-500 text-white rounded">Reply</button>
              </div>
              {/* Display replies */}
              {comment.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className="ml-4 italic mt-2">
                  <p>{reply}</p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default PSF;