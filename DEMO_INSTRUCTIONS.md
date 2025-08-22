# 🚀 Social Media Feed Demo Instructions

## **Overview**
This is a complete social media feed application with authentication, post creation, infinite scroll, and a modern UI. The app demonstrates React best practices, custom hooks, component reusability, and responsive design.

## **🎯 Key Features**

### **Authentication System**
- ✅ **Mock Authentication**: Pre-configured test accounts
- ✅ **Route Protection**: Authenticated users redirected from auth pages
- ✅ **Session Persistence**: Login state maintained across refreshes
- ✅ **Loading States**: Professional UX during auth operations

### **Social Media Feed**
- ✅ **CreatePost Component**: Rich text editor with formatting tools
- ✅ **Post Component**: Individual post display with actions
- ✅ **Infinite Scroll**: Load posts progressively as user scrolls
- ✅ **Pagination**: 5 posts per page with smooth loading
- ✅ **Dynamic Updates**: New posts appear immediately in feed

### **UI/UX Features**
- ✅ **Modern Design**: Clean, professional interface with Tailwind CSS
- ✅ **Responsive Layout**: Works on all device sizes
- ✅ **Interactive Elements**: Hover effects, transitions, loading states
- ✅ **Authentication Popup**: Seamless sign-in/sign-up modal switching

## **🔐 Pre-configured Test Accounts**

#### **Account 1:**
- **Email:** `demo@example.com`
- **Username:** `demo-user`
- **Password:** `password123`

#### **Account 2:**
- **Email:** `test@example.com`
- **Username:** `test-user`
- **Password:** `test123`

**Note:** You can sign in using either email address or username!

## **🚀 How to Test the Application**

### **1. Start the Application**
```bash
npm run dev
```

### **2. Test as Guest User**
- **Home Page**: View posts feed (read-only)
- **CreatePost**: Shows welcome message, can't submit posts
- **Authentication**: Click any CTA → "Sign In Required" popup appears
- **Navigation**: Access all pages (`/`, `/signin`, `/signup`)

### **3. Test Authentication**
- **Sign In**: Use any test account above
- **Sign Up**: Create new account (email OR username required)
- **Route Protection**: Authenticated users can't access auth pages
- **Session Persistence**: Login state maintained on refresh

### **4. Test as Authenticated User**
- **CreatePost**: Rich text editor with full functionality
- **Text Formatting**: Bold, Italic, Underline (mutually exclusive)
- **Toolbar**: List formatting, quotes, code blocks
- **Actions**: Add media, microphone, camera, send post
- **Post Creation**: New posts appear at top of feed immediately

### **5. Test Social Feed Features**
- **Post Display**: Header (user, timestamp), content, footer (actions)
- **Post Actions**: Like, Comment, Share buttons
- **Infinite Scroll**: Scroll to bottom → more posts load automatically
- **Pagination**: 5 posts per page with 2-second loading delay
- **Content Scrolling**: Long posts become scrollable after 163px height

### **6. Test Authentication Popup**
- **Sign In Mode**: Default view with "Sign up" link at bottom
- **Sign Up Mode**: Click "Sign up" → switches to signup form
- **Mode Switching**: Seamless transition between signin/signup
- **Outside Click**: Click overlay to close popup


## **🎨 UI Components & Styling**

### **CreatePost Component**
- **Container**: `border: 1px solid #00000021`, `box-shadow: 0px 4px 4px 0px #0000000D`
- **Toolbar Buttons**: `box-shadow: 0px 1px 7px 0px #00000017`
- **Formatting**: Bold, Italic, Underline (mutually exclusive)
- **Configuration-Driven**: All buttons defined in constants file
- **Responsive**: Adapts to different screen sizes

### **Post Component**
- **Header**: User avatar, name, timestamp
- **Content**: Scrollable text area with emoji support
- **Footer**: Action buttons (Like, Comment, Share)
- **Styling**: `box-shadow: 0px 4px 9px 0px #0000000D`
- **Borders**: `border: 1px solid #0000001A`

### **Popup Component**
- **Overlay**: Semi-transparent background
- **Modal**: Centered content with close button

## **⚙️ Technical Implementation**

### **Custom Hooks**
- **`useInfiniteScroll`**: Intersection Observer for scroll detection
- **`usePaginated`**: Local data pagination with infinite scroll
- **`useAuthState`**: Authentication state management

### **Component Architecture**
- **Configuration-Driven**: Button arrays in constants files
- **Reusable Components**: Post, Popup, CreatePost
- **Props Interface**: TypeScript interfaces for all components
- **State Management**: Local state with React hooks




### **Form Validation Requirements:**

- **Username**: Minimum 3 characters
- **Password**: Minimum 6 characters
- **Email**: Must be valid email format (if using email)
- **Password Confirmation**: Must match password exactly
- **All Fields**: Required

## **🔧 Configuration & Customization**

### **Constants Files**
- **`src/components/CreatePost/constants.ts`**: Toolbar and action buttons
- **`src/components/Post/constants.ts`**: Post action buttons
- **Easy to modify**: Add/remove buttons by updating arrays

### **Styling Customization**
- **Tailwind CSS**: Utility-first approach
- **Custom Colors**: Arbitrary value syntax for specific colors
- **Shadows**: Custom box-shadow values for depth
- **Borders**: Configurable border styles and colors


### **Customization:**

You can modify the mock users in `src/contexts/AuthContext.tsx`:


---

**🎉 Enjoy exploring your social media feed application!**

*This demo showcases modern React development practices, custom hooks, component architecture, and responsive design principles.*
