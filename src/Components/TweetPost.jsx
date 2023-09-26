import { ref } from "firebase/storage";
import React, { forwardRef, useState, useEffect } from "react";
import { Avatar, Image } from "@chakra-ui/react";

import {
  ChatBubbleOutlineRounded,
  FavoriteBorderRounded,
  FileDownload,
  PollRounded,
  RepeatRounded,
  VerifiedRounded,
} from "@mui/icons-material";

const TweetPost = forwardRef(
  ({ displayName, userName, text, avatar, image, selectedImage }, ref) => {
    return (
      <>
        <div className="tweet">
          <div className="user_info" style={{ display: "flex" }}>
            <div>
              <Avatar size={"md"} src={avatar} />
            </div>
            <div
              className="user_details"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="user_basicInfo" style={{ display: "flex" }}>
                <p className="user_name" style={{ fontWeight: 700 }}>
                  {displayName}{" "}
                </p>
                <p className="user-handle">{userName}</p>
              </div>
              <div>
                <p className="user-description">{text}</p>
              </div>
            </div>
          </div>
          <div className="tweet-content">
            <img src={image} alt={`Uploaded Image`} />

            {/* {selectedImage && (
              <div>
                 {image.map((file, index) => (
                  <div key={index}>
                    {selectedImage.type.startsWith("image/") ? (
                      <img src={file} alt={`Uploaded Image`} width="400" />
                    ) : selectedImage.type.startsWith("video/") ? (
                      <video controls width="400">
                        <source src={file} />
                      </video>
                    ) : (
                      <p>Unsupported file type</p>
                    )}
                  </div>
                ))} 
              </div>
            )} */}
            {/* {selectedImage.type.startsWith("image/") &&<img src={image} alt="Uploaded" />}
                {selectedImage.type.startsWith("video/") &&<video controls></video> */}
          </div>
          <div className="interaction">
            <div>
              <ChatBubbleOutlineRounded size={"30px"} />
            </div>
            <div>
              <RepeatRounded size={"30px"} />
            </div>
            <div>
              <FavoriteBorderRounded size={"30px"} />
            </div>
            <div>
              <PollRounded size={"30px"} />
            </div>
            <div>
              <FileDownload size={"30px"} />
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default TweetPost;
