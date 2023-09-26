// import React from "react";
// import { Avatar, Input, Button } from "@chakra-ui/react";
// import { ImFilePicture } from "react-icons/im";
// import { AiOutlineFileGif, AiOutlineSchedule } from "react-icons/ai";
// import { BiPoll } from "react-icons/bi";
// import { HiOutlineEmojiHappy } from "react-icons/hi";
// import { GrSchedulePlay } from "react-icons/gr";
// import { CiLocationOn } from "react-icons/ci";
// export default function MyPosts() {
//   const icons = [
//     {
//       id: 1,
//       btnIcons: ImFilePicture,
//     },
//     {
//       id: 2,
//       btnIcons: AiOutlineFileGif,
//     },
//     {
//       id: 3,
//       btnIcons: BiPoll,
//     },
//     {
//       id: 4,
//       btnIcons: HiOutlineEmojiHappy,
//     },
//     {
//       id: 5,
//       btnIcons: AiOutlineSchedule,
//     },
//     {
//       id: 6,
//       btnIcons: CiLocationOn,
//     },
//   ];

//   return (
//     <>
//       <div className="MainMyPostSection">
//         <div style={{ display: "flex", paddingLeft: 40 }}>
//           <div>
//             <Avatar
//               size={"md"}
//               src="https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black-thumbnail.png"
//             />
//           </div>
//           <div
//             style={{
//               padding: 10,
//             }}
//           >
//             <Input
//               variant="unstyled"
//               placeholder="What is happening?!"
//               size={"lg"}
//             />
//           </div>
//         </div>

//         <div className="btnIcons">
//           <div className="Allbtns">
//             <div className="IconsPostsbtn">
//               {icons.map((singleIcon) => (
//                 <div key={singleIcon.id}>
//                   <Button variant="ghost" size="md" borderRadius="full">
//                     {<singleIcon.btnIcons style={{ color: "#1DA1F2" }} />}
//                   </Button>
//                 </div>
//               ))}
//             </div>
//             <div>
//               <Button
//                 className="PostBtn"
//                 style={{
//                   paddingLeft: 40,
//                   paddingRight: 40,
//                   borderRadius: 999,
//                 }}
//                 colorScheme="twitter"
//               >
//                 Post
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { Avatar, Button, Input } from "@chakra-ui/react";
import React from "react";
import "./MyPosts.css";
// import { FaRegImage } from "react-icons/fa6";
import {
  Ballot,
  CalendarMonth,
  Gif,
  LocationOnOutlined,
} from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import { useState, useEffect } from "react";
import { db, storage } from "./Firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import firebase from "firebase/compat/app";

export default function MyPosts({ onImageUpload }) {
  const [tweet, setTweet] = useState("");
  const [Image, setImage] = useState(null);
  const [imageList, setimageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  function showMessages(e) {
    e.preventDefault();
    console.log(`hahah  ${imageList}`);
    console.log(`hahah  ${Image}`);
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    onImageUpload(Image);
  };

  const handleSendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Abd-Ur-Rehman",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userName: "@Abd",
      verified: true,
      text: tweet,
      image: imageList,
      avatar:
        "https://www.bmw.ca/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg",
    });
    setTweet("");
    setImage(null);
    if (Image == null) return;
    const imageRef = ref(storage, `images/${Image.name + v4()}`);
    uploadBytes(imageRef, Image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setimageList((prev) => [...prev, url]);
      });
    });
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input">
          <Avatar src="https://www.bmw.ca/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" />
          <Input
            type="text"
            placeholder="What's happening?"
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
          />
        </div>
        <div className="tweetbox-emojis">
          <label htmlFor="imageInput">
            <ImageIcon className="cursor-pointer" />
            <input
              id="imageInput"
              onChange={handleImageUpload}
              type="file"
              accept="video/*,image/*"
              style={{ display: "none" }}
            />
          </label>
          <Gif className="cursor-pointer" />
          <Ballot className="cursor-pointer" />
          <CalendarMonth className="cursor-pointer" />
          <LocationOnOutlined className="cursor-pointer" />
          {
            <Button
              onClick={handleSendTweet}
              colorScheme="twitter"
              className="tweetbox-button "
              isDisabled={tweet === "" && Image === null}
            >
              Post
            </Button>
          }
          <button onClick={showMessages}>click</button>
        </div>
      </form>
    </div>
  );
}
