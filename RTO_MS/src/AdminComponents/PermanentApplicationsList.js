import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import './styles/PermananentApplicationsList.css'

function PermanentApplicationsList() {
  const [permanentLicenseApplications, setPermanentLicenseApplications] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState([]); // State to keep track of disabled buttons
  const history = useHistory();

  useEffect(() => {
    const fetchPermanentLicenseApplications = async () => {
      try {
        const response = await fetch(`http://localhost:8080/admin/getAllPermanentApplications?pageNumber=${pageNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch permanent license applications');
        }
        const data = await response.json();
        console.log(data);
        // Initialize disabled buttons state with appropriate values based on application status
        const initialDisabledButtons = data.map(application => application.status !== 'PENDING');
        setDisabledButtons(initialDisabledButtons);
        setPermanentLicenseApplications(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPermanentLicenseApplications();
  }, [pageNumber]);

  const handleApproveApplication = async (applicationId, index) => {
    console.log(applicationId);
    // Call API to approve application
    // Update state to disable the reject button for this application
    setDisabledButtons((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleRejectApplication = async (applicationId, index) => {
    console.log(applicationId);
    // Call API to reject application
    // Update state to disable the approve button for this application
    setDisabledButtons((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <Card style={{ minHeight: '500px' }}>
      <Card.Header className="text-center">Permanent License Applications</Card.Header>
      <Card.Body>
        <div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Permanent Application ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Slot</th>
                <th>Status</th>
                <th>Approve</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {permanentLicenseApplications.map((application, index) => (
                <tr key={application.id}>
                  <td>{index + 1}</td>
                  <td>{application.id}</td>
                  <td>{application.firstName}</td>
                  <td>{application.lastName}</td>
                  <td>{application.slotBooking}</td>
                  <td>{application.status}</td>
                  <td>
                    <Button className="primary-button" onClick={() => handleApproveApplication(application.id, index)} variant="primary" disabled={disabledButtons[index] || application.status !== 'PENDING'}>APPROVE</Button>
                  </td>
                  <td>
                    <Button className="secondary-button" onClick={() => handleRejectApplication(application.id, index)} variant="primary" disabled={disabledButtons[index] || application.status !== 'PENDING'}>REJECT</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ textAlign: 'right', marginTop: '1rem' }}>
            <Button onClick={handlePreviousPage} disabled={pageNumber === 0} variant="link">Previous Page</Button>
            <Button onClick={handleNextPage} variant="link" className="ml-2">Next Page</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PermanentApplicationsList;
