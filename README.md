# Smart HealthHub 

## Welcome

Welcome to HealthHub, your all-in-one healthcare management platform! HealthHub is designed to simplify healthcare processes, enhance patient-doctor interactions, and improve overall healthcare experiences. Whether you're a patient seeking medical assistance or a healthcare provider managing patient care, HealthHub has you covered.

## Features

### Appointment Management

- **Easy Scheduling**: Patients can schedule appointments with their preferred healthcare providers hassle-free.
- **Flexibility**: Cancel or reschedule appointments as needed, providing convenience for both patients and providers.
- **Real-Time Availability**: View real-time availability of doctors and book appointments accordingly.

### Patient Records Management

- **Secure Health Records**: Securely store and manage electronic health records (EHRs) for easy access and retrieval.
- **Prescription Management**: Doctors can generate prescriptions digitally within the platform, improving efficiency.
- **Document Upload**: Patients can upload relevant documents and images for comprehensive healthcare management.

### Communication Tools

- **Secure Messaging**: Communicate securely with healthcare providers via the platform's messaging feature.
- **Video Consultations**: Conduct video consultations for remote healthcare services, ensuring accessibility for all.
- **Notification System**: Receive timely notifications for appointment reminders, new messages, and updates.

### User Management

- **Secure Authentication**: Robust user authentication mechanisms ensure the privacy and security of patient data.
- **Profile Management**: Users can manage their profiles, update personal information, and upload profile pictures.

## Getting Started

To get started with HealthHub:

1. **Clone the Repository**: Clone the HealthHub repository to your local machine.
2. **Install Dependencies**: Run `npm install` to install all necessary dependencies.
3. **Set Up Environment**: Configure your environment variables using the provided `.env.example` file.
4. **Start the Server**: Run `npm start` to start the server.
5. **Access the Platform**: Access the HealthHub platform through your preferred web browser.

## Technologies Used

- **Node.js**: Backend server environment for handling server-side logic.
- **Express.js**: Web application framework for Node.js, used for routing and middleware.
- **React.js**: Frontend library for building interactive user interfaces.
- **PostgreSQL**: Relational database management system for storing application data.
- **Sequelize**: Promise-based ORM for Node.js, used for database management.
- **JWT**: JSON Web Tokens for secure authentication and authorization.
- **bcrypt**: Library for password hashing to ensure secure storage of user passwords.
- **Cloudinary**: Cloud-based image and video management platform for storing and serving images.
- **Tailwind CSS**: Utility-first CSS framework for styling the user interface.

## Contributing

We welcome contributions from the community! If you'd like to contribute to HealthHub, please follow our [Contribution Guidelines](CONTRIBUTING.md) for more information.

## License

HealthHub is licensed under the [MIT License](LICENSE).


Post Api To Insert Dummy Data into Database 
http://localhost:8081/api/v1/insert/doctor

{
    "firstName": "Alice",
    "lastName": "Sharma",
    "email": "lakshay.ggarg2002+alice@gmail.com",
    "role": "Doctor",
    "password": "123456",
    "phoneNo": "9518077276",
    "dob": "2024-01-31",
    "gender": "Male",
    "bloodGroup": "AB-",
    "userPincode": "13002",
    "userBuilding": "House No. 202",
    "userArea": "Sector 50",
    "userLandmark": "Opposite Atta Market",
    "userTownCity": "Noida",
    "userState": "Uttar Paradesh",
    "education": "MBBS, DDVL",
    "experience": 17,
    "specialization": "Dermatologist",
    "medicalField": "skin, hair and nails",
    "clinicName": "Alice Clinic",
    "clinicPincode": "13002",
    "clinicBuilding": "House No. 202",
    "clinicArea": "Sector 50",
    "clinicLandmark": "Opposite Atta Market",
    "clinicTownCity": "Noida",
    "clinicState": "Uttar Paradesh",
    "fee": 800,
    "openingTime": "01:43",
    "closingTime": "02:00"
}

{
    "firstName": "Isha",
    "lastName": "Patel",
    "email": "lakshay.ggarg2002+isha@gmail.com",
    "role": "Doctor",
    "password": "123456",
    "phoneNo": "9518077276",
    "dob": "2024-01-31",
    "gender": "Male",
    "bloodGroup": "AB-",
    "userPincode": "13002",
    "userBuilding": "House No. 202",
    "userArea": "Sector 50",
    "userLandmark": "Opposite Atta Market",
    "userTownCity": "Noida",
    "userState": "Uttar Paradesh",
    "education": "MBBS, MD (Gastroenterology)",
    "experience": 15,
    "specialization": "Gastroenterology",
    "medicalField": "diseases of the esophagus, stomach, small intestine",
    "clinicName": "Isha Clinic",
    "clinicPincode": "13002",
    "clinicBuilding": "House No. 202",
    "clinicArea": "Sector 50",
    "clinicLandmark": "Opposite Atta Market",
    "clinicTownCity": "Noida",
    "clinicState": "Uttar Paradesh",
    "fee": 800,
    "openingTime": "01:43",
    "closingTime": "02:00"
}
{
    "firstName": "Lokesh",
    "lastName": "Kumar",
    "email": "lakshay.ggarg2002+lokesh@gmail.com",
    "role": "Doctor",
    "password": "123456",
    "phoneNo": "9518077276",
    "dob": "2024-01-31",
    "gender": "Male",
    "bloodGroup": "AB-",
    "userPincode": "13002",
    "userBuilding": "House No. 202",
    "userArea": "Sector 50",
    "userLandmark": "Opposite Atta Market",
    "userTownCity": "Noida",
    "userState": "Uttar Paradesh",
    "education": "MBBS, DM (Nephrology)",
    "experience": 17,
    "specialization": "Nephrologist",
    "medicalField": "Specialize in the care of kidneys",
    "clinicName": "Alice Clinic",
    "clinicPincode": "13002",
    "clinicBuilding": "House No. 202",
    "clinicArea": "Sector 50",
    "clinicLandmark": "Opposite Atta Market",
    "clinicTownCity": "Noida",
    "clinicState": "Uttar Paradesh",
    "fee": 800,
    "openingTime": "01:43",
    "closingTime": "02:00"
}
{
    "firstName": "Kavita",
    "lastName": "Joshi",
    "email": "lakshay.ggarg2002+kavita@gmail.com",
    "role": "Doctor",
    "password": "123456",
    "phoneNo": "9518077276",
    "dob": "2024-01-31",
    "gender": "Male",
    "bloodGroup": "AB-",
    "userPincode": "13002",
    "userBuilding": "House No. 202",
    "userArea": "Sector 50",
    "userLandmark": "Opposite Atta Market",
    "userTownCity": "Noida",
    "userState": "Uttar Paradesh",
    "education": "MBBS, MD (Endocrinology)",
    "experience": 17,
    "specialization": "Endocrinologist",
    "medicalField": "Medicine that studies conditions related to your hormones",
    "clinicName": "Alice Clinic",
    "clinicPincode": "13002",
    "clinicBuilding": "House No. 202",
    "clinicArea": "Sector 50",
    "clinicLandmark": "Opposite Atta Market",
    "clinicTownCity": "Noida",
    "clinicState": "Uttar Paradesh",
    "fee": 800,
    "openingTime": "01:43",
    "closingTime": "02:00"
}

{
    "firstName": "Faisal",
    "lastName": "Khan",
    "email": "lakshay.ggarg2002+faisal@gmail.com",
    "role": "Doctor",
    "password": "123456",
    "phoneNo": "9518077276",
    "dob": "2024-01-31",
    "gender": "Male",
    "bloodGroup": "AB-",
    "userPincode": "13002",
    "userBuilding": "House No. 202",
    "userArea": "Sector 50",
    "userLandmark": "Opposite Atta Market",
    "userTownCity": "Noida",
    "userState": "Uttar Paradesh",
    "education": "MBBS, MS (Orthopedics)",
    "experience": 17,
    "specialization": "Orthopedic Surgeon",
    "medicalField": "Special training in diagnosing and treating injuries",
    "clinicName": "Faisal Clinic",
    "clinicPincode": "13002",
    "clinicBuilding": "House No. 202",
    "clinicArea": "Sector 50",
    "clinicLandmark": "Opposite Atta Market",
    "clinicTownCity": "Noida",
    "clinicState": "Uttar Paradesh",
    "fee": 800,
    "openingTime": "01:43",
    "closingTime": "02:00"
}

{
    "firstName": "Chhavi",
    "lastName": "Aggarwal",
    "email": "lakshay.ggarg2002+chhavi@gmail.com",
    "role": "Doctor",
    "password": "123456",
    "phoneNo": "9518077276",
    "dob": "2024-01-31",
    "gender": "Male",
    "bloodGroup": "AB-",
    "userPincode": "13002",
    "userBuilding": "House No. 202",
    "userArea": "Sector 50",
    "userLandmark": "Opposite Atta Market",
    "userTownCity": "Noida",
    "userState": "Uttar Paradesh",
    "education": "BDS",
    "experience": 17,
    "specialization": "Dentist",
    "medicalField": "Healthcare provider who diagnoses and treats oral health conditions.",
    "clinicName": "Chhavi Clinic",
    "clinicPincode": "13002",
    "clinicBuilding": "House No. 202",
    "clinicArea": "Sector 50",
    "clinicLandmark": "Opposite Atta Market",
    "clinicTownCity": "Noida",
    "clinicState": "Uttar Paradesh",
    "fee": 800,
    "openingTime": "01:43",
    "closingTime": "02:00"
}
ac
