# Product Requirements Document: Meal Planner Mobile App

## 1. Introduction/Overview

The Meal Planner Mobile App is a comprehensive React Native application designed to simplify weekly meal planning for busy individuals and families. The app solves the common problem of "What should I cook this week?" by providing an AI-driven meal planning experience that generates personalized recipe recommendations based on user preferences, dietary requirements, and cuisine preferences.

**Problem Statement:** Many people struggle with meal planning, leading to repetitive meals, food waste, inefficient grocery shopping, and poor nutritional choices. Current solutions are either too complex or don't provide enough personalization.

**Solution:** A mobile-first meal planner that uses the Spoontacular API to generate personalized meal recommendations with nutritional tracking. Through an intuitive multi-step form, it allows users to customize their weekly meal plan with drag-and-drop functionality, and automatically generates shopping lists.

## 2. Goals

### Primary Goals
1. **Streamline Meal Planning**: Reduce weekly meal planning time from hours to minutes
2. **Personalized Experience**: Provide tailored recipe recommendations based on individual preferences
3. **Simplified Grocery Shopping**: Generate automated shopping lists from selected meals
4. **Nutritional Awareness**: Help users track calories and protein intake for better health decisions
5. **Mobile-First Experience**: Deliver a fast, intuitive mobile app with sub-2 second launch time

### Success Metrics
- User completes meal planning flow within 10 minutes
- App launch time under 2 seconds consistently

## 3. User Stories

### Authentication & Onboarding
- **As a new user**, I want to see an attractive landing page so that I understand the app's value proposition
- **As a new user**, I want to sign up with my username, email and password so that I can access personalized meal planning
- **As a returning user**, I want to be automatically logged in so that I can quickly access my dashboard

### Meal Planning Core Flow
- **As a user**, I want to specify my meal preferences (number of meals, dietary restrictions, cuisines) through an easy-to-use form so that I get relevant recipe suggestions
- **As a user**, I want to swipe vertically through form sections so that the input process feels modern and mobile-native
- **As a user**, I want to see an animated loading screen while recipes are being fetched so that I know the app is working
- **As a user**, I want to choose from multiple recipe options for each meal type so that I have control over my meal plan
- **As a user**, I want to drag and drop selected recipes onto a weekly calendar so that I can organize my meals by day

### Dashboard & Management
- **As a user**, I want to see today's planned meals on my dashboard so that I know what to cook
- **As a user**, I want to scroll through a horizontal calendar to view different days of the week so that I can see my entire meal plan
- **As a user**, I want to see my weekly grocery list so that I can shop efficiently
- **As a user**, I want to view nutritional summaries (calories, protein) so that I can make informed dietary choices
- **As a user**, I want to save favorite recipes so that I can easily find them again

### Profile & Preferences
- **As a user**, I want to update my dietary preferences so that future meal plans remain relevant
- **As a user**, I want to log out securely so that my personal information remains protected

## 4. Functional Requirements

### 4.1 Authentication System
1. **Landing Page**: Display app value proposition with prominent "Get Started" button
2. **Login/Signup Screen**: Email and password authentication (+ username when signing up) with form validation
3. **Session Management**: Automatic login for returning users, secure logout functionality
4. **Protected Routes**: Redirect unauthenticated users to landing page

### 4.2 Meal Planning Form (Multi-Screen Vertical Swipe)
5. **Form Screen 1 - Meal Quantities**: User specifies number of main meals, desserts, salads, soups, snacks, and smoothies for the week
6. **Form Screen 2 - Serving and Time Preferences**: User specifies number of servings per meal and people to cook for, and cooking time preferences (quick meals, moderate, elaborate)
8. **Form Screen 3 - Food Preferences**: User adds foods to include and exclude from meal plans
9. **Form Screen 4 - Cuisine Selection**: User selects preferred cuisines for variety
10. **Vertical Navigation**: Users swipe up to progress through form sections
11. **Form Validation**: Ensure all required fields are completed before API call
12. **Progress Indicator**: Show form completion progress

### 4.3 Recipe Fetching & Selection
13. **Spoontacular Integration**: Make API calls with form data to fetch relevant recipes
14. **Loading State**: Display animated loading screen during API calls
15. **Recipe Display**: Show recipe cards with high-definition images, titles, cooking time, and difficulty
16. **Recipe Details**: Include cooking instructions, ingredient lists, nutritional info (calories, protein), and preparation time
17. **Selection Interface**: Display 2 more recipe options than requested per meal type for choice flexibility
18. **Recipe Cards**: Show recipe image, title, cook time

### 4.4 Meal Calendar & Planning
19. **Drag-and-Drop Interface**: Allow users to drag selected recipes onto specific days/meals
20. **Weekly Calendar View**: Horizontal scrollable calendar showing current week
21. **Meal Slots**: Organized meal slots for main meals, desserts, salads, snacks, etc.
22. **Visual Feedback**: Clear indication of where recipes can be dropped
23. **Calendar Navigation**: Ability to view different days of the current week

### 4.5 Dashboard
24. **Today's Meals Display**: Show today's planned meals with recipe images and titles
25. **Quick Access Calendar**: Small calendar widget for date selection
26. **Meal Plan Creation**: "Create Meal Plan" button prominently displayed
27. **Navigation Tabs**: Dashboard, Groceries, Profile, Favorites tabs
28. **Nutritional Summary**: Daily calorie and protein totals

### 4.6 Grocery List
29. **Automated List Generation**: Compile ingredients from all selected recipes
30. **Ingredient Consolidation**: Combine duplicate ingredients with proper quantities
31. **List Organization**: Group ingredients by category (produce, dairy, meat, etc.)
32. **Weekly View**: Show complete shopping list for the planned week

### 4.7 Favorites Management
33. **Save Favorites**: Allow users to mark recipes as favorites at any time
34. **Favorites Tab**: Dedicated section to view all saved recipes

### 4.8 Profile Management
35. **Dietary Preferences**: Update food restrictions and preferences
37. **Logout**: Secure session termination

## 5. Non-Goals (Out of Scope)

### Current Release Exclusions
- **Guest Mode**: No anonymous access to app functionality
- **Social Login**: Only email/password authentication (no Google, Apple, Facebook)
- **Recipe Reviews/Ratings**: No user-generated content or community features
- **Offline Mode**: App requires internet connection for full functionality
- **Budget Constraints**: No meal planning based on cost considerations
- **Custom Recipe Creation**: Users cannot add their own recipes
- **Multi-household Management**: Single user profile only
- **Data Export**: No integration with external grocery or delivery apps
- **Advanced Filtering**: No complex recipe filtering during selection

### Future Stretch Goals (Not Implemented Now)
- **Quick Access**: No way to add favorite recipes to new meal plans (stretch goal)

- **Account Settings**: Email, password change functionality
- **Onboarding Flow**: Post-signup dietary preference collection
- **Recipe Sorting**: Sort options during recipe selection
- **Push Notifications**: Meal prep and shopping reminders


## 6. Design Considerations

### 6.1 UI/UX Requirements
- **Mobile-First Design**: Optimized for iOS and Android devices
- **NativeWind Styling**: Consistent design system using Tailwind CSS classes
- **Design References**: UI should follow patterns in `design-assets/ui-inspiration/`, create visually consistent elements when there's no corresponding ui-inspiration folder (or use `design-assets/ui-inspiration/general` for general inspiration)
- **Responsive Layout**: Adapt to different screen sizes and orientations
- **Loading States**: Smooth animations and feedback during data fetching
- **Error States**: Clear error messages with recovery suggestions
- **Empty States**: Beautiful empty states consistent with the rest of the app's styles

### 6.2 Visual Design System
- **Typography**: Clear, readable fonts with appropriate hierarchy
- **Color Palette**: Modern, food-friendly color scheme
- **Imagery**: High-quality recipe photos from Spoontacular API
- **Icons**: Consistent iconography for navigation and actions
- **Spacing**: Adequate white space for touch-friendly interactions
- **Consistently**: Consistent UI design patters across the app, and use `design-assets/ui-inspiration/general` for inspiration when there's no corresponding folder to draw inspo from

### 6.3 Interaction Patterns
- **Vertical Swiping**: Intuitive form navigation
- **Drag-and-Drop**: Visual feedback for meal calendar interactions
- **Horizontal Scrolling**: Calendar and recipe selection
- **Touch Targets**: Minimum 44px for accessibility
- **Haptic Feedback**: Subtle vibrations for user actions

## 7. Technical Considerations

### 7.1 Technology Stack
- **Frontend**: React Native with Expo for cross-platform development
- **Language**: TypeScript for type safety and developer experience
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: Zustand for application state
- **Form Handling**: React Hook Form with Zod validation
- **Backend**: Appwrite for authentication, database, and real-time sync
- **API Integration**: Spoontacular API for recipe data

### 7.2 Architecture Requirements
- **Component Structure**: Atomic design principles with reusable components
- **Navigation**: Tab-based navigation with stack navigation for forms
- **State Management**: Global stores for authentication and meal planning data
- **API Layer**: Service layer for Appwrite and Spoontacular integrations
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Performance**: Optimized for 60fps animations and fast load times

### 7.3 Data Models
```typescript
// Core data structures
interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
}

interface MealPreferences {
  mainMeals: number;
  desserts: number;
  salads: number;
  soups: number;
  snacks: number;
  smoothies: number;
  servings: number;
  cookingTime: 'quick' | 'moderate' | 'elaborate';
  includeFoods: string[];
  excludeFoods: string[];
  cuisines: string[];
}

interface Recipe {
  id: string;
  title: string;
  image: string;
  readyInMinutes: number;
  calories: number;
  protein: number;
  instructions: string[];
  ingredients: Ingredient[];
}

interface MealPlan {
  id: string;
  userId: string;
  weekStartDate: Date;
  meals: PlannedMeal[];
  groceryList: Ingredient[];
}
```

### 7.4 Integration Requirements
- **Spoontacular API**: Recipe search, detailed recipe information, nutritional data
- **Appwrite Services**: Authentication, user management, data storage
- **Environment Configuration**: Separate configs for development and production
- **Error Monitoring**: Comprehensive logging for debugging and monitoring

## 8. Success Metrics

### 8.1 Performance Metrics
- **App Launch Time**: Under 2 seconds from tap to interactive dashboard
- **API Response Time**: Recipe fetching under 5 seconds
- **Crash Rate**: Less than 1% of sessions result in app crashes

## 9. Open Questions

### 9.1 Technical Questions
1. **Image Optimization**: How should we handle recipe image caching and optimization for mobile?
2. **State Persistence**: Should meal plans be saved locally or only in Appwrite?
3. **Form State Management**: How should we handle form state persistence if users navigate away?

### 9.2 Product Questions
1. **Meal Plan Duration**: Should users be able to plan for longer than one week?
2. **Recipe Substitution**: Should users be able to swap recipes after initial selection?
3. **Portion Adjustments**: Should users be able to modify serving sizes after meal plan creation?
4. **Multiple Meal Plans**: Can users maintain multiple concurrent meal plans?

### 9.3 UX Questions
1. **Calendar Start Day**: Should the week start on Sunday or Monday?
2. **Empty States**: What should users see when they have no meal plans?
3. **Error Recovery**: How should users recover from API failures during recipe fetching?

---

## Implementation Phases

### Phase 1: Foundation (Weeks 1-2)
- Authentication system with Appwrite
- Basic navigation structure
- Landing page and login/signup screens

### Phase 2: Meal Planning Flow (Weeks 3-4)
- Multi-screen form with vertical navigation
- Form validation and state management
- Spoontacular API integration
- Loading states and error handling

### Phase 3: Recipe Selection (Week 5)
- Recipe display and selection interface
- Drag-and-drop meal calendar
- Meal plan creation and storage

### Phase 4: Dashboard & Core Features (Week 6)
- Dashboard with today's meals
- Grocery list generation
- Basic nutritional summaries
- Favorites functionality

### Phase 5: Profile & Polish (Week 7)
- Profile management
- Settings and preferences
- Performance optimization
- Testing and bug fixes

---

**Document Version**: 1.0  
**Last Updated**: Initial Creation  
**Next Review**: After Phase 1 completion 