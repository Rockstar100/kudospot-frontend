
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const Analytics = () => {
  const [kudosData, setKudosData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/kudos')
      .then(res => setKudosData(res.data))
      .catch(err => console.error(err));
  }, []);

  
  const data = {
    labels: kudosData.map(kudos => kudos.receiver.name),
    datasets: [
      {
        label: 'Kudos Received',
        data: kudosData.map(kudos => kudos.message.length), 
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  };

  return (
    <div className="analytics">
      <h2>Analytics</h2>
      <Bar data={data} />
    </div>
  );
};

export default Analytics;
