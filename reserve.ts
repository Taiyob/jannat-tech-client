// "use client";

// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Import Quill styles

// const BlogCreate = () => {
//   const [postContent, setPostContent] = useState("");

//   const handlePostSubmit = () => {
//     // Submit the post content to the backend or handle it as needed
//     console.log("Post Content:", postContent);
//     setPostContent(""); // Clear the editor after submission
//   };

//   return (
//     <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-6 border border-gray-700 text-white">
//       <h2 className="text-xl font-bold mb-4 text-gray-300">
//         What’s on your mind, Taiyob?
//       </h2>

//       {/* Rich Text Editor */}
//       <ReactQuill
//         theme="snow"
//         value={postContent}
//         onChange={setPostContent}
//         placeholder="Write something..."
//         className="mb-4 bg-gray-900 text-gray-300"
//       />

//       <div className="flex justify-between items-center mt-4">
//         <div className="flex">
//           <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mr-2">
//             Live Video
//           </button>
//           <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mr-2">
//             Photo/Video
//           </button>
//           <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded">
//             Feeling/Activity
//           </button>
//         </div>

//         <button
//           onClick={handlePostSubmit}
//           className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
//         >
//           Post
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogCreate;
