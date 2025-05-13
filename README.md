Conversation opened. 1 unread message.

Skip to content
Using Gmail with screen readers
1 of 18,292
(no subject)
Inbox

Bitu Sahu
2:36 PM (0 minutes ago)
to me

Here’s a complete high-level system design based on your document, using React (frontend), Node.js + Express (backend), and MongoDB (database):

1. Tech Stack
Frontend: React.js (with Redux or Context API)

Backend: Node.js + Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT (access + refresh tokens)

Deployment: Docker + Nginx + CI/CD (GitHub Actions), hosted on AWS/GCP

2. Database Design (MongoDB)


Users Collection
{
  "_id": ObjectId,
  "name": String,
  "email": String,
  "password": String,
  "role": "patient" | "provider" | "admin",
  "profile": {
    "dob": Date,
    "gender": String,
    "allergies": [String],
    "medicalHistory": String
  },
  "createdAt": Date,
  "updatedAt": Date
}
Vaccines Collection
{
  "_id": ObjectId,
  "name": String,
  "disease": String,
  "requiredDoses": Number,
  "scheduleDays": Number[]
}
Appointments Collection
{
  "_id": ObjectId,
  "userId": ObjectId,
  "vaccineId": ObjectId,
  "status": "pending" | "completed" | "missed",
  "date": Date,
  "providerId": ObjectId,
  "alertsSent": Boolean
}
Messages Collection
{
  "_id": ObjectId,
  "fromUserId": ObjectId,
  "toProviderId": ObjectId,
  "message": String,
  "timestamp": Date,
  "read": Boolean
}
Audit Logs / Data Consent Collection
{
  "_id": ObjectId,
  "userId": ObjectId,
  "action": String,
  "timestamp": Date
}
3. Backend API Structure (Node.js + Express)


Auth
POST /auth/register – user registration

POST /auth/login – user login

POST /auth/logout

GET /auth/profile



Vaccines
GET /vaccines – list all vaccines

POST /vaccines – create new (admin only)

PUT /vaccines/:id – edit vaccine

DELETE /vaccines/:id



Appointments
GET /appointments/user/:id – view user’s vaccine schedule

POST /appointments – create appointment

PATCH /appointments/:id – update status (e.g., verified, completed)



Messaging
POST /messages – patient to provider

GET /messages/:providerId



Admin/Provider
GET /provider/patients – list assigned patients

POST /provider/verify-vaccine – verify vaccine records

4. Frontend Modules (React)


Auth Pages
Login, Register (with consent checkbox)

JWT token stored in localStorage



Patient Dashboard
Upcoming & completed vaccines

Visual immunization timeline

Appointment booking & alerts



Profile Page
Editable fields: allergies, medical history, etc.



Provider Dashboard
Assigned patients

Verify appointments

View history + schedule new



Messaging
Patient–provider chat module (basic)

5. Security and Privacy
JWT with short-lived access tokens and refresh tokens

HTTPS only endpoints

Role-based access (middleware)

Audit logging on sensitive operations

Consent checkbox stored in DB

6. Bonus Enhancements
Email/Push Reminders using cron jobs

Analytics dashboard (admin-only) for missed doses

Multi-language support (i18n)

Would you like:

Folder structure for backend and frontend?

Initial source code (auth or dashboard)?

Docker + deployment setup?



Let me know how you’d like to proceed step-by-step.

