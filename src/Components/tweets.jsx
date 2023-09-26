// import React, { useState } from "react";
// import { Avatar } from "@chakra-ui/react";
// import { FaRegComment } from "react-icons/fa6";
// import { BiRepost } from "react-icons/bi";
// import { FcLikePlaceholder } from "react-icons/fc";
// import { BsViewStacked } from "react-icons/bs";
// import { FiShare } from "react-icons/fi";
// import SubscriptionNote from "./SubscriptionNote";
// function TwitterPost() {
//   const tweets = [
//     {
//       id: 1,
//       userName: "john Doe",
//       userHandle: "@johnDoe",
//       userDescription: "This is a nice bmw car",
//       content:
//         "https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar-men.png",
//       tweet:
//         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90499807-highres-the-bmw-xm-label-red-64beeff2ccfab.jpg?crop=0.670xw:1.00xh;0.136xw,0&resize=1200:*",
//     },
//     {
//       id: 2,
//       userName: "john Caramer",
//       userHandle: "@johnCaramer",
//       userDescription: "This is a nice bmw car",
//       content: "https://icon-library.com/images/50x50-icon/50x50-icon-4.jpg",
//       tweet:
//         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90499807-highres-the-bmw-xm-label-red-64beeff2ccfab.jpg?crop=0.670xw:1.00xh;0.136xw,0&resize=1200:*",
//     },
//     {
//       id: 3,
//       userName: "Misha S",
//       userHandle: "@Misha",
//       userDescription: "This is a nice bmw car",
//       content: "https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg",
//       tweet:
//         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90499807-highres-the-bmw-xm-label-red-64beeff2ccfab.jpg?crop=0.670xw:1.00xh;0.136xw,0&resize=1200:*",
//     },
//   ];
//   const [likes, setLikes] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   const [userState, setuserState] = useState(tweets);

//   const handleLikeClick = () => {
//     if (isLiked) {
//       setLikes(likes - 1);
//     } else {
//       setLikes(likes + 1);
//     }
//     setIsLiked(!isLiked);
//   };

//   return (
//     <>
//       {tweets.map((item) => (
//         <div key={item.id} className="tweet">
//           <div className="user_info" style={{ display: "flex" }}>
//             <div>
//               <Avatar size={"md"} src={item.content} />
//             </div>
//             <div
//               className="user_details"
//               style={{ display: "flex", flexDirection: "column" }}
//             >
//               <div className="user_basicInfo" style={{ display: "flex" }}>
//                 <p className="user_name" style={{ fontWeight: 700 }}>
//                   {item.userName}
//                 </p>
//                 <p className="user-handle">{item.userHandle}</p>
//               </div>
//               <div>
//                 <p className="user-description">{item.userDescription}</p>
//               </div>
//             </div>
//           </div>
//           <p className="tweet-content">
//             <img src={item.tweet} alt="image" />
//           </p>
//           <div className="interaction">
//             <div>
//               <FaRegComment size={"30px"} />
//             </div>
//             <div>
//               <BiRepost size={"30px"} />
//             </div>
//             <div>
//               <FcLikePlaceholder size={"30px"} />
//             </div>
//             <div>
//               <BsViewStacked size={"30px"} />
//             </div>
//             <div>
//               <FiShare size={"30px"} />
//             </div>
//             {/* <button
//                   className={`like-button ${isLiked ? "liked" : ""}`}
//                   onClick={handleLikeClick}
//                 >
//                   {isLiked ? "Liked" : "Like"}
//                 </button>
//                 <span className="like-count">{likes} Likes</span> */}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default TwitterPost;

import React from "react";
import "./tweets.css";
import { Button } from "@chakra-ui/react";
import TweetPost from "./TweetPost";
import { useState, useEffect } from "react";
import { db } from "./Firebase";
import FlipMove from "react-flip-move";

export default function TwitterPost({ selectedImage }) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(snapshot.docs.map((doc) => doc.data()));
      });
  });

  return (
    <div className="feed">
      <FlipMove>
        {post.map((post, index) => (
          <TweetPost
            selectedImage={selectedImage}
            key={index}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}
