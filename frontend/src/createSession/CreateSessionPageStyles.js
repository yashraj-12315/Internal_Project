// CreateSessionPageStyles.js
const CreateSessionPageStyles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    container: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
      width: '400px',
      padding: '20px',
      position: 'relative',
    },
    heading: {
      margin: '0 0 20px',
      borderBottom: '2px solid #333',
      paddingBottom: '10px',
      fontSize: '24px',
      textAlign: 'center',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    label: {
      fontWeight: 'bold',
      marginTop: '10px',
      marginBottom: '5px',
      fontSize: '16px',
    },
    input: {
      marginBottom: '10px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
      fontSize: '14px',
    },
    textarea: {
      marginBottom: '10px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
      minHeight: '100px',
      fontSize: '14px',
    },
    fileInputContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '10px',
    },
    fileInput: {
      marginBottom: '5px',
      fontSize: '14px',
    },
    fileInputLabel: {
      fontSize: '14px',
      color: '#555',
    },
    continueButton: {
      padding: '10px',
      backgroundColor: '#4caf50',
      color: '#000000',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
      fontWeight:'bold'
    },
    continueButtonHover: {
      backgroundColor: '#45a049',
    },
  };
  
  export default CreateSessionPageStyles;
  