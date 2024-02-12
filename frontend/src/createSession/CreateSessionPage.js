//below  code is using node server.js

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Papa from "papaparse";
// import axios from "axios"; // Add axios for making HTTP requests
// import Navbar from "../Navbar/Navbar";
// import CreateSessionPageStyles from "./CreateSessionPageStyles";

// const CreateSessionPage = () => {
//   const navigate = useNavigate();

//   const [projectName, setProjectName] = useState("");
//   const [projectOwner, setProjectOwner] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile && selectedFile.type === "text/csv") {
//       setFile(selectedFile);
//     } else {
//       setFile(null);
//       alert("Please upload a valid CSV file.");
//     }
//   };

//   const handleContinue = async () => {
//     try {
//       if (!file) {
//         alert("Please upload a CSV file.");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("csvFile", file);

//       // Make a POST request to the server to handle file upload
//       const response = await axios.post(
//         "http://localhost:5000/uploads",
//         formData
//       );

//       console.log("Server response:", response.data);

//       // Parse CSV data
//       const csvData = await parseCSV(file);

//       console.log("CSV Data:", csvData);

//       // Navigate to DisplayCSVPage with CSV data as a prop
//       navigate("/display-csv", { state: { csvData } });
//     } catch (error) {
//       console.error("Error handling file upload:", error.message);
//     }
//   };

//   const parseCSV = (csvFile) => {
//     return new Promise((resolve, reject) => {
//       Papa.parse(csvFile, {
//         header: true,
//         dynamicTyping: true,
//         complete: (result) => {
//           resolve(result.data);
//         },
//         error: (error) => {
//           reject(error);
//         },
//       });
//     });
//   };

//   return (
//     <div style={CreateSessionPageStyles.pageContainer}>
//       <Navbar />
//       <div style={CreateSessionPageStyles.container}>
//         <h1 style={CreateSessionPageStyles.heading}>Creating a Session</h1>
//         <div style={CreateSessionPageStyles.formContainer}>
//           <label style={CreateSessionPageStyles.label}>Project Name:</label>
//           <input
//             type="text"
//             value={projectName}
//             onChange={(e) => setProjectName(e.target.value)}
//             style={CreateSessionPageStyles.input}
//           />
//           <label style={CreateSessionPageStyles.label}>Project Owner:</label>
//           <input
//             type="text"
//             value={projectOwner}
//             onChange={(e) => setProjectOwner(e.target.value)}
//             style={CreateSessionPageStyles.input}
//           />
//           <label style={CreateSessionPageStyles.label}>Description:</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             style={CreateSessionPageStyles.textarea}
//             required
//           />
//           <label style={CreateSessionPageStyles.label}>Upload CSV File:</label>
//           <div style={CreateSessionPageStyles.fileInputContainer}>
//             <input
//               type="file"
//               accept=".csv"
//               onChange={handleFileChange}
//               style={CreateSessionPageStyles.fileInput}
//               required
//             />
//             <span style={CreateSessionPageStyles.fileInputLabel}>
//               {file ? file.name : "No file selected"}
//             </span>
//           </div>
//           <button
//             onClick={handleContinue}
//             style={CreateSessionPageStyles.continueButton}
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateSessionPage;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//below code is using python server

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import CreateSessionPageStyles from "./CreateSessionPageStyles";

const CreateSessionPage = () => {
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");
  const [projectOwner, setProjectOwner] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
    } else {
      setFile(null);
      setErrorMessage("Please upload a valid CSV file.");
    }
  };

  const handleContinue = async () => {
    try {
      if (!file) {
        setErrorMessage("Please upload a CSV file.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file); // Update to match backend key name

      // Make a POST request to the server to handle file upload
      const response = await axios.post(
        "http://localhost:5000/api/upload", // Update to match your backend endpoint URL
        formData
      );

      console.log("Server response:", response.data);

      // Clear error message
      setErrorMessage("");

      // Optionally, handle response data or navigate to a different page
      // navigate("/some-page");
    } catch (error) {
      console.error("Error handling file upload:", error.message);
      setErrorMessage("An error occurred while uploading the file.");
    }
  };

  return (
    <div style={CreateSessionPageStyles.pageContainer}>
      <Navbar />
      <div style={CreateSessionPageStyles.container}>
        <h1 style={CreateSessionPageStyles.heading}>Creating a Session</h1>
        <div style={CreateSessionPageStyles.formContainer}>
          <label style={CreateSessionPageStyles.label}>Project Name:</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            style={CreateSessionPageStyles.input}
          />
          <label style={CreateSessionPageStyles.label}>Project Owner:</label>
          <input
            type="text"
            value={projectOwner}
            onChange={(e) => setProjectOwner(e.target.value)}
            style={CreateSessionPageStyles.input}
          />
          <label style={CreateSessionPageStyles.label}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={CreateSessionPageStyles.textarea}
            required
          />
          <label style={CreateSessionPageStyles.label}>Upload CSV File:</label>
          <div style={CreateSessionPageStyles.fileInputContainer}>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              style={CreateSessionPageStyles.fileInput}
              required
            />
            <span style={CreateSessionPageStyles.fileInputLabel}>
              {file ? file.name : "No file selected"}
            </span>
          </div>
          <button
            onClick={handleContinue}
            style={CreateSessionPageStyles.continueButton}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSessionPage;
