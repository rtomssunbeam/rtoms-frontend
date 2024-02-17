import React, { useState } from 'react';
import axios from 'axios';

const LearnerLicenseApplicationForm = () => {
    const url = "http://127.0.0.1:8080/lernerLicense/application"
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
        // files: [null, null, null], // For storing uploaded files
    });
    const [files, setFiles] = useState({files:[null,null,null],});

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
        setFiles((prevData) => {
            const updatedFiles = [...prevData.files];
            updatedFiles[fileInputIndex] = files;

            return {
                ...prevData,
                files: updatedFiles,
            };
        });
    };


    //   const handleFileInputChange = (e) => {
    //     const files = Array.from(e.target.files);
    //     setFormData((prevData) => ({
    //       ...prevData,
    //       files: files,
    //     }));
    //   };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const learnerLicenseApplicationDto = new FormData();
        const files=new files();

        // // Append string fields
        // Object.keys(formData).forEach((key) => {
        //   if (key !== 'files') {
        //     learnerLicenseApplicationDto.append(key, JSON.stringify(formData[key]));
        //   }
        // });

        // Append string fields
        Object.keys(formData).forEach((key) => {
            if (key !== 'files' && key !== 'postalAddressDTO') {
                learnerLicenseApplicationDto.append(key, JSON.stringify(formData[key]));
            } else if (key === 'postalAddressDTO') {
                Object.keys(formData.postalAddressDTO).forEach((addressKey) => {
                    learnerLicenseApplicationDto.append(
                        `postalAddressDTO.${addressKey}`,
                        JSON.stringify(formData.postalAddressDTO[addressKey])
                    );
                });
            }
        });


        // Append files
        formData.files.forEach((fileGroup, fileInputIndex) => {
            fileGroup.forEach((file, index) => {
                files.append(`files[${fileInputIndex}][${index}]`, file);
            });
        });
        try {
            const response = await axios.post(url, learnerLicenseApplicationDto,files, {
                headers: {
                    'Content-Type': 'multipart/mixed',
                },
            });

            console.log('Server response:', response.data);
            // Handle success or redirect as needed
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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

            {/* Add other input fields based on the DTO structure */}
            {/* ... */}

            {/* <label>
                Upload Files:
                <input
                    type="file"
                    name="files"
                    multiple
                    onChange={handleFileInputChange}
                />
            </label>

            <label>
                Upload Files:
                <input
                    type="file"
                    name="files"
                    multiple
                    onChange={handleFileInputChange}
                />
            </label>

            <label>
                Upload Files:
                <input
                    type="file"
                    name="files"
                    multiple
                    onChange={handleFileInputChange}
                />
            </label> */}

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


            <button type="submit">Submit</button>
        </form>
    );
};

export default LearnerLicenseApplicationForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const LearnerLicenseApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     mobileNumber: '',
//     userId: 1, // Assuming you have the user ID
//     postalAddressDTO: {
//       house: '',
//       street: '',
//       city: '',
//       state: '',
//       country: '',
//       zipCode: '',
//     },
//     gender: '',
//     bloodGroup: '',
//     dateOfBirth: '',
//     rtoOffice: '',
//     qualification: '',
//     applicationTypes: [],
//     files: [], // For storing uploaded files
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileInputChange = (e) => {
//     const files = Array.from(e.target.files);
//     setFormData((prevData) => ({
//       ...prevData,
//       files: files,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const learnerLicenseApplicationDto = new FormData();

//     // Append string fields
//     Object.keys(formData).forEach((key) => {
//       if (key !== 'files') {
//         learnerLicenseApplicationDto.append(key, formData[key]);
//       }
//     });

//     // Append files
//     formData.files.forEach((file, index) => {
//       learnerLicenseApplicationDto.append(`files[${index}]`, file);
//     });

//     try {
//       const response = await axios.post('/application', learnerLicenseApplicationDto, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('Server response:', response.data);
//       // Handle success or redirect as needed
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // Handle error
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleInputChange}
//         />
//       </label>

//       <label>
//         Middle Name:
//         <input
//           type="text"
//           name="middleName"
//           value={formData.middleName}
//           onChange={handleInputChange}
//         />
//       </label>

//       <label>
//         Last Name:
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleInputChange}
//         />
//       </label>

//       {/* Add other input fields based on the DTO structure */}
//       {/* ... */}

//       <label>
//         Upload Files:
//         <input
//           type="file"
//           name="files"
//           multiple
//           onChange={handleFileInputChange}
//         />
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default LearnerLicenseApplicationForm;




// import React, { useState } from 'react';
// import axios from 'axios';

// const LearnerLicenseApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     mobileNumber: '',
//     userId: 1, // Assuming you have the user ID
//     postalAddressDTO: {
//       house: '',
//       street: '',
//       city: '',
//       state: '',
//       country: '',
//       zipCode: '',
//     },
//     gender: '',
//     bloodGroup: '',
//     dateOfBirth: '',
//     rtoOffice: '',
//     qualification: '',
//     applicationTypes: [],
//     files: [], // For storing uploaded files
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileInputChange = (e) => {
//     const files = Array.from(e.target.files);
//     setFormData((prevData) => ({
//       ...prevData,
//       files: files,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const learnerLicenseApplicationDto = new FormData();

//     // Append string fields
//     Object.keys(formData).forEach((key) => {
//       if (key !== 'files') {
//         learnerLicenseApplicationDto.append(key, formData[key]);
//       }
//     });

//     // Append files
//     formData.files.forEach((file, index) => {
//       learnerLicenseApplicationDto.append(`files[${index}]`, file);
//     });

//     try {
//       const response = await axios.post('/application', learnerLicenseApplicationDto, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('Server response:', response.data);
//       // Handle success or redirect as needed
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // Handle error
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Render your input fields based on DTO structure */}
//       <label>
//         First Name:
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleInputChange}
//         />
//       </label>
//       {/* Add other input fields as needed */}

//       {/* File upload input */}
//       <label>
//         Upload Files:
//         <input
//           type="file"
//           name="files"
//           multiple
//           onChange={handleFileInputChange}
//         />
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default LearnerLicenseApplicationForm;




// import React, { useState } from 'react';
// // import axios from 'axios';

// // const LearnerLicenseApplicationForm = () => {
// //   const [learnerLicenseApplicationDto, setLearnerLicenseApplicationDto] = useState('');
// //   const [files, setFiles] = useState([]);

// //   const handleInputChange = (e) => {
// //     setLearnerLicenseApplicationDto(e.target.value);
// //   };

// //   const handleFileChange = (e) => {
// //     setFiles(e.target.files);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append('learnerLicenseApplicationDto', learnerLicenseApplicationDto);

// //     for (let i = 0; i < files.length; i++) {
// //       formData.append('files', files[i]);
// //     }

// //     try {
// //       const response = await axios.post('http://your-api-endpoint/application', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       // Handle the response as needed
// //       console.log(response.data);

// //     } catch (error) {
// //       // Handle errors
// //       console.error('Error submitting form:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Learner License Application Form</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="learnerLicenseApplicationDto">Learner License Application DTO:</label>
// //           <input
// //             type="text"
// //             id="learnerLicenseApplicationDto"
// //             value={learnerLicenseApplicationDto}
// //             onChange={handleInputChange}
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="files">Upload Files:</label>
// //           <input type="file" id="files" multiple onChange={handleFileChange} />
// //         </div>
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LearnerLicenseApplicationForm;
