import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const DisplayCSVPage = ({ location }) => {
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    setLoading(true);

    // Make an API call to save the data
    fetch('http://localhost:5000/saveData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data saved successfully:', data);
        // Display a confirmation message or redirect
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const csvData = location?.state?.csvData;

    if (csvData) {
      Papa.parse(csvData, {
        header: true,
        complete: (result) => {
          if (result.errors.length > 0) {
            console.error('Error parsing CSV:', result.errors);
          } else {
            setJsonData(result.data);
          }
        },
      });
    }
  }, [location?.state?.csvData]);

  return (
    <div>
      <h1>JSON Data</h1>
      {loading && <p>Loading...</p>}
      {jsonData.length > 0 ? (
        <div>
          {jsonData.map((row, rowIndex) => (
            <div key={rowIndex}>
              {Object.entries(row).map(([header, value]) => (
                <div key={header}>
                  <strong>{header}:</strong> {value}
                </div>
              ))}
              <hr />
            </div>
          ))}
          <button onClick={handleContinue} disabled={loading}>
            Continue
          </button>
        </div>
      ) : (
        <p>No JSON data available.</p>
      )}
    </div>
  );
};

export default DisplayCSVPage;
