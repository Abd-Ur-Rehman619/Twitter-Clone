// // Form.js
// import React, { useState } from "react";
// import { storage, database } from "./Firebase";

// function Explore() {
//   const [text, setText] = useState("");
//   const [image, setImage] = useState(null);
//   const [gif, setGif] = useState(null);
//   const [emoji, setEmoji] = useState("");

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setImage(file);
//   };

//   const handleGifSelect = (event) => {
//     const selectedGif = event.target.value;
//     setGif(selectedGif);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Upload the image to Firebase Storage
//     const storageRef = storage.ref();
//     const imageRef = storageRef.child(`images/${image.name}`);
//     imageRef.put(image).then((snapshot) => {
//       snapshot.ref.getDownloadURL().then((imageUrl) => {
//         // Add the data to Firebase Realtime Database
//         const databaseRef = database.ref("data");
//         databaseRef.push({
//           text,
//           imageUrl,
//           gif,
//           emoji,
//         });

//         // Clear the form
//         setText("");
//         setImage(null);
//         setGif(null);
//         setEmoji("");
//       });
//     });
//   };

//   return <form onSubmit={handleSubmit}>{/* Form elements here */}</form>;
// }

// export default Explore;
// import React, { useState } from "react";
// import { auth, db, storage } from "./Firebase";

// function Explore() {
//   const [text, setText] = useState("");
//   const [image, setImage] = useState(null);
//   const [gif, setGif] = useState(null);
//   const [emoji, setEmoji] = useState("");

//   // Handle the image file upload
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setImage(file);
//   };

//   // Handle the GIF selection
//   const handleGifSelect = (event) => {
//     const selectedGif = event.target.value;
//     setGif(selectedGif);
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Upload the image to Firebase Storage
//     const storageRef = storage.ref();
//     const imageRef = storageRef.child(`images/${image.name}`);
//     imageRef.put(image).then((snapshot) => {
//       snapshot.ref.getDownloadURL().then((imageUrl) => {
//         // Add the data to Firebase Firestore
//         db.collection("data").add({
//           text,
//           imageUrl,
//           gif,
//           emoji,
//         });

//         // Clear the form
//         setText("");
//         setImage(null);
//         setGif(null);
//         setEmoji("");
//       });
//     });
//   };

//   return (
//     <div>
//       <h1>Add Data to Firebase</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <input type="file" accept="image/*" onChange={handleImageUpload} />
//         <select onChange={handleGifSelect}>
//           <option value="">Select a GIF</option>
//           {/* Populate this dropdown with GIF options */}
//         </select>
//         <input
//           type="text"
//           placeholder="Enter an emoji"
//           value={emoji}
//           onChange={(e) => setEmoji(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Explore;

import React, { useEffect, useState } from "react";
import { storage } from "./Firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "./Explore.css";

export default function Explore() {
  const [Image, setImage] = useState(null);
  const [imageList, setimageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setimageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  const uploadImage = () => {
    if (Image == null) return;
    const imageRef = ref(storage, `images/${Image.name + v4()}`);
    uploadBytes(imageRef, Image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setimageList((prev) => [...prev, url]);
      });
    });
  };
  return (
    <>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button type="submit" onClick={uploadImage}>
        Submit
      </button>
      {imageList.map((url) => {
        return <img src={url} />;
      })}
    </>
  );
}
