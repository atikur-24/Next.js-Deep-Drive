# EduFlow 🎓

> **Explore • Learn • Build • Share**
>
> A comprehensive LMS (Learning Management System) built with modern web technologies.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Database Schema](#database-schema)
- [API Routes](#api-routes)
- [Authentication](#authentication)
- [Payment Integration](#payment-integration)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**EduFlow** is a full-featured Learning Management System designed to enable educators and learners to create, share, and engage with educational content. Built with cutting-edge technologies, EduFlow provides a seamless experience for course creation, student enrollment, quiz management, live sessions, and performance tracking.

---

## ✨ Features

### 👨‍🎓 For Learners

- 📚 Browse and enroll in courses
- 📹 Watch video lessons with progress tracking
- 📝 Complete quizzes and assessments
- 🎁 Earn certificates upon completion
- 💬 Track learning progress and analytics
- 🔔 Get course recommendations

### 👨‍🏫 For Instructors

- ✏️ Create and manage courses with rich content
- 📺 Upload and organize video lessons
- 📊 Create interactive quizzes and assessments
- 🎥 Host live learning sessions
- 📈 View detailed student analytics and reports
- 💳 Manage course pricing and payments

### 🔐 Security & Authentication

- Secure JWT-based authentication
- OAuth integration support
- Password encryption with bcryptjs
- Role-based access control (Student/Instructor)

### 💳 Payment Processing

- Stripe integration for course payments
- Secure subscription management
- Automated invoice generation
- Payment status tracking

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 14](https://nextjs.org/) - React meta-framework for production
- **UI Library**: [React 18](https://react.dev/) - JavaScript library for building UIs
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Component Library**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Performant form library
- **Rich Text Editor**: [React Quill](https://github.com/zenoamaro/react-quill) - Powerful WYSIWYG editor
- **Video Player**: [React Player](https://github.com/cookpete/react-player) - Universal video player
- **Drag & Drop**: [hello-pangea/dnd](https://github.com/hello-pangea/dnd) - Beautiful drag and drop
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library

### Backend

- **Runtime**: Node.js with Next.js API Routes
- **Database**: [MongoDB](https://www.mongodb.com/) - NoSQL database
- **ODM**: [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- **Password Hashing**: [bcryptjs](https://github.com/dcodeIO/bcrypt.js) - Secure password hashing

### External Services

- **Payment Processing**: [Stripe](https://stripe.com/) - Payment infrastructure
- **Email Service**: [Resend](https://resend.com/) - Email API for developers
- **Cloud Storage**: [Upload API](./app/api/upload) - File upload handling

### Development Tools

- **Package Manager**: npm/yarn
- **Linting**: ESLint
- **Build Tool**: Next.js built-in bundler

---

## 📁 Project Structure

```
EduFlow/
├── app/                          # Next.js app directory
│   ├── (main)/                   # Main public routes
│   │   ├── courses/              # Course listing and details
│   │   ├── account/              # User account management
│   │   └── enroll-success/       # Post-enrollment success page
│   ├── dashboard/                # Instructor/Admin dashboard
│   │   ├── courses/              # Course management
│   │   ├── lives/                # Live session management
│   │   └── quiz-sets/            # Quiz management
│   ├── login/                    # Login page
│   ├── register/                 # Registration page
│   ├── actions/                  # Server actions (course, lesson, quiz, etc.)
│   └── api/                      # API routes
│       ├── auth/                 # Authentication routes
│       ├── upload/               # File upload endpoint
│       ├── certificate/          # Certificate generation
│       ├── lesson-watch/         # Lesson tracking
│       └── me/                   # User profile endpoint
├── components/                   # React components
│   ├── ui/                       # Reusable UI components (Radix-based)
│   ├── course-progress.jsx       # Course progress component
│   ├── video-player.jsx          # Video player wrapper
│   ├── editor.jsx                # Rich text editor component
│   └── [other shared components]
├── database/                     # Database configuration
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
│   ├── stripe.js                 # Stripe helper functions
│   ├── emails.js                 # Email templates and functions
│   ├── formatPrice.js            # Price formatting utilities
│   └── [other utilities]
├── model/                        # Mongoose models
│   ├── user-model.js             # User schema
│   ├── course-model.js           # Course schema
│   ├── lesson-model.js           # Lesson schema
│   ├── module-model.js           # Module schema
│   ├── quizzes-model.js          # Quiz schema
│   ├── enrollment-model.js       # Enrollment schema
│   ├── assessment-model.js       # Assessment schema
│   └── [other models]
├── queries/                      # Database queries
│   ├── courses.js                # Course queries
│   ├── lessons.js                # Lesson queries
│   ├── quizzes.js                # Quiz queries
│   └── [other query files]
├── service/                      # External services
│   └── mongo.js                  # MongoDB connection
├── public/                       # Static assets
│   └── assets/                   # Images and media
├── auth.config.js                # NextAuth configuration
├── middleware.js                 # Next.js middleware
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
├── jsconfig.json                 # JavaScript config
├── next.config.mjs               # Next.js configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18 or higher
- **npm** or **yarn**: Package manager
- **MongoDB**: Local or cloud instance (MongoDB Atlas recommended)
- **Stripe Account**: For payment processing
- **Resend Account**: For email service
- **Git**: Version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/atikur-24/Next.js-Deep-Drive
   cd EduFlow
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (see [Environment Setup](#environment-setup) below)

4. **Connect to MongoDB**
   ```bash
   # Ensure MongoDB is running locally or provide cloud connection string
   ```

---

## 🔧 Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/eduflow
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/eduflow

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key_here

# OAuth Providers (Optional)
# GITHUB_ID=your_github_id
# GITHUB_SECRET=your_github_secret
# GOOGLE_ID=your_google_id
# GOOGLE_SECRET=your_google_secret

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend Email Service
RESEND_API_KEY=re_...

# Upload Service
NEXT_PUBLIC_UPLOAD_URL=your_upload_service_url

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Generate NextAuth Secret

```bash
openssl rand -base64 32
```

---

## ▶️ Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
# or
yarn build
yarn start
```

### Linting

```bash
npm run lint
# or
yarn lint
```

---

## 🗄️ Database Schema

### Key Models

#### User Model

- Email, password, name
- Role (Student/Instructor)
- Profile information
- Enrollment records
- Teaching courses

#### Course Model

- Title, description, category
- Instructor reference
- Modules and lessons
- Pricing and enrollment limits
- Course cover image
- Status (Draft/Published)

#### Lesson Model

- Title, description
- Video URL and duration
- Associated module
- Viewing duration
- Attachments

#### Module Model

- Title, description
- Associated course
- Lessons order
- Display order

#### Quiz Model

- Title, description
- Questions and answers
- Passing score
- Time limit
- Associated course

#### Enrollment Model

- Student and course reference
- Enrollment date
- Progress tracking
- Completion status
- Certificate issuance

#### Assessment Model

- Quiz attempts
- Scores and performance
- Timestamp
- Detailed results

---

## 🔌 API Routes

### Authentication

- `POST /api/auth/[...nextauth]` - NextAuth endpoints
- `POST /api/register` - User registration
- `GET /api/me` - Current user profile

### Courses

- `GET /api/courses` - List all courses
- `POST /api/courses` - Create new course
- `GET /api/courses/[id]` - Get course details
- `PUT /api/courses/[id]` - Update course
- `DELETE /api/courses/[id]` - Delete course

### Lessons

- `GET /api/lessons/[id]` - Get lesson details
- `POST /api/lesson-watch` - Track lesson viewing

### Uploads

- `POST /api/upload` - Upload files (images, videos, documents)

### Certificates

- `POST /api/certificate` - Generate certificate

---

## 🔐 Authentication

EduFlow uses **NextAuth.js** with JWT strategy for secure authentication.

### Features

- Secure JWT token-based sessions
- OAuth provider support (GitHub, Google, etc.)
- Role-based access control
- Protected API routes via middleware
- Automatic token refresh

### Login Flow

1. User submits credentials
2. Password verified against bcrypt hash
3. JWT token issued
4. Token stored in secure cookie
5. Authenticated requests include token

---

## 💳 Payment Integration

### Stripe Integration

- Secure payment processing
- Webhook handling for payment events
- Invoice generation
- Payment status tracking
- Subscription management

### Payment Flow

1. User selects course and clicks "Enroll"
2. Stripe Checkout session created
3. User completes payment
4. Webhook confirms payment
5. Enrollment record created
6. Certificate generation enabled

---

## 📚 Key Features Explained

### Course Management

- Instructors can create, edit, and publish courses
- Organize content into modules and lessons
- Support for video, text, and rich media content
- Set pricing and enrollment limits

### Student Learning Path

- Browse course catalog with filters
- Enroll in courses (free or paid)
- Track progress through lessons
- Complete quizzes and assessments
- Earn certificates upon completion

### Live Sessions

- Schedule live classes
- Join live sessions
- Interactive Q&A and discussion
- Recording and playback support

### Analytics & Reporting

- Student progress tracking
- Quiz performance metrics
- Enrollment and revenue reports
- Detailed learning analytics

---

## 🐛 Common Issues & Troubleshooting

### MongoDB Connection Failed

- Ensure MongoDB is running locally or cloud connection string is correct
- Check `MONGODB_URI` in `.env.local`
- Verify network access if using MongoDB Atlas

### Stripe Payment Not Working

- Verify Stripe keys are correct
- Check webhook endpoint configuration
- Ensure Stripe account is in test/live mode

### Email Not Sending

- Verify Resend API key is correct
- Check email templates in `lib/emails.js`
- Ensure domain is verified in Resend dashboard

### Authentication Issues

- Clear browser cookies and local storage
- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches deployment URL

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Code Style

- Use ESLint configuration provided
- Follow React best practices
- Use functional components and hooks
- Keep components modular and reusable

---

**Happy Learning! 🚀**
