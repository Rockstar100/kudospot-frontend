
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GiveKudos = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    sender: '',
    receiver: '',
    message: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/kudos', formData)
      .then(() => alert('Kudos sent!'))
      .catch(err => console.error(err));
  };

  return (
    <div className="give-kudos">
      <h2>Give Kudos</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={formData.sender}
          onChange={e => setFormData({ ...formData, sender: e.target.value })}
          required
        >
          <option value="">Select Sender</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>{user.name}</option>
          ))}
        </select>
        <select
          value={formData.receiver}
          onChange={e => setFormData({ ...formData, receiver: e.target.value })}
          required
        >
          <option value="">Select Receiver</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>{user.name}</option>
          ))}
        </select>
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <button type="submit">Send Kudos</button>
      </form>
    </div>
  );
};

export default GiveKudos;
