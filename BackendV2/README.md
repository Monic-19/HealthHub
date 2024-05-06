# API Documentation

## Authentication Routes

### Sign Up
- **URL:** `/api/v1/auth/signup`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:** User details.
- **Response:** User object or error message.

### Login
- **URL:** `/api/v1/auth/login`
- **Method:** `POST`
- **Description:** Authenticate user credentials and generate a token.
- **Request Body:** User credentials.
- **Response:** Authentication token or error message.

### Send OTP
- **URL:** `/api/v1/auth/send-otp`
- **Method:** `POST`
- **Description:** Send a one-time password (OTP) for user verification.
- **Request Body:** User email or phone number.
- **Response:** Success message or error.

### Verify Email
- **URL:** `/api/v1/auth/verify-email`
- **Method:** `GET`
- **Description:** Verify user email address using a verification token.
- **Query Parameters:** Token for email verification.
- **Response:** Success message or error.

### Change Password
- **URL:** `/api/v1/auth/change-password`
- **Method:** `PUT`
- **Description:** Change the password of the user.
- **Request Body:** Email, oldPassword, newPassword, confirmNewPassword.
- **Response:** Success message or error.

### Forgot Password
- **URL:** `/api/v1/auth/forgot-password`
- **Method:** `PUT`
- **Description:** Reset the password if the user has forgotten it.
- **Request Body:** Email, newPassword, confirmNewPassword.
- **Response:** Success message or error.

## Document Routes

### Upload Document
- **URL:** `/api/v1/documents/upload`
- **Method:** `POST`
- **Description:** Upload a document.
- **Request Body:** Document file.
- **Response:** Document URL or error message.

### Get Document History for User
- **URL:** `/api/v1/documents/:userId`
- **Method:** `GET`
- **Description:** Retrieve document history for a user.
- **Path Parameters:** User ID.
- **Response:** List of documents or error message.

### Delete Document by ID
- **URL:** `/api/v1/documents/:documentId`
- **Method:** `DELETE`
- **Description:** Delete a document by its ID.
- **Path Parameters:** Document ID.
- **Response:** Success message or error.

## Address Routes

### Create Address for User
- **URL:** `/api/v1/address/user`
- **Method:** `POST`
- **Description:** Create an address for a user.
- **Request Body:** Address details.
- **Response:** Address object or error message.

### Create Address for Clinic
- **URL:** `/api/v1/address/clinic`
- **Method:** `POST`
- **Description:** Create an address for a clinic.
- **Request Body:** Address details.
- **Response:** Address object or error message.

### Delete Address by ID
- **URL:** `/api/v1/address/:addressId`
- **Method:** `DELETE`
- **Description:** Delete an address by its ID.
- **Path Parameters:** Address ID.
- **Response:** Success message or error.

### Get Address List
- **URL:** `/api/v1/address/list`
- **Method:** `GET`
- **Description:** Retrieve a list of addresses.
- **Response:** List of addresses or error message.

## Doctor Routes

### Create Doctor
- **URL:** `/api/v1/doctor/create`
- **Method:** `POST`
- **Description:** Register a new doctor.
- **Request Body:** Doctor details.
- **Response:** Doctor object or error message.

### Get Doctors Information
- **URL:** `/api/v1/doctor/info`
- **Method:** `GET`
- **Description:** Retrieve information about all doctors.
- **Response:** List of doctors or error message.

## Information Routes (Personal Information)

### Save Doctor Information
- **URL:** `/api/v1/personal-info/doctor`
- **Method:** `POST`
- **Description:** Save personal information for a doctor.
- **Request Body:** Doctor information.
- **Response:** Doctor object or error message.

### Get Doctor Information
- **URL:** `/api/v1/personal-info/doctor/:userId`
- **Method:** `GET`
- **Description:** Get personal information for a specific doctor.
- **Response:** Doctor object or error message.

### Save Patient Information
- **URL:** `/api/v1/personal-info/patient`
- **Method:** `POST`
- **Description:** Save personal information for a patient.
- **Request Body:** Patient information.
- **Response:** Patient object or error message.

### Get Patient Information
- **URL:** `/api/v1/personal-info/patient/:userId`
- **Method:** `GET`
- **Description:** Get personal information for a specific patient.
- **Response:** Patient object or error message.

### Save Clinic Information
- **URL:** `/api/v1/personal-info/clinic`
- **Method:** `POST`
- **Description:** Save information for a clinic.
- **Request Body:** Clinic information.
- **Response:** Clinic object or error message.

### Get Clinic Information
- **URL:** `/api/v1/personal-info/clinic/:userId`
- **Method:** `GET`
- **Description:** Get information for a specific clinic.
- **Response:** Clinic object or error message.

### Save Profile Picture
- **URL:** `/api/v1/personal-info/profile-pic/:userId`
- **Method:** `POST`
- **Description:** Save profile picture for a user.
- **Request Body:** Form-data with image file.
- **Response:** Success message or error.

## Insertion Route

### Insert Doctor Full Information
- **URL:** `/api/v1/insert/doctor`
- **Method:** `POST`
- **Description:** Insert full information for a doctor.
- **Request Body:** Doctor information.
- **Response:** Doctor object or error message.

## Appointment Routes

### Create Appointment
- **URL:** `/api/v1/appointment/create`
- **Method:** `POST`
- **Description:** Create a new appointment.
- **Request Body:** Appointment details.
- **Response:** Appointment object or error message.

### Cancel Appointment
- **URL:** `/api/v1/appointment/cancel/:appointmentId`
- **Method:** `DELETE`
- **Description:** Cancel an appointment by its ID.
- **Path Parameters:** Appointment ID.
- **Response:** Success message or error.

### Get Appointment
- **URL:** `/api/v1/appointment/:userId/:isDoctor`
- **Method:** `GET`
- **Description:** Get appointments for a user (patient or doctor).
- **Path Parameters:** User ID, isDoctor (boolean).
- **Response:** List of appointments or error message.

## Review Routes

### Create Review
- **URL:** `/api/v1/review/create`
- **Method:** `POST`
- **Description:** Create a new review.
- **Request Body:** Review details.
- **Response:** Review object or error message.

### Delete Review
- **URL:** `/api/v1/review/:reviewId`
- **Method:** `DELETE`
- **Description:** Delete a review by its ID.
- **Path Parameters:** Review ID.
- **Response:** Success message or error.

### Get Reviews by Patient ID
- **URL:** `/api/v1/review/:patientId`
- **Method:** `GET`
- **Description:** Get reviews for a patient.
- **Path Parameters:** Patient ID.
- **Response:** List of reviews or error message.

### Get Reviews by Doctor ID
- **URL:** `/api/v1/review/:doctorId`
- **Method:** `GET`
- **Description:** Get reviews for a doctor.
- **Path Parameters:** Doctor ID.
- **Response


## Patient Report Routes

### Get Reports by Doctor ID
- **URL:** `/api/v1/report/doctor/:doctorId`
- **Method:** `GET`
- **Description:** Get patient reports associated with a specific doctor.
- **Path Parameters:** Doctor ID.
- **Response:** List of patient reports or error message.

### Get Reports by Patient ID
- **URL:** `/api/v1/report/patient/:patientId`
- **Method:** `GET`
- **Description:** Get patient reports associated with a specific patient.
- **Path Parameters:** Patient ID.
- **Response:** List of patient reports or error message.

### Create Patient Report
- **URL:** `/api/v1/report`
- **Method:** `POST`
- **Description:** Create a new patient report.
- **Request Body:** Patient report details.
- **Request File:** Prescription photo.
- **Response:** Patient report object or error message.

### Update Patient Report
- **URL:** `/api/v1/report/:id`
- **Method:** `PUT`
- **Description:** Update an existing patient report by its ID.
- **Path Parameters:** Report ID.
- **Request Body:** Updated patient report details.
- **Response:** Updated patient report object or error message.

### Delete Patient Report
- **URL:** `/api/v1/report/:id`
- **Method:** `DELETE`
- **Description:** Delete a patient report by its ID.
- **Path Parameters:** Report ID.
- **Response:** Success message or error.
