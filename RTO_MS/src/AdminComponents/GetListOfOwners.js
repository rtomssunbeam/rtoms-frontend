import React, { useState, useEffect } from 'react';
// import './styles/OwnerList.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function GetListOfOwners() {
  const [owners, setOwners] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const fetchOwners = async () => {
      try {
        const response = await fetch(`http://localhost:8080/admin/getAllOwners?pageNumber=${pageNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch owners');
        }
        const data = await response.json();
        setOwners(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOwners();
  }, [pageNumber]);

  const handleViewVehicles = (ownerId) => {
    // Navigate to the VehicleListByOwner component with the ownerId as a parameter
    history.push(`/VehicleListByOwner/${ownerId}`);
    console.log(ownerId);
  };

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePreviousPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <Card style={{ minHeight: '500px' }}>
      <Card.Header>Owners</Card.Header>
      <Card.Body>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {owners.map((owner, index) => (
                <tr key={owner.adharcardNo}>
                  <td>{index + 1}</td>
                  <td>{`${owner.firstName} ${owner.middleName ? owner.middleName + ' ' : ''}${owner.lastName}`}</td>
                  <td>{owner.id}</td>
                  <td>{owner.mobileNo}</td>
                  <td>{owner.email}</td>
                  <td>{owner.postalAddressDto ? `${owner.postalAddressDto.house}, ${owner.postalAddressDto.street}, ${owner.postalAddressDto.city}, ${owner.postalAddressDto.state}, ${owner.postalAddressDto.country}, ${owner.postalAddressDto.zipCode}` : 'Address not available'}</td>
                  <td>
                    <Button onClick={() => handleViewVehicles(owner.adharcardNo)} variant="secondary">View Vehicles</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="button-container">
          <Button onClick={handlePreviousPage} disabled={pageNumber === 0} variant="secondary">Previous Page</Button>
          <Button onClick={handleNextPage} variant="secondary" className="ml-2">Next Page</Button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default GetListOfOwners;
