# 🚀 Social Media Feed Application - Demo Guide

## 📋 Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [Test Accounts](#test-accounts)
- [Getting Started](#getting-started)
- [Testing Guide](#testing-guide)
- [Technical Details](#technical-details)
- [Customization](#customization)

## 🌟 Overview

A complete social media feed application built with React, featuring authentication, post creation, infinite scroll, and modern UI design. This demo showcases React best practices, custom hooks, component architecture, and responsive design principles.

### 📹 Demo Videos
- **Code Walkthrough**: [View Code Demo](https://drive.google.com/file/d/1jdx_Qo0_ZWqDYVLPZvakyL4hAs_81Kyu/view?usp=sharing)
- **UI Demonstration**: [View UI Demo](https://drive.google.com/file/d/1hYBDb7va3WYOID87woOvx4k247rqjbcG/view?usp=sharing)

---

## ✨ Key Features

### 🔐 Authentication System
- **Mock Authentication** with pre-configured test accounts
- **Route Protection** - authenticated users redirected from auth pages
- **Session Persistence** across browser refreshes
- **Professional Loading States** during authentication operations

### 📱 Social Media Feed
- **CreatePost Component** with rich text editor and formatting tools
- **Post Component** displaying individual posts with interactive actions
- **Infinite Scroll** for progressive post loading
- **Smart Pagination** with 5 posts per page and smooth loading
- **Real-time Updates** - new posts appear immediately in feed

### 🎨 UI/UX Excellence
- **Modern Design** using Tailwind CSS with clean, professional interface
- **Fully Responsive** layout for all device sizes
- **Interactive Elements** with hover effects and smooth transitions
- **Seamless Authentication Popup** with modal switching

---

## 🔑 Pre-configured Test Accounts

### Account 1
| Field | Value |
|-------|-------|
| **Email** | `demo@example.com` |
| **Username** | `demo-user` |
| **Password** | `password123` |

### Account 2
| Field | Value |
|-------|-------|
| **Email** | `test@example.com` |
| **Username** | `test-user` |
| **Password** | `test123` |

> **💡 Pro Tip**: You can sign in using either email address or username!

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Setup
```bash
# Clone the repository
git clone <repository-url>
cd my-feed

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🧪 Testing Guide

### 1️⃣ Guest User Experience
| Feature | Description |
|---------|-------------|
| **Home Page** | View posts feed in read-only mode |
| **CreatePost** | Shows welcome message, post creation disabled |
| **Authentication** | Click any CTA → "Sign In Required" popup appears |
| **Navigation** | Access all pages (`/`, `/signin`, `/signup`) |

### 2️⃣ Authentication Testing
| Test Case | Expected Behavior |
|-----------|------------------|
| **Sign In** | Use any test account from above |
| **Sign Up** | Create new account (email OR username required) |
| **Route Protection** | Authenticated users redirected from auth pages |
| **Session Persistence** | Login state maintained on page refresh |

### 3️⃣ Authenticated User Features
| Feature | Capabilities |
|---------|-------------|
| **CreatePost** | Full-featured rich text editor |
| **Text Formatting** | Bold, Italic, Underline (mutually exclusive) |
| **Toolbar** | List formatting, quotes, code blocks |
| **Actions** | Add media, microphone, camera, send post |
| **Real-time Updates** | New posts appear at top of feed immediately |

### 4️⃣ Social Feed Testing
| Feature | Description |
|---------|-------------|
| **Post Display** | Header (user, timestamp), content, footer (actions) |
| **Post Actions** | Like, Comment, Share buttons |
| **Infinite Scroll** | Automatic loading as user scrolls to bottom |
| **Pagination** | 5 posts per page with 2-second loading delay |
| **Content Scrolling** | Long posts become scrollable after 163px height |

### 5️⃣ Authentication Popup Testing
| Feature | Behavior |
|---------|----------|
| **Sign In Mode** | Default view with "Sign up" link at bottom |
| **Sign Up Mode** | Click "Sign up" → switches to signup form |
| **Mode Switching** | Seamless transition between signin/signup |
| **Outside Click** | Click overlay to close popup |

---

## 🏗️ Technical Implementation

### Custom Hooks Architecture
| Hook | Purpose | Implementation |
|------|---------|----------------|
| **`useInfiniteScroll`** | Scroll detection | Intersection Observer API |
| **`usePaginated`** | Data pagination | Local data with infinite scroll |
| **`useAuthState`** | Auth management | Authentication state persistence |

### Component Architecture
| Component | Features |
|-----------|----------|
| **Configuration-Driven** | Button arrays defined in constants files |
| **Reusable Design** | Post, Popup, CreatePost components |
| **TypeScript Support** | Full type safety with interfaces |
| **State Management** | Local state using React hooks |

### Form Validation Rules
| Field | Requirements |
|-------|--------------|
| **Username** | Minimum 3 characters |
| **Password** | Minimum 6 characters |
| **Email** | Valid email format (if using email) |
| **Password Confirmation** | Must match password exactly |
| **All Fields** | Required |

---

## 🎨 UI Components & Styling

### CreatePost Component
| Style Property | Value |
|----------------|-------|
| **Container Border** | `1px solid #00000021` |
| **Box Shadow** | `0px 4px 4px 0px #0000000D` |
| **Toolbar Buttons** | `0px 1px 7px 0px #00000017` |
| **Text Formatting** | Bold, Italic, Underline (mutually exclusive) |
| **Configuration** | All buttons defined in constants file |

### Post Component
| Feature | Description |
|---------|-------------|
| **Header** | User avatar, name, timestamp |
| **Content** | Scrollable text area with emoji support |
| **Footer** | Action buttons (Like, Comment, Share) |
| **Box Shadow** | `0px 4px 9px 0px #0000000D` |
| **Border** | `1px solid #0000001A` |

### Popup Component
| Feature | Description |
|---------|-------------|
| **Overlay** | Semi-transparent background |
| **Modal** | Centered content with close button |

---

## ⚙️ Configuration & Customization

### Constants Files
| File | Purpose | Customization |
|------|---------|---------------|
| **`src/components/CreatePost/constants.ts`** | Toolbar and action buttons | Easy button addition/removal |
| **`src/components/Post/constants.ts`** | Post action buttons | Configurable post actions |

### Styling System
| Feature | Implementation |
|---------|----------------|
| **CSS Framework** | Tailwind CSS utility-first approach |
| **Custom Colors** | Arbitrary value syntax for specific colors |
| **Shadow System** | Custom box-shadow values for depth |
| **Border System** | Configurable border styles and colors |

### Mock Data Customization
You can modify the mock users in `src/contexts/AuthContext.tsx` to add your own test accounts.

---

## 🎯 Best Practices Demonstrated

- **Component Reusability** - Modular, configurable components
- **Custom Hooks** - Logic separation and reusability
- **TypeScript Integration** - Full type safety and IntelliSense
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimization** - Infinite scroll and pagination
- **User Experience** - Loading states, smooth transitions, intuitive navigation

---

## 🚀 Deployment

### Build Command
```bash
npm run build
```

### Production Files
The build process generates optimized files in the `dist/` directory ready for deployment.

---

## 🎉 Conclusion

This social media feed application demonstrates modern React development practices, showcasing:

- **Professional UI/UX design**
- **Scalable component architecture**
- **Efficient state management**
- **Responsive and accessible design**
- **Performance optimization techniques**

**Happy coding! 🚀**

---

*For questions or contributions, please refer to the project documentation or create an issue in the repository.*
