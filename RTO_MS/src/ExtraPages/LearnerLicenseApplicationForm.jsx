import React, { useState } from 'react';
import axios from 'axios';

import { Form, Button } from 'antd';
import styled from 'styled-components';
import './../Pages/SignIn.css';

const StyledForm = styled(Form)`
  label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .ant-btn-primary {
    margin-top: 8px;
  }

  .ant-form-item-control-input-content {
    display: flex;
    align-items: center;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

// const StyledLink = styled(Link)`
//   margin-left: 8px;
// `;


const LearnerLicenseApplicationForm = () => {
    // const url = "http://127.0.0.1:8080/lernerLicense/application"
    const url = "http://192.168.0.115:8080/lernerLicense/application"
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        userId: 1, // Assuming you have the user ID
        postalAddressDTO: {
            house: '',
            street: '',
            city: '',
            state: '',
            country: '',
            zipCode: '',
        },
        gender: '',
        bloodGroup: '',
        dateOfBirth: '',
        rtoOffice: '',
        qualification: '',
        applicationTypes: [],
        files: [null, null, null], // For storing uploaded files
    });
    // const [files, setFiles] = useState({files:[null,null,null],});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePostalAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            postalAddressDTO: {
                ...prevData.postalAddressDTO,
                [name]: value,
            },
        }));
    };
    const handleApplicationTypeChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => {
            if (checked) {
                return {
                    ...prevData,
                    applicationTypes: [...prevData.applicationTypes, name],
                };
            } else {
                return {
                    ...prevData,
                    applicationTypes: prevData.applicationTypes.filter((type) => type !== name),
                };
            }
        });
    };

    const handleFileInputChange = (e, fileInputIndex) => {
        const files = Array.from(e.target.files);
        setFormData((prevData) => {
            const updatedFiles = [...prevData.files];

            // Check if the element at fileInputIndex is null
            if (updatedFiles[fileInputIndex] === null) {
                updatedFiles[fileInputIndex] = files;
            } else {
                updatedFiles[fileInputIndex] = [...files];
            }

            // console.log(formData.files)
            return {
                ...prevData,
                files: updatedFiles,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataNew = new FormData();
            var { files, ...userDetails } = formData;
            files = files.flat()
            formDataNew.append("userDetails", JSON.stringify(userDetails))
            // console.log(userDetails)
            // console.log("user details : "+ JSON.stringify(userDetails)); 

            // for(let i=0; i< 3; i++){
            formDataNew.append(`file1`, files[0]);
            formDataNew.append(`file2`, files[1]);
            formDataNew.append(`file3`, files[2]);
            // }

            const response = await axios.post(url, formDataNew, {

                // withCredentials:true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Server response:', response.data);
            // Handle success or redirect as needed
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error
        }
    };

    return (

        <div className='StyledBox'>
            <StyledForm onSubmit={handleSubmit}>


                {/* <div className='StyledBox'>
                <form onSubmit={handleSubmit}> */}
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Middle Name:
                    <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    mobileNumber:
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                    />
                </label>


                {/* Postal Address input fields */}
                <label>
                    House:
                    <input
                        type="text"
                        name="house"
                        value={formData.postalAddressDTO.house}
                        onChange={handlePostalAddressChange}
                    />
                </label>
                <label>
                    Street:
                    <input
                        type="text"
                        name="street"
                        value={formData.postalAddressDTO.street}
                        onChange={handlePostalAddressChange}
                    />
                </label>
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={formData.postalAddressDTO.city}
                        onChange={handlePostalAddressChange}
                    />
                </label>
                <label>
                    State:
                    <input
                        type="text"
                        name="state"
                        value={formData.postalAddressDTO.state}
                        onChange={handlePostalAddressChange}
                    />
                </label>
                <label>
                    Country:
                    <input
                        type="text"
                        name="country"
                        value={formData.postalAddressDTO.country}
                        onChange={handlePostalAddressChange}
                    />
                </label>
                <label>
                    Zip Code:
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.postalAddressDTO.zipCode}
                        onChange={handlePostalAddressChange}
                    />
                </label>


                <label>
                    dateOfBirth:
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                    />
                </label>

                {/* Gender dropdown */}
                <label>
                    Gender:
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                    >
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHER">Other</option>
                    </select>
                </label>

                {/* BloodGroup dropdown */}
                <label>
                    Blood Group:
                    <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleInputChange}
                    >
                        <option value="A_POSITIVE">A Positive</option>
                        <option value="A_NEGATIVE">A Negative</option>
                        <option value="B_POSITIVE">B Positive</option>
                        <option value="B_NEGATIVE">B Negative</option>
                        <option value="AB_POSITIVE">AB Positive</option>
                        <option value="AB_NEGATIVE">AB Negative</option>
                        <option value="O_POSITIVE">O Positive</option>
                        <option value="O_NEGATIVE">O Negative</option>
                    </select>
                </label>

                {/* Qualification dropdown */}
                <label>
                    Qualification:
                    <select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                    >
                        <option value="BELOWSSC">Below SSC</option>
                        <option value="SSC">SSC</option>
                        <option value="HSC">HSC</option>
                        <option value="UG">UG</option>
                        <option value="PG">PG</option>
                    </select>
                </label>

                {/* RtoOffice dropdown */}
                <label>
                    RTO Office:
                    <select
                        name="rtoOffice"
                        value={formData.rtoOffice}
                        onChange={handleInputChange}
                    >
                        <option value="KOLHAPUR">Kolhapur</option>
                        <option value="SANGLI">Sangli</option>
                        <option value="SATARA">Satara</option>
                        <option value="PUNE">Pune</option>
                    </select>
                </label>


                {/* Application Types checkboxes */}
                <label>
                    Apply For:
                </label>
                    
                <label>
                    <input
                        type="checkbox"
                        name="CAR"
                        checked={formData.applicationTypes.includes('CAR')}
                        onChange={handleApplicationTypeChange}
                    />
                    Car
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="MOTORCYCLE"
                        checked={formData.applicationTypes.includes('MOTORCYCLE')}
                        onChange={handleApplicationTypeChange}
                    />
                    Motorcycle
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="COMMERCIAL_VEHICLE"
                        checked={formData.applicationTypes.includes('COMMERCIAL_VEHICLE')}
                        onChange={handleApplicationTypeChange}
                    />
                    COMMERCIAL_VEHICLE
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="THREE_WHEELER"
                        checked={formData.applicationTypes.includes('THREE_WHEELER')}
                        onChange={handleApplicationTypeChange}
                    />
                    THREE_WHEELER
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="HEAVY_VEHICLE"
                        checked={formData.applicationTypes.includes('HEAVY_VEHICLE')}
                        onChange={handleApplicationTypeChange}
                    />
                    HEAVY_VEHICLE
                </label>

                {/* File upload input for the first file */}
                <label>
                    Upload File 1:
                    <input
                        type="file"
                        name="files"
                        multiple
                        onChange={(e) => handleFileInputChange(e, 0)}
                    />
                </label>

                {/* File upload input for the second file */}
                <label>
                    Upload File 2:
                    <input
                        type="file"
                        name="files"
                        multiple
                        onChange={(e) => handleFileInputChange(e, 1)}
                    />
                </label>

                {/* File upload input for the third file */}
                <label>
                    Upload File 3:
                    <input
                        type="file"
                        name="files"
                        multiple
                        onChange={(e) => handleFileInputChange(e, 2)}
                    />
                </label>

                <StyledButton type="primary" htmlType="submit">
                    Submit
                </StyledButton>
            </StyledForm>
        </div>
    );
};

export default LearnerLicenseApplicationForm;




// import React, { useState } from 'react';
// import axios from 'axios';

// import { Form } from 'antd';
// import styled from 'styled-components';
// import './../Pages/SignIn.css'

// const StyledForm = styled(Form)`
//   label {
//     font-weight: bold;
//   }

//   .ant-btn-primary {
//     margin-right: 8px;
//   }

//   .ant-form-item-control-input-content {
//     display: flex;
//     align-items: center;
//   }
// `;

// // const StyledLink = styled(Link)`
// //   margin-left: 8px;
// // `;

// const LearnerLicenseApplicationForm = () => {
//     // const url = "http://127.0.0.1:8080/lernerLicense/application"
//     const url = "http://192.168.0.115:8080/lernerLicense/application"
//     const [formData, setFormData] = useState({
//         firstName: '',
//         middleName: '',
//         lastName: '',
//         mobileNumber: '',
//         userId: 1, // Assuming you have the user ID
//         postalAddressDTO: {
//             house: '',
//             street: '',
//             city: '',
//             state: '',
//             country: '',
//             zipCode: '',
//         },
//         gender: '',
//         bloodGroup: '',
//         dateOfBirth: '',
//         rtoOffice: '',
//         qualification: '',
//         applicationTypes: [],
//         files: [null, null, null], // For storing uploaded files
//     });
//     // const [files, setFiles] = useState({files:[null,null,null],});

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handlePostalAddressChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             postalAddressDTO: {
//                 ...prevData.postalAddressDTO,
//                 [name]: value,
//             },
//         }));
//     };
//     const handleApplicationTypeChange = (e) => {
//         const { name, checked } = e.target;
//         setFormData((prevData) => {
//             if (checked) {
//                 return {
//                     ...prevData,
//                     applicationTypes: [...prevData.applicationTypes, name],
//                 };
//             } else {
//                 return {
//                     ...prevData,
//                     applicationTypes: prevData.applicationTypes.filter((type) => type !== name),
//                 };
//             }
//         });
//     };

//     const handleFileInputChange = (e, fileInputIndex) => {
//         const files = Array.from(e.target.files);
//         setFormData((prevData) => {
//             const updatedFiles = [...prevData.files];
            
//             // Check if the element at fileInputIndex is null
//             if (updatedFiles[fileInputIndex] === null) {
//                 updatedFiles[fileInputIndex] = files;
//             } else {
//                 updatedFiles[fileInputIndex] = [...files];
//             }
            
//             // console.log(formData.files)
//             return {
//                 ...prevData,
//                 files: updatedFiles,
//             };
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formDataNew = new FormData();
//             var { files , ...userDetails} = formData;
//             files = files.flat()
//             formDataNew.append("userDetails",JSON.stringify(userDetails))
//             // console.log(userDetails)
//             // console.log("user details : "+ JSON.stringify(userDetails)); 
        
//             // for(let i=0; i< 3; i++){
//                 formDataNew.append(`file1`, files[0]);
//                 formDataNew.append(`file2`, files[1]);
//                 formDataNew.append(`file3`, files[2]);
//             // }

//             const response = await axios.post(url, formDataNew, {
                
//                 // withCredentials:true,
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });

//             console.log('Server response:', response.data);
//             // Handle success or redirect as needed
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             // Handle error
//         }
//     };

//     return (
//         <div className='StyledBox'>
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         First Name: 
//                         <input
//                             type="text"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleInputChange}
//                         />
//                     </label>

//                     <label>
//                         Middle Name:
//                         <input
//                             type="text"
//                             name="middleName"
//                             value={formData.middleName}
//                             onChange={handleInputChange}
//                         />
//                     </label>

//                     <label>
//                         Last Name:
//                         <input
//                             type="text"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleInputChange}
//                         />
//                     </label>

//                     <label>
//                         mobileNumber:
//                         <input
//                             type="text"
//                             name="mobileNumber"
//                             value={formData.mobileNumber}
//                             onChange={handleInputChange}
//                         />
//                     </label>


//                     {/* Postal Address input fields */}
//                     <label>
//                         House:
//                         <input
//                             type="text"
//                             name="house"
//                             value={formData.postalAddressDTO.house}
//                             onChange={handlePostalAddressChange}
//                         />
//                     </label>
//                     <label>
//                         Street:
//                         <input
//                             type="text"
//                             name="street"
//                             value={formData.postalAddressDTO.street}
//                             onChange={handlePostalAddressChange}
//                         />
//                     </label>
//                     <label>
//                         City:
//                         <input
//                             type="text"
//                             name="city"
//                             value={formData.postalAddressDTO.city}
//                             onChange={handlePostalAddressChange}
//                         />
//                     </label>
//                     <label>
//                         State:
//                         <input
//                             type="text"
//                             name="state"
//                             value={formData.postalAddressDTO.state}
//                             onChange={handlePostalAddressChange}
//                         />
//                     </label>
//                     <label>
//                         Country:
//                         <input
//                             type="text"
//                             name="country"
//                             value={formData.postalAddressDTO.country}
//                             onChange={handlePostalAddressChange}
//                         />
//                     </label>
//                     <label>
//                         Zip Code:
//                         <input
//                             type="text"
//                             name="zipCode"
//                             value={formData.postalAddressDTO.zipCode}
//                             onChange={handlePostalAddressChange}
//                         />
//                     </label>


//                     <label>
//                         dateOfBirth:
//                         <input
//                             type="date"
//                             name="dateOfBirth"
//                             value={formData.dateOfBirth}
//                             onChange={handleInputChange}
//                         />
//                     </label>

//                     {/* Gender dropdown */}
//                     <label>
//                         Gender:
//                         <select
//                             name="gender"
//                             value={formData.gender}
//                             onChange={handleInputChange}
//                         >
//                             <option value="MALE">Male</option>
//                             <option value="FEMALE">Female</option>
//                             <option value="OTHER">Other</option>
//                         </select>
//                     </label>

//                     {/* BloodGroup dropdown */}
//                     <label>
//                         Blood Group:
//                         <select
//                             name="bloodGroup"
//                             value={formData.bloodGroup}
//                             onChange={handleInputChange}
//                         >
//                             <option value="A_POSITIVE">A Positive</option>
//                             <option value="A_NEGATIVE">A Negative</option>
//                             <option value="B_POSITIVE">B Positive</option>
//                             <option value="B_NEGATIVE">B Negative</option>
//                             <option value="AB_POSITIVE">AB Positive</option>
//                             <option value="AB_NEGATIVE">AB Negative</option>
//                             <option value="O_POSITIVE">O Positive</option>
//                             <option value="O_NEGATIVE">O Negative</option>
//                         </select>
//                     </label>

//                     {/* Qualification dropdown */}
//                     <label>
//                         Qualification:
//                         <select
//                             name="qualification"
//                             value={formData.qualification}
//                             onChange={handleInputChange}
//                         >
//                             <option value="BELOWSSC">Below SSC</option>
//                             <option value="SSC">SSC</option>
//                             <option value="HSC">HSC</option>
//                             <option value="UG">UG</option>
//                             <option value="PG">PG</option>
//                         </select>
//                     </label>

//                     {/* RtoOffice dropdown */}
//                     <label>
//                         RTO Office:
//                         <select
//                             name="rtoOffice"
//                             value={formData.rtoOffice}
//                             onChange={handleInputChange}
//                         >
//                             <option value="KOLHAPUR">Kolhapur</option>
//                             <option value="SANGLI">Sangli</option>
//                             <option value="SATARA">Satara</option>
//                             <option value="PUNE">Pune</option>
//                         </select>
//                     </label>


//                     {/* Application Types checkboxes */}
//                     <label>
//                         Apply For:
//                         <input
//                             type="checkbox"
//                             name="CAR"
//                             checked={formData.applicationTypes.includes('CAR')}
//                             onChange={handleApplicationTypeChange}
//                         />
//                         Car
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="MOTORCYCLE"
//                             checked={formData.applicationTypes.includes('MOTORCYCLE')}
//                             onChange={handleApplicationTypeChange}
//                         />
//                         Motorcycle
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="COMMERCIAL_VEHICLE"
//                             checked={formData.applicationTypes.includes('COMMERCIAL_VEHICLE')}
//                             onChange={handleApplicationTypeChange}
//                         />
//                         COMMERCIAL_VEHICLE
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="THREE_WHEELER"
//                             checked={formData.applicationTypes.includes('THREE_WHEELER')}
//                             onChange={handleApplicationTypeChange}
//                         />
//                         THREE_WHEELER
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="HEAVY_VEHICLE"
//                             checked={formData.applicationTypes.includes('HEAVY_VEHICLE')}
//                             onChange={handleApplicationTypeChange}
//                         />
//                         HEAVY_VEHICLE
//                     </label>
                    
//                     {/* File upload input for the first file */}
//                     <label>
//                         Upload File 1:
//                         <input
//                             type="file"
//                             name="files"
//                             multiple
//                             onChange={(e) => handleFileInputChange(e, 0)}
//                         />
//                     </label>

//                     {/* File upload input for the second file */}
//                     <label>
//                         Upload File 2:
//                         <input
//                             type="file"
//                             name="files"
//                             multiple
//                             onChange={(e) => handleFileInputChange(e, 1)}
//                         />
//                     </label>

//                     {/* File upload input for the third file */}
//                     <label>
//                         Upload File 3:
//                         <input
//                             type="file"
//                             name="files"
//                             multiple
//                             onChange={(e) => handleFileInputChange(e, 2)}
//                         />
//                     </label>


//                     <button type="submit">Submit</button>
//                 </form>
//             {/* </StyledForm> */}

//         </div>
//     );
// };

// export default LearnerLicenseApplicationForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// import { Form } from 'antd';
// import styled from 'styled-components';
// import './../Pages/SignIn.css'

// // const StyledBox = styled.div`
// //   max-width: 600px;
// //   margin: 0 auto;
// //   padding: 20px;
// //   background-color: #f5f5f5;
// //   border: 1px solid #d9d9d9;
// //   border-radius: 5px;
// // `;

// const StyledForm = styled(Form)`
//   label {
//     font-weight: bold;
//   }

//   .ant-btn-primary {
//     margin-right: 8px;
//   }

//   .ant-form-item-control-input-content {
//     display: flex;
//     align-items: center;
//   }
// `;

// // const StyledLink = styled(Link)`
// //   margin-left: 8px;
// // `;

// const LearnerLicenseApplicationForm = () => {
//     // const url = "http://127.0.0.1:8080/lernerLicense/application"
//     const url = "http://192.168.0.115:8080/lernerLicense/application"
//     const [formData, setFormData] = useState({
//         firstName: '',
//         middleName: '',
//         lastName: '',
//         mobileNumber: '',
//         userId: 1, // Assuming you have the user ID
//         postalAddressDTO: {
//             house: '',
//             street: '',
//             city: '',
//             state: '',
//             country: '',
//             zipCode: '',
//         },
//         gender: '',
//         bloodGroup: '',
//         dateOfBirth: '',
//         rtoOffice: '',
//         qualification: '',
//         applicationTypes: [],
//         files: [null, null, null], // For storing uploaded files
//     });
//     // const [files, setFiles] = useState({files:[null,null,null],});

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handlePostalAddressChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             postalAddressDTO: {
//                 ...prevData.postalAddressDTO,
//                 [name]: value,
//             },
//         }));
//     };
//     const handleApplicationTypeChange = (e) => {
//         const { name, checked } = e.target;
//         setFormData((prevData) => {
//             if (checked) {
//                 return {
//                     ...prevData,
//                     applicationTypes: [...prevData.applicationTypes, name],
//                 };
//             } else {
//                 return {
//                     ...prevData,
//                     applicationTypes: prevData.applicationTypes.filter((type) => type !== name),
//                 };
//             }
//         });
//     };

//     // const handleFileInputChange = (e, fileInputIndex) => {
//     //     const files = Array.from(e.target.files);
//     //     setFormData((prevData) => {
//     //         const updatedFiles = [...prevData.files];
//     //         updatedFiles[fileInputIndex] = files;

//     //         return {
//     //             ...prevData,
//     //             files: updatedFiles,
//     //         };
//     //     });
//     // };

//     // const handleFileInputChange = (e, fileInputIndex) => {
//     //     const files = Array.from(e.target.files);
//     //     setFormData((prevData) => {
//     //         const updatedFiles = [...prevData.files];

//     //         // Check if the element at fileInputIndex is an array
//     //         if (Array.isArray(updatedFiles[fileInputIndex])) {
//     //             updatedFiles[fileInputIndex] = files;
//     //         } else {
//     //             updatedFiles[fileInputIndex] = [...files];
//     //         }

//     //         return {
//     //             ...prevData,
//     //             files: updatedFiles,
//     //         };
//     //     });
//     // };

//     const handleFileInputChange = (e, fileInputIndex) => {
//         const files = Array.from(e.target.files);
//         setFormData((prevData) => {
//             const updatedFiles = [...prevData.files];
            
//             // Check if the element at fileInputIndex is null
//             if (updatedFiles[fileInputIndex] === null) {
//                 updatedFiles[fileInputIndex] = files;
//             } else {
//                 updatedFiles[fileInputIndex] = [...files];
//             }
            
//             // console.log(formData.files)
//             return {
//                 ...prevData,
//                 files: updatedFiles,
//             };
//         });
//     };


//     //   const handleFileInputChange = (e) => {
//     //     const files = Array.from(e.target.files);
//     //     setFormData((prevData) => ({
//     //       ...prevData,
//     //       files: files,
//     //     }));
//     //   };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();

//     //     const learnerLicenseApplicationDto = new FormData();
//     //     // const files=new files();

//     //     // // Append string fields
//     //     // Object.keys(formData).forEach((key) => {
//     //     //   if (key !== 'files') {
//     //     //     formData.append(key, JSON.stringify(formData[key]));
//     //     //   }
//     //     // });

//     //     // Append string fields
//     //     Object.keys(formData).forEach((key) => {
//     //         if (key !== 'files' && key !== 'postalAddressDTO') {
//     //             formData.append(key, JSON.stringify(formData[key]));
//     //         } else if (key === 'postalAddressDTO') {
//     //             Object.keys(formData.postalAddressDTO).forEach((addressKey) => {
//     //                 formData.append(
//     //                     `postalAddressDTO.${addressKey}`,
//     //                     JSON.stringify(formData.postalAddressDTO[addressKey])
//     //                 );
//     //             });
//     //         }
//     //     });

//     //     // Append files
//     //     // formData.files.forEach((file, index) => {
//     //     //     formData.append(`files[${index}]`, file);
//     //     // });

//     //     // Append files
//     //     // formData.files.forEach((fileGroup, fileInputIndex) => {
//     //     //     fileGroup.forEach((file, index) => {
//     //     //         formData.append(`files[${fileInputIndex}][${index}]`, file);
//     //     //     });
//     //     // });

//     //     formData.files.forEach((fileGroup, fileInputIndex) => {
//     //         if (fileGroup) {  // Check if fileGroup is not null or undefined
//     //             fileGroup.forEach((file, index) => {
//     //                 formData.append(`files[${fileInputIndex}][${index}]`, file);
//     //             });
//     //         }
//     //     });




//     //     try {
//     //         const response = await axios.post(url, formData, {
//     //             headers: {
//     //                 'Content-Type': 'multipart/form-data',
//     //             },
//     //         });

//     //         console.log('Server response:', response.data);
//     //         // Handle success or redirect as needed
//     //     } catch (error) {
//     //         console.error('Error submitting form:', error);
//     //         // Handle error
//     //     }
//     // };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // const learnerLicenseApplicationDto = new FormData();
//         // // Append string fields
//         // Object.keys(formData).forEach((key) => {
//         //     if (key !== 'files' && key !== 'postalAddressDTO') {
//         //         learnerLicenseApplicationDto.append(key, JSON.stringify(formData[key]));
//         //     } else if (key === 'postalAddressDTO') {
//         //         Object.keys(formData.postalAddressDTO).forEach((addressKey) => {
//         //             learnerLicenseApplicationDto.append(
//         //                 `postalAddressDTO.${addressKey}`,
//         //                 JSON.stringify(formData.postalAddressDTO[addressKey])
//         //             );
//         //         });
//         //     }
//         // });

//         // Append files if formData.files is an array

//         // if (Array.isArray(formData.files)) {
//         //     formData.files.forEach((fileGroup, fileInputIndex) => {
//         //         if (Array.isArray(fileGroup)) {
//         //             fileGroup.forEach((file, index) => {
//         //                 learnerLicenseApplicationDto.append(`files[${fileInputIndex}][${index}]`, file);
//         //             });
//         //         }
//         //     });
//         // }

//         try {
//             // const response = await axios({
//             //     url,
//             //     method: "POST",
//             //     body: JSON.stringify({name:"abcd"})
//             // }
//             // )
//             // console.log(response)
//             // const response = await axios.post(url, {
//             //     files:["null","null","null"]
//             // }, {
                
//             //     params: {
//             //         name: "name"
//             //     }
//             // },);
//             const formDataNew = new FormData();
//             // for(let file of formData.files){
//             //     console.log(file)
//             // }
//             // const files = formData.files
//             // delete formData.files;
//             var { files , ...userDetails} = formData;
//             files = files.flat()
//             formDataNew.append("userDetails",JSON.stringify(userDetails))
//             // console.log(userDetails)
//             // console.log("user details : "+ JSON.stringify(userDetails)); 
        
//             // for(let i=0; i< 3; i++){
//                 formDataNew.append(`file1`, files[0]);
//                 formDataNew.append(`file2`, files[1]);
//                 formDataNew.append(`file3`, files[2]);
//             // }

//             // const files = [
//             //     // Assuming you have actual file data, replace these placeholders with actual binary data
//             //     { name: 'file1.txt', data: 'Contents of file 1' },
//             //     { name: 'file2.txt', data: 'Contents of file 2' },
//             //     // Add more files as needed
//             //   ];
              
//             //   files.forEach((file, index) => {
//             //     // const blob = new Blob([file.data], { type: 'text/plain' });
//             //     formDataNew.append(`files[${index + 1}]`, file, file.name);
//             //   });

//             const response = await axios.post(url, formDataNew, {
                
//                 // withCredentials:true,
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });

//             console.log('Server response:', response.data);
//             // Handle success or redirect as needed
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             // Handle error
//         }
//     };


//     // const handleSubmit = async () => {
//     //     // const fileInput1 = document.getElementById('fileInput1');
//     //     // const fileInput2 = document.getElementById('fileInput2');
      
//     //     const formData = new FormData();
//     //     // formData.append('textData', 'Some text data');
//     //     // formData.append('images', ...files[0]);
//     //     // formData.append('images', ...files[0]);
      
//     //     try {
//     //       const response = await fetch('url', {
//     //         method: 'POST',
//     //         headers: {
//     //           'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify(formData),
//     //       });
      
//     //       console.log('Response:', await response.json());
//     //     } catch (error) {
//     //       console.error('Error:', error);
//     //     }
//     //   };
      
//     //   submitForm();


//     return (
//         <div className='StyledBox'>
//             {/* <StyledForm 
//                 name="basic"
//                 labelCol={{
//                     span: 8,
//                 }}
//                 wrapperCol={{
//                     span: 16,
//                 }}
//                 initialValues={{
//                     remember: true,
//                 }}
//                 // onFinish={handleFormSubmit}
//                 // onFinishFailed={handleFailure}
//                 autoComplete="off"
//             > */}
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         First Name: 
//                         <input
//                             type="text"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleInputChange}
//                         />
//                     </label>

//                     <label>
//                         Middle Name:
//                         <input
//                             type="text"
//                             name="middleName"
//                             value={formData.middleName}
//                             onChange={handleInputChange}
//                         />
//                     </label>

//                     <label>
//                         Last Name:
//                         <input
//                             type="text"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleInputChange}
//                         />
//                     </label>

//                     <label>
//                         mobileNumber:
//                         <input
//                             type="text"
//                             name="mobileNumber"
//                             value={formData.mobileNumber}
//                             onChange={handleInputChange}
//                         />
//                     </label>


//                     {/* Postal Address input fields */}
//                     <label>
//                         House:
//                         <input
//                             type="text"
//                             name="house"
//                             value={formData.postalAddressDTO.house}
//                             onChange={handlePostalAddressChange}
//                         />
//                     </label>
//                     <label>
//                         Street:
//                         <input
//                             type="text"
//                             name="street"
//                             value={formData.postalAddressDTO.street}
//                             onChange={handlePostalAddressChange}
//                         />
//                     </label>
//                     <label>
//                         City:
//                         <input
//                             type="text"
//                             name="city"
//                             value={formData.postalAddressDTO.city}
//                             onChange={handlePostalAddressChange}
//                         />
//                     </label>
//                     <label>
//                         State:
//                         <input
//                             type="text"
//                             name="state"
//                             value={formData.postalAddressDTO.state}
//                             onChange={handlePostalAddressChange}
//                         />
//                     </label>
//                     <label>
//                         Country:
//                         <input
//                             type="text"
//                             name="country"
//                             value={formData.postalAddressDTO.country}
//                             onChange={handlePostalAddressChange}
//                         />
//                     </label>
//                     <label>
//                         Zip Code:
//                         <input
//                             type="text"
//                             name="zipCode"
//                             value={formData.postalAddressDTO.zipCode}
//                             onChange={handlePostalAddressChange}
//                         />
//                     </label>


//                     <label>
//                         dateOfBirth:
//                         <input
//                             type="date"
//                             name="dateOfBirth"
//                             value={formData.dateOfBirth}
//                             onChange={handleInputChange}
//                         />
//                     </label>

//                     {/* Gender dropdown */}
//                     <label>
//                         Gender:
//                         <select
//                             name="gender"
//                             value={formData.gender}
//                             onChange={handleInputChange}
//                         >
//                             <option value="MALE">Male</option>
//                             <option value="FEMALE">Female</option>
//                             <option value="OTHER">Other</option>
//                         </select>
//                     </label>

//                     {/* BloodGroup dropdown */}
//                     <label>
//                         Blood Group:
//                         <select
//                             name="bloodGroup"
//                             value={formData.bloodGroup}
//                             onChange={handleInputChange}
//                         >
//                             <option value="A_POSITIVE">A Positive</option>
//                             <option value="A_NEGATIVE">A Negative</option>
//                             <option value="B_POSITIVE">B Positive</option>
//                             <option value="B_NEGATIVE">B Negative</option>
//                             <option value="AB_POSITIVE">AB Positive</option>
//                             <option value="AB_NEGATIVE">AB Negative</option>
//                             <option value="O_POSITIVE">O Positive</option>
//                             <option value="O_NEGATIVE">O Negative</option>
//                         </select>
//                     </label>

//                     {/* Qualification dropdown */}
//                     <label>
//                         Qualification:
//                         <select
//                             name="qualification"
//                             value={formData.qualification}
//                             onChange={handleInputChange}
//                         >
//                             <option value="BELOWSSC">Below SSC</option>
//                             <option value="SSC">SSC</option>
//                             <option value="HSC">HSC</option>
//                             <option value="UG">UG</option>
//                             <option value="PG">PG</option>
//                         </select>
//                     </label>

//                     {/* RtoOffice dropdown */}
//                     <label>
//                         RTO Office:
//                         <select
//                             name="rtoOffice"
//                             value={formData.rtoOffice}
//                             onChange={handleInputChange}
//                         >
//                             <option value="KOLHAPUR">Kolhapur</option>
//                             <option value="SANGLI">Sangli</option>
//                             <option value="SATARA">Satara</option>
//                             <option value="PUNE">Pune</option>
//                         </select>
//                     </label>


//                     {/* Application Types checkboxes */}
//                     <label>
//                         Apply For:
//                         <input
//                             type="checkbox"
//                             name="CAR"
//                             checked={formData.applicationTypes.includes('CAR')}
//                             onChange={handleApplicationTypeChange}
//                         />
//                         Car
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="MOTORCYCLE"
//                             checked={formData.applicationTypes.includes('MOTORCYCLE')}
//                             onChange={handleApplicationTypeChange}
//                         />
//                         Motorcycle
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="COMMERCIAL_VEHICLE"
//                             checked={formData.applicationTypes.includes('COMMERCIAL_VEHICLE')}
//                             onChange={handleApplicationTypeChange}
//                         />
//                         COMMERCIAL_VEHICLE
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="THREE_WHEELER"
//                             checked={formData.applicationTypes.includes('THREE_WHEELER')}
//                             onChange={handleApplicationTypeChange}
//                         />
//                         THREE_WHEELER
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="HEAVY_VEHICLE"
//                             checked={formData.applicationTypes.includes('HEAVY_VEHICLE')}
//                             onChange={handleApplicationTypeChange}
//                         />
//                         HEAVY_VEHICLE
//                     </label>

//                     {/* Add other input fields based on the DTO structure */}
//                     {/* ... */}

//                     {/* <label>
//                         Upload Files:
//                         <input
//                             type="file"
//                             name="files"
//                             multiple
//                             onChange={handleFileInputChange}
//                         />
//                     </label>

//                     <label>
//                         Upload Files:
//                         <input
//                             type="file"
//                             name="files"
//                             multiple
//                             onChange={handleFileInputChange}
//                         />
//                     </label>

//                     <label>
//                         Upload Files:
//                         <input
//                             type="file"
//                             name="files"
//                             multiple
//                             onChange={handleFileInputChange}
//                         />
//                     </label> */}

//                     {/* File upload input for the first file */}
//                     <label>
//                         Upload File 1:
//                         <input
//                             type="file"
//                             name="files"
//                             multiple
//                             onChange={(e) => handleFileInputChange(e, 0)}
//                         />
//                     </label>

//                     {/* File upload input for the second file */}
//                     <label>
//                         Upload File 2:
//                         <input
//                             type="file"
//                             name="files"
//                             multiple
//                             onChange={(e) => handleFileInputChange(e, 1)}
//                         />
//                     </label>

//                     {/* File upload input for the third file */}
//                     <label>
//                         Upload File 3:
//                         <input
//                             type="file"
//                             name="files"
//                             multiple
//                             onChange={(e) => handleFileInputChange(e, 2)}
//                         />
//                     </label>


//                     <button type="submit">Submit</button>
//                 </form>
//             {/* </StyledForm> */}

//         </div>
//     );
// };

// export default LearnerLicenseApplicationForm;


// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const LearnerLicenseApplicationForm = () => {
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     middleName: '',
// //     lastName: '',
// //     mobileNumber: '',
// //     userId: 1, // Assuming you have the user ID
// //     postalAddressDTO: {
// //       house: '',
// //       street: '',
// //       city: '',
// //       state: '',
// //       country: '',
// //       zipCode: '',
// //     },
// //     gender: '',
// //     bloodGroup: '',
// //     dateOfBirth: '',
// //     rtoOffice: '',
// //     qualification: '',
// //     applicationTypes: [],
// //     files: [], // For storing uploaded files
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleFileInputChange = (e) => {
// //     const files = Array.from(e.target.files);
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       files: files,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();

// //     // Append string fields
// //     Object.keys(formData).forEach((key) => {
// //       if (key !== 'files') {
// //         formData.append(key, formData[key]);
// //       }
// //     });

// //     // Append files
// //     formData.files.forEach((file, index) => {
// //       formData.append(`files[${index}]`, file);
// //     });

// //     try {
// //       const response = await axios.post('/application', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       console.log('Server response:', response.data);
// //       // Handle success or redirect as needed
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //       // Handle error
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label>
// //         First Name:
// //         <input
// //           type="text"
// //           name="firstName"
// //           value={formData.firstName}
// //           onChange={handleInputChange}
// //         />
// //       </label>

// //       <label>
// //         Middle Name:
// //         <input
// //           type="text"
// //           name="middleName"
// //           value={formData.middleName}
// //           onChange={handleInputChange}
// //         />
// //       </label>

// //       <label>
// //         Last Name:
// //         <input
// //           type="text"
// //           name="lastName"
// //           value={formData.lastName}
// //           onChange={handleInputChange}
// //         />
// //       </label>

// //       {/* Add other input fields based on the DTO structure */}
// //       {/* ... */}

// //       <label>
// //         Upload Files:
// //         <input
// //           type="file"
// //           name="files"
// //           multiple
// //           onChange={handleFileInputChange}
// //         />
// //       </label>

// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // };

// // export default LearnerLicenseApplicationForm;




// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const LearnerLicenseApplicationForm = () => {
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     middleName: '',
// //     lastName: '',
// //     mobileNumber: '',
// //     userId: 1, // Assuming you have the user ID
// //     postalAddressDTO: {
// //       house: '',
// //       street: '',
// //       city: '',
// //       state: '',
// //       country: '',
// //       zipCode: '',
// //     },
// //     gender: '',
// //     bloodGroup: '',
// //     dateOfBirth: '',
// //     rtoOffice: '',
// //     qualification: '',
// //     applicationTypes: [],
// //     files: [], // For storing uploaded files
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleFileInputChange = (e) => {
// //     const files = Array.from(e.target.files);
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       files: files,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();

// //     // Append string fields
// //     Object.keys(formData).forEach((key) => {
// //       if (key !== 'files') {
// //         formData.append(key, formData[key]);
// //       }
// //     });

// //     // Append files
// //     formData.files.forEach((file, index) => {
// //       formData.append(`files[${index}]`, file);
// //     });

// //     try {
// //       const response = await axios.post('/application', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       console.log('Server response:', response.data);
// //       // Handle success or redirect as needed
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //       // Handle error
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       {/* Render your input fields based on DTO structure */}
// //       <label>
// //         First Name:
// //         <input
// //           type="text"
// //           name="firstName"
// //           value={formData.firstName}
// //           onChange={handleInputChange}
// //         />
// //       </label>
// //       {/* Add other input fields as needed */}

// //       {/* File upload input */}
// //       <label>
// //         Upload Files:
// //         <input
// //           type="file"
// //           name="files"
// //           multiple
// //           onChange={handleFileInputChange}
// //         />
// //       </label>

// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // };

// // export default LearnerLicenseApplicationForm;




// // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const LearnerLicenseApplicationForm = () => {
// // //   const [formData, setformData] = useState('');
// // //   const [files, setFiles] = useState([]);

// // //   const handleInputChange = (e) => {
// // //     setformData(e.target.value);
// // //   };

// // //   const handleFileChange = (e) => {
// // //     setFiles(e.target.files);
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const formData = new FormData();
// // //     formData.append('formData', formData);

// // //     for (let i = 0; i < files.length; i++) {
// // //       formData.append('files', files[i]);
// // //     }

// // //     try {
// // //       const response = await axios.post('http://your-api-endpoint/application', formData, {
// // //         headers: {
// // //           'Content-Type': 'multipart/form-data',
// // //         },
// // //       });

// // //       // Handle the response as needed
// // //       console.log(response.data);

// // //     } catch (error) {
// // //       // Handle errors
// // //       console.error('Error submitting form:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Learner License Application Form</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <div>
// // //           <label htmlFor="formData">Learner License Application DTO:</label>
// // //           <input
// // //             type="text"
// // //             id="formData"
// // //             value={formData}
// // //             onChange={handleInputChange}
// // //           />
// // //         </div>
// // //         <div>
// // //           <label htmlFor="files">Upload Files:</label>
// // //           <input type="file" id="files" multiple onChange={handleFileChange} />
// // //         </div>
// // //         <button type="submit">Submit</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default LearnerLicenseApplicationForm;
