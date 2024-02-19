import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'antd';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .ant-btn-primary {
    margin-right: 8px;
  }

  .ant-form-item-control-input-content {
    display: flex;
    align-items: center;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
`;

const StyledBox = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;

const PermanentLicenseApplicationForm = () => {
  const url = "http://127.0.0.1:8080/learningLicense/application";

  const [formData, setFormData] = useState({
    learningLicenseNumber: '',
    preferredDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url, formData);
      console.log('Server response:', response.data);
      // Handle success or redirect as needed
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  // Calculate the date for 14 days from today
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 13);

  return (
    <StyledBox>
      <StyledForm
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <form onSubmit={handleSubmit}>
          <label>
            Learning License Number:
            <input
              type="text"
              name="learningLicenseNumber"
              value={formData.learningLicenseNumber}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Preferred Date:
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]} // Set minimum date to today
              max={maxDate.toISOString().split('T')[0]} // Set maximum date to 14 days from today
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </StyledForm>
    </StyledBox>
  );
};

export default PermanentLicenseApplicationForm;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form } from 'antd';
// import styled from 'styled-components';

// const StyledForm = styled(Form)`
//   label {
//     font-weight: bold;
//     margin-bottom: 8px;
//     display: block;
//   }

//   input {
//     width: 100%;
//     padding: 8px;
//     margin-bottom: 16px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     box-sizing: border-box;
//   }

//   .ant-btn-primary {
//     margin-right: 8px;
//   }

//   .ant-form-item-control-input-content {
//     display: flex;
//     align-items: center;
//   }

//   button {
//     background-color: #007bff;
//     color: #fff;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 16px;
//   }
// `;

// const StyledBox = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 20px;
//   background-color: #f5f5f5;
//   border: 1px solid #d9d9d9;
//   border-radius: 5px;
// `;

// const PermanentLicenseApplicationForm = () => {
// //   const url = "http://127.0.0.1:8080/learningLicense/application";
//      const url = "http://127.0.0.1:8080/learningLicense/application";
  
//      const [formData, setFormData] = useState({
//     learningLicenseNumber: '',
//     preferredDate: '',
//     // preferredTime: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(url, formData);
//       console.log('Server response:', response.data);
//       // Handle success or redirect as needed
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // Handle error
//     }
//   };

//   return (
//     <StyledBox>
//       <StyledForm
//         name="basic"
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 16,
//         }}
//         initialValues={{
//           remember: true,
//         }}
//         autoComplete="off"
//       >
//         <form onSubmit={handleSubmit}>
//           <label>
//             Learning License Number:
//             <input
//               type="text"
//               name="learningLicenseNumber"
//               value={formData.learningLicenseNumber}
//               onChange={handleInputChange}
//               required
//             />
//           </label>

//           <label>
//             Preferred Date:
//             <input
//               type="date"
//               name="preferredDate"
//               value={formData.preferredDate}
//               onChange={handleInputChange}
//               required
//             />
//           </label>

//           {/* <label>
//             Preferred Time:
//             <input
//               type="time"
//               name="preferredTime"
//               value={formData.preferredTime}
//               onChange={handleInputChange}
//               required
//             />
//           </label> */}

//           <button type="submit">Submit</button>
//         </form>
//       </StyledForm>
//     </StyledBox>
//   );
// };

// export default PermanentLicenseApplicationForm;





// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form } from 'antd';
// import styled from 'styled-components';

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

// const PermanentLicenseApplicationForm = () => {
//   const url = "http://127.0.0.1:8080/learningLicense/application";
  
//   const [formData, setFormData] = useState({
//     learningLicenseNumber: '',
//     preferredDate: '',
//     preferredTime: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(url, formData);
//       console.log('Server response:', response.data);
//       // Handle success or redirect as needed
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // Handle error
//     }
//   };

//   return (
//     <div className='StyledBox'>
//       <StyledForm
//         name="basic"
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 16,
//         }}
//         initialValues={{
//           remember: true,
//         }}
//         autoComplete="off"
//       >
//         <form onSubmit={handleSubmit}>
//           <label>
//             Learning License Number:
//             <input
//               type="text"
//               name="learningLicenseNumber"
//               value={formData.learningLicenseNumber}
//               onChange={handleInputChange}
//               required
//             />
//           </label>

//           <label>
//             Preferred Date:
//             <input
//               type="date"
//               name="preferredDate"
//               value={formData.preferredDate}
//               onChange={handleInputChange}
//               required
//             />
//           </label>

//           <label>
//             Preferred Time:
//             <input
//               type="time"
//               name="preferredTime"
//               value={formData.preferredTime}
//               onChange={handleInputChange}
//               required
//             />
//           </label>

//           <button type="submit">Submit</button>
//         </form>
//       </StyledForm>
//     </div>
//   );
// };

// export default PermanentLicenseApplicationForm;




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

// const PermanentLicenseApplicationForm = () => {
//     const url = "http://127.0.0.1:8080/lernerLicense/application"
//     // const url = "http://192.168.0.115:8080/lernerLicense/application"
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

//             var { files, ...userDetails } = formData;
//             files = files.flat()
//             formDataNew.append("userDetails", JSON.stringify(userDetails))
//             // console.log(userDetails)
//             // console.log("user details : "+ JSON.stringify(userDetails)); 

//             // for(let i=0; i< 3; i++){
//             formDataNew.append(`file1`, files[0]);
//             formDataNew.append(`file2`, files[1]);
//             formDataNew.append(`file3`, files[2]);

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
//             <StyledForm
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
//                 autoComplete="off"
//             >

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

//                     <label>
//                         Upload File 1:
//                         <input
//                             type="file"
//                             name="files"
//                             multiple
//                             onChange={(e) => handleFileInputChange(e, 0)}
//                         />
//                     </label>

//                     <label>
//                         Upload File 2:
//                         <input
//                             type="file"
//                             name="files"
//                             multiple
//                             onChange={(e) => handleFileInputChange(e, 1)}
//                         />
//                     </label>

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
//             </StyledForm>

//         </div>
//     );
// };

// export default PermanentLicenseApplicationForm;
