import React, { useState } from 'react';
import axios from 'axios';

const PermanentLicenseApplication = () => {
  const [learnerId, setLearnerId] = useState('');
  const [error, setError] = useState('');

  const handleLearnerIdChange = (e) => {
    setLearnerId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a request to check if the learner ID exists
      const response = await axios.get(`http://localhost:8080/learner/${learnerId}`);
      // If learner ID exists, redirect to the next component
      if (response.data) {
        // Redirect to the next component passing learner ID as prop
        // For example: history.push('/next-component', { learnerId: learnerId });
      } else {
        setError('Learner ID not found. Please enter a valid ID.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Permanent License Application</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="learnerId">Learner ID:</label>
            <input
              type="text"
              className="form-control"
              id="learnerId"
              value={learnerId}
              onChange={handleLearnerIdChange}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PermanentLicenseApplication;
