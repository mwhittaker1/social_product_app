# Nuuly - Social Fashion Rental

A mobile-first web application for Nuuly, a social fashion rental platform where users can discover, share, and rent clothing items from friends and influencers.

## Screens and Navigation

### Home/Profile Screen (Main Menu)
- **Purpose**: Serves as the application's entry point, central navigation hub, and user's personal profile page
- **Features**: 
  - User profile summary with profile picture, name, and stats (lists, followers, following, events)
  - Profile actions including Edit Profile, Share, and Friend Request
  - Lists management with preview grid of items
  - "Connect & Explore" section with access to Friend's Closets, Feed, and Events
- **Access**: Available through the home icon in the header, on application launch, or by tapping the profile photo
- **Navigation**: Users can navigate to other screens by tapping on the various menu items or access profile editing via the Edit Profile button

### Edit Profile Screen
- **Purpose**: Allows users to modify their personal information and settings
- **Features**:
  - Edit profile photo
  - Update personal information (name, username, email, mobile, bio)
  - Update shipping address
  - Toggle privacy settings
- **Access**: Via "Edit Profile" button on Home/Profile screen
- **Navigation**: Save Changes button applies edits and returns to Home/Profile screen

### Friends Closet Screen
- **Purpose**: Displays a list of the user's friends for closet browsing
- **Features**:
  - Grid view of friends with profile photos
  - Friend names and usernames
  - Quick access to friend profiles
- **Access**: Via "Friend's Closets" option on Home/Profile screen
- **Navigation**: Tap on a friend card to view their profile

### Friend Profile Screen
- **Purpose**: Displays a specific friend's profile and collection
- **Features**:
  - Friend's profile photo and stats
  - Lists overview
  - Product collection grid
  - Filtering and sorting options
- **Access**: By selecting a friend from the Friends Closet screen
- **Navigation**: Back button returns to previous screen

### Feed Screen
- **Purpose**: Provides a social feed of fashion items, posts, and recommendations
- **Features**:
  - User posts with fashion items
  - Like and comment functionality
  - Rating system for fashion items
  - Style match suggestions
- **Access**: Via "Your Feed" option on Home/Profile screen or feed icon in header
- **Navigation**: Tap on items to view product details

### Events Screen
- **Purpose**: Shows fashion events and themed collections
- **Features**:
  - Event cards with images and descriptions
  - Seasonal and themed collections
  - Event participants display
- **Access**: Via "Your Events" option on Home/Profile screen
- **Navigation**: Tap on events to see details

### Product Detail Screen
- **Purpose**: Shows detailed information about a specific fashion item
- **Features**:
  - High-resolution product images
  - Product description and specifications
  - Size selection options
  - Rental and retail pricing
  - Add to bag/list functionality
- **Access**: By tapping on product images throughout the app
- **Navigation**: Back button returns to previous screen

### Closet Screen
- **Purpose**: Displays a collection view of a specific closet
- **Features**:
  - Grid view of fashion items
  - Filtering and sorting options
  - Quick add to closet/box functionality
- **Access**: Via "My Closet" on Home/Profile screen or friend's closet navigation
- **Navigation**: Tap on items to view product details

## Technologies Used

- HTML5
- CSS3 (with modern layout techniques like Grid and Flexbox)
- JavaScript (ES6+)

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser

## Responsive Design

The application is designed with a mobile-first approach, making it optimized for smartphone usage while still being functional on larger screens.

## Additional Features

### Notifications
- Dropdown notification system accessible from the header
- Displays friend invites, activity updates, and rental reminders

### Image Fullscreen View
- Enlarges product images for detailed viewing
- Shows community ratings and allows for comments

### Modals
- Interactive pop-ups for specific actions like invites and alerts
- Toast notifications for user feedback

## User Interaction Flows

### Browsing Fashion Items
1. Start at Home/Profile Screen
2. Navigate to either "My Closet," "Friend's Closets," or "Feed"
3. Browse items in grid view
4. Tap on an item to view details
5. Add to personal lists or rental bag

### Social Engagement
1. View posts in Feed
2. Like, comment, or rate fashion items
3. Follow suggested users with similar style
4. Share personal lists or closet items

### Event Participation
1. Browse events from Home/Profile Screen
2. View event details and associated collections
3. Save events to personal calendar
4. Discover seasonal fashion recommendations

## Future Enhancements

- User authentication
- Backend integration for real-time updates
- Payment processing for rentals
- Personalized recommendations based on style preferences
- Advanced filtering and search capabilities
- In-app messaging between users
- Virtual try-on using AR technology
