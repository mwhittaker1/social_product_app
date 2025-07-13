// Global variables
let currentScreen = 'main-menu';
let screenHistory = []; // Start with empty history
let currentList = null;
let currentProduct = null; // Only declare once

// Store comments for each list
const listComments = {
    'July': [
        { avatar: 'J', name: 'Jenny', handle: '@jennynotjenis', text: "Can't wait for the wedding!", emoji: '🎉' },
        { avatar: 'M', name: 'Maya', handle: '@therealmaya', text: "The Sheel Sleeveless was running large on me, FYI!", emoji: '👗' },
        { avatar: 'A', name: 'Amaya', handle: '@amaya23', text: "Love the color palette in this list!", emoji: '😍' }
    ],
    'Summer Vibes': [
        { avatar: 'J', name: 'Jenny', handle: '@jennynotjenis', text: "Summer vibes are the best!", emoji: '🌞' }
    ],
    'June': [
        { avatar: 'N', name: 'Nova', handle: '@novanova99', text: "Loved the June picks!", emoji: '🩵' }
    ]
};

// Product data for dynamic product details
const productData = {
    '4130084320119_011_b2.webp': {
        name: 'Brooke Halter Top',
        brand: 'Free People',
        price: { rental: 25, retail: 128 },
        description: 'A gorgeous halter top featuring delicate cutout details and a flowy silhouette. Perfect for summer festivals or date nights. Made from sustainable materials with a comfortable fit that flatters all body types.',
        comments: [
            { avatar: 'J', name: 'Jenny', handle: '@jennynotjenis', text: "Loved this for the wedding!", emoji: '💃' },
            { avatar: 'M', name: 'Maya', handle: '@therealmaya', text: "Fit was perfect!", emoji: '👌' }
        ],
        sizing: 3 // 1-5
    },
    '4130646420009_256_b.webp': {
        name: 'Barrett Midi Dress',
        brand: 'Ronny Kobo',
        price: { rental: 30, retail: 150 },
        description: 'A chic midi dress for all occasions. Comfortable and stylish.',
        comments: [
            { avatar: 'A', name: 'Amaya', handle: '@amaya23', text: "Runs a bit large!", emoji: '📏' }
        ],
        sizing: 4
    },
    '4130652010127_089_b2.webp': {
        name: 'Strappy Dress',
        brand: 'PHX',
        price: { rental: 22, retail: 99 },
        description: 'Strappy and fun, great for summer.',
        comments: [
            { avatar: 'N', name: 'Nova', handle: '@novanova99', text: "Loved the color!", emoji: '🌈' }
        ],
        sizing: 2
    },
    '747963950-m1a.webp': {
        name: 'Ari Neck Scarf Dress',
        brand: 'Boobob',
        price: { rental: 28, retail: 145 },
        description: 'An elegant dress with unique neck scarf detail. Perfect for sophisticated occasions with a touch of bohemian flair.',
        comments: [
            { avatar: 'S', name: 'Sophia', handle: '@sophia_style', text: "Love the neck detail!", emoji: '😍' },
            { avatar: 'E', name: 'Emma', handle: '@emma_fashion', text: "Perfect fit and so comfy!", emoji: '✨' }
        ],
        sizing: 3
    }
};

// Function to show a specific screen
function showScreen(screenId) {
    // Only add to history if it's a different screen
    if (screenId !== currentScreen) {
        screenHistory.push(currentScreen); // Add the current screen before switching
    }
    
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    const selectedScreen = document.getElementById(screenId);
    if (selectedScreen) {
        selectedScreen.classList.add('active');
        console.log('Showing screen:', screenId); // Debug log
    } else {
        console.error('Screen not found:', screenId); // Debug log
    }
    
    // Update current screen
    currentScreen = screenId;
    
    // Scroll to top to ensure proper display
    window.scrollTo(0, 0);
    
    // Close notifications dropdown (with safety check)
    try {
        const notificationsDropdown = document.getElementById('notificationsDropdown');
        if (notificationsDropdown) {
            notificationsDropdown.classList.remove('active');
        }
    } catch (e) {
        // Ignore dropdown errors
    }
}

// Show a specific list page when a list is clicked
function showListScreen(listName) {
    showScreen('lists-screen');
    document.getElementById('listsScreenTitle').textContent = listName + ' List';
    document.getElementById('listsScreenParticipants').style.display = 'none';
    document.getElementById('listsCommentsSection').style.display = 'block';
    currentList = listName;
    renderListComments(listName);
}

// Show Lists Screen (general)
function showListsScreen() {
    showScreen('lists-screen');
    document.getElementById('listsScreenTitle').textContent = 'Lists';
    document.getElementById('listsScreenParticipants').style.display = 'none';
    document.getElementById('listsCommentsSection').style.display = 'none';
}

// Show Lists Screen for Event (now shows products and horizontal participants)
function showListsScreenForEvent(eventName, participants) {
    showScreen('lists-screen');
    document.getElementById('listsScreenTitle').textContent = eventName + ' Products';
    // Show participants horizontally
    const partDiv = document.getElementById('listsScreenParticipants');
    partDiv.style.display = 'block';
    const row = partDiv.querySelector('.participants-row');
    row.innerHTML = '';
    participants.forEach(p => {
        const el = document.createElement('div');
        el.className = 'event-participant';
        el.textContent = p;
        row.appendChild(el);
    });
    // Show comments section for event
    document.getElementById('listsCommentsSection').style.display = 'block';
    // Optionally, update products for event here if dynamic
}

function renderListComments(listName) {
    const feed = document.getElementById('listsCommentsFeed');
    feed.innerHTML = '';
    const comments = listComments[listName] || [];
    comments.forEach(c => {
        const div = document.createElement('div');
        div.className = 'comment-item';
        div.style.display = 'flex';
        div.style.alignItems = 'flex-start';
        div.style.marginBottom = '12px';

        const avatar = document.createElement('div');
        avatar.className = 'comment-avatar';
        avatar.textContent = c.avatar;
        avatar.style.width = '32px';
        avatar.style.height = '32px';
        avatar.style.background = '#e6e6e6';
        avatar.style.borderRadius = '50%';
        avatar.style.display = 'flex';
        avatar.style.alignItems = 'center';
        avatar.style.justifyContent = 'center';
        avatar.style.fontWeight = 'bold';
        avatar.style.marginRight = '10px';

        const content = document.createElement('div');
        content.className = 'comment-content';
        content.style.background = '#fff';
        content.style.borderRadius = '8px';
        content.style.padding = '10px 14px';
        content.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';

        const nameSpan = document.createElement('span');
        nameSpan.style.fontWeight = '500';
        nameSpan.style.color = '#333';
        nameSpan.textContent = c.name;
        const handleSpan = document.createElement('span');
        handleSpan.style.marginLeft = '8px';
        handleSpan.style.color = '#888';
        handleSpan.style.fontSize = '13px';
        handleSpan.textContent = c.handle;

        const commentTextDiv = document.createElement('div');
        commentTextDiv.style.marginTop = '4px';
        commentTextDiv.style.color = '#444';
        commentTextDiv.style.fontSize = '15px';
        commentTextDiv.textContent = c.text + (c.emoji ? ' ' : '');
        if (c.emoji) {
            const emojiSpan = document.createElement('span');
            emojiSpan.style.fontSize = '18px';
            emojiSpan.style.verticalAlign = 'middle';
            emojiSpan.textContent = c.emoji;
            commentTextDiv.appendChild(emojiSpan);
        }

        content.appendChild(nameSpan);
        content.appendChild(handleSpan);
        content.appendChild(commentTextDiv);

        div.appendChild(avatar);
        div.appendChild(content);
        feed.appendChild(div);
    });
}

// Star rating for lists
function rateList(starElem, rating) {
    const stars = starElem.parentElement.querySelectorAll('.star');
    stars.forEach((s, i) => {
        s.textContent = i < rating ? '⭐' : '☆';
    });
    // Optionally, save rating to backend here
}

// Toggle follow flag for lists
function toggleFollowList(flagElem, listName) {
    if (flagElem.textContent === '🏳️') {
        flagElem.textContent = '🚩';
        showToast(`You're now following ${listName} list!`);
    } else {
        flagElem.textContent = '🏳️';
    }
}

// Add comment to lists comment feed with user profile/avatar, unique per list
function addListComment() {
    const input = document.getElementById('addListCommentInput');
    const comment = input.value.trim();
    if (comment && currentList) {
        // Example: current user is Rachel
        let emojiMatch = comment.match(/([\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}])/u);
        let text = comment;
        let emoji = '';
        if (emojiMatch) {
            text = comment.replace(emojiMatch[0], '').trim();
            emoji = emojiMatch[0];
        }
        const newComment = {
            avatar: 'R',
            name: 'Rachel',
            handle: '@rachel_green',
            text: text,
            emoji: emoji
        };
        if (!listComments[currentList]) listComments[currentList] = [];
        listComments[currentList].push(newComment);
        renderListComments(currentList);
        input.value = '';
    }
}

// Function to navigate back
function goBack() {
    if (screenHistory.length > 0) {
        // Get the last screen from history
        const previousScreen = screenHistory.pop();
        
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show previous screen
        const selectedScreen = document.getElementById(previousScreen);
        if (selectedScreen) {
            selectedScreen.classList.add('active');
        }
        
        // Update current screen without adding to history
        currentScreen = previousScreen;
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Close notifications dropdown
        const notificationsDropdown = document.getElementById('notificationsDropdown');
        if (notificationsDropdown) {
            notificationsDropdown.classList.remove('active');
        }
    }
}

// Function to navigate to profile (now the main screen)
function goToProfile() {
    showScreen('main-menu');
}

// Function to navigate to edit profile
function goToEditProfile() {
    showScreen('edit-profile');
}

// Function to save profile changes
function saveProfile() {
    showToast('Profile updated successfully!');
    goToProfile();
}

// Function to show friend profile
function showFriendProfile(friendName) {
    // In a real app, we would load the friend's data here
    // For now, we'll just navigate to the friend profile screen
    showScreen('friend-profile');
}

// Function to toggle menu
function toggleMenu() {
    // Menu functionality to be implemented
    console.log('Menu toggled');
}

// Function to toggle notifications
function toggleNotifications() {
    const dropdown = document.getElementById('notificationsDropdown');
    dropdown.classList.toggle('active');
}

// Function to show product detail
function showProductDetail(event) {
    let imgSrc = null;
    let productName = '';
    let productBrand = '';
    
    // Get the clicked product card
    let productCard = null;
    if (event && event.currentTarget) {
        productCard = event.currentTarget;
    } else if (event && event.target) {
        // Find the closest product card if event target is a child element
        productCard = event.target.closest('.product-card');
    }
    
    if (productCard) {
        // Get image source from the product card
        const img = productCard.querySelector('img');
        if (img) {
            imgSrc = img.src;
        }
        
        // Get product name and brand from the product card
        const nameElement = productCard.querySelector('.product-name');
        const brandElement = productCard.querySelector('.product-brand');
        if (nameElement) productName = nameElement.textContent.trim();
        if (brandElement) productBrand = brandElement.textContent.trim();
    }
    
    // Extract filename from image source
    let filename = imgSrc ? imgSrc.split('/').pop() : '4130084320119_011_b2.webp';
    currentProduct = filename;
    
    // Get product data, fallback to default if not found
    const data = productData[filename] || productData['4130084320119_011_b2.webp'];
    
    // Use HTML data if available, otherwise use productData
    const displayName = productName || data.name;
    const displayBrand = productBrand || data.brand;
    
    showScreen('product-detail');
    
    // Set image
    const productDetailImg = document.querySelector('#product-detail .product-detail-img');
    if (productDetailImg) {
        productDetailImg.src = imgSrc || ('images/products/' + filename);
    }
    
    // Set name, brand, price, description
    const nameEl = document.querySelector('.product-detail-name');
    const brandEl = document.querySelector('.product-detail-brand');
    const priceEl = document.querySelector('.product-detail-price');
    const descEl = document.querySelector('.product-detail-description');
    
    if (nameEl) nameEl.textContent = displayName;
    if (brandEl) brandEl.textContent = displayBrand;
    if (priceEl) priceEl.textContent = `Rental: ${data.price.rental} | Retail: ${data.price.retail}`;
    if (descEl) descEl.textContent = data.description;
    
    // Render comments
    renderProductComments(data.comments);
    // Render star rating
    renderProductRating(filename);
    // Render sizing bubbles
    renderSizingBubbles(data.sizing);
}

// Function to add item to closet
function addToCloset(event) {
    event.stopPropagation();
    showToast('Added to your closet');
    
    // Change the color of the clothing hanger icon
    if (event.target.classList.contains('added-to-closet')) {
        event.target.classList.remove('added-to-closet');
        event.target.style.color = '';
    } else {
        event.target.classList.add('added-to-closet');
        event.target.style.color = '#e74c3c';
    }
}

// Function to add item to next box
function addToBox(event) {
    event.stopPropagation();
    showToast('Added to your next box!');
    
    // Change the color of the box icon
    if (event.target.classList.contains('added-to-box')) {
        event.target.classList.remove('added-to-box');
        event.target.style.color = '';
    } else {
        event.target.classList.add('added-to-box');
        event.target.style.color = '#4a5568';
    }
}

// Function to like a post
function likePost(element) {
    element.classList.toggle('liked');
    if (element.classList.contains('liked')) {
        showToast('Added to your closet');
    }
}

// Function to show fullscreen image overlay
function showFullscreen(event) {
    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    
    // Get the clicked image source
    let imgSrc;
    if (event && event.target.tagName === 'IMG') {
        imgSrc = event.target.src;
    } else if (event && event.currentTarget.querySelector('img')) {
        imgSrc = event.currentTarget.querySelector('img').src;
    } else {
        // Default image if no source found
        const randomProductImages = [
            'images/products/4130084320119_011_b2.webp',
            'images/products/4130646420009_256_b.webp',
            'images/products/4130652010127_089_b2.webp',
            'images/products/747963950-m1a.webp',
            'images/products/747964005-m4a.webp'
        ];
        imgSrc = randomProductImages[Math.floor(Math.random() * randomProductImages.length)];
    }
    
    // Set the image source in the fullscreen view
    fullscreenImage.src = imgSrc;
    
    // Show the overlay
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Function to close fullscreen image
function closeFullscreen() {
    const overlay = document.getElementById('fullscreenOverlay');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

// Function to show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Function to show wedding invite
function showWeddingInvite() {
    document.getElementById('inviteModal').classList.add('active');
}

// Function to accept invite and go to shared list
function acceptInvite() {
    document.getElementById('inviteModal').classList.remove('active');
    showToast('Invite accepted!');
    
    // Create a timeout to simulate page loading
    setTimeout(() => {
        // Navigate to wedding shared list (assuming we'll create this screen)
        showScreen('wedding-shared-list');
    }, 500);
}

// Function to decline invite
function declineInvite() {
    document.getElementById('inviteModal').classList.remove('active');
}

// Function to randomize product images
function randomizeProducts() {
    // Array of product images
    const productImages = [
        'images/products/4130084320119_011_b2.webp',
        'images/products/4130646420009_256_b.webp',
        'images/products/4130652010127_089_b2.webp',
        'images/products/4130916210153_066_b2.webp',
        'images/products/4130929940110_009_b2.webp',
        'images/products/747963950-m1a.webp',
        'images/products/747963977-m1c.webp',
        'images/products/747964005-m4a.webp',
        'images/products/747964025-m4c.webp',
        'images/products/747964048-m6c.webp',
        'images/products/747964063-m8b.webp',
        'images/products/757627703-m1b.webp'
    ];
    
    // Add images to product cards that don't have them yet
    document.querySelectorAll('.product-image').forEach(productImage => {
        if (!productImage.querySelector('img') && !productImage.querySelector('.product-img')) {
            const img = document.createElement('img');
            const randomImageIndex = Math.floor(Math.random() * productImages.length);
            img.src = productImages[randomImageIndex];
            img.alt = "Fashion item";
            img.className = "product-img";
            
            // Insert the image before the add-to-closet element
            const addToCloset = productImage.querySelector('.add-to-closet');
            if (addToCloset) {
                productImage.insertBefore(img, addToCloset);
            } else {
                productImage.appendChild(img);
            }
        }
    });
}

// Function to rate an item with stars
function rateItem(element, rating) {
    // Find the parent rating container
    const ratingContainer = element.parentElement;
    
    // Get all stars in this container
    const stars = ratingContainer.querySelectorAll('.star');
    
    // Update star display based on rating
    stars.forEach((star, index) => {
        if (index < rating) {
            star.textContent = '★'; // Filled star
            star.classList.add('active');
        } else {
            star.textContent = '☆'; // Empty star
            star.classList.remove('active');
        }
    });
    
    // Show toast with rating message
    showToast(`You rated this item ${rating} stars!`);
}

// Product detail comment functions
function renderProductComments(comments) {
    let section = document.getElementById('productCommentsSection');
    if (!section) {
        section = document.createElement('div');
        section.id = 'productCommentsSection';
        document.querySelector('.product-detail-info').appendChild(section);
    }
    let sectionString = '';
    sectionString = `<h3>Comments <button onclick="filterFriendsComments()" style="margin-left:10px;background: transparent;border: 0px;font-size: 16px;color: #6C6C6C;">See My Friends' Comments</button></h3><div class="product-comments-feed">`;
    comments.forEach(c => {
        sectionString += `<div class="comment-item" style="display:flex;align-items:flex-start;margin-bottom:12px;margin-top: 10px;"><div class="comment-avatar" style="width:32px;height:32px;background:#e6e6e6;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;margin-right:10px;">${c.avatar}</div><div class="comment-content" style="background:#fff;border-radius:8px;padding:10px 14px;box-shadow:0 1px 4px rgba(0,0,0,0.04);"><span style="font-weight:500;color:#333;">${c.name}</span><span style="margin-left:8px;color:#888;font-size:13px;">${c.handle}</span><div style="margin-top:4px;color:#444;font-size:15px;">${c.text} <span style="font-size:18px;vertical-align:middle;">${c.emoji}</span></div></div></div>`;
    });
    // Add comment box
    sectionString += `</div><div style="display:flex;align-items:center;gap:8px;margin-top:10px;"><input type="text" id="addProductCommentInput" class="comment-input" placeholder="Add a comment..." style="flex:1;"><button class="btn" onclick="addProductComment()">Post</button></div>`;
    section.innerHTML = sectionString;
}

function addProductComment() {
    const input = document.getElementById('addProductCommentInput');
    const comment = input.value.trim();
    if (comment && currentProduct) {
        let emojiMatch = comment.match(/([\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}])/u);
        let text = comment;
        let emoji = '';
        if (emojiMatch) {
            text = comment.replace(emojiMatch[0], '').trim();
            emoji = emojiMatch[0];
        }
        const newComment = {
            avatar: 'R',
            name: 'Rachel',
            handle: '@rachel_green',
            text: text,
            emoji: emoji
        };
        if (!productData[currentProduct].comments) productData[currentProduct].comments = [];
        productData[currentProduct].comments.push(newComment);
        renderProductComments(productData[currentProduct].comments);
        input.value = '';
    }
}

function filterFriendsComments() {
    if (!currentProduct) return;
    const comments = productData[currentProduct].comments.filter(c => c.name !== 'Rachel');
    renderProductComments(comments);
}

function renderProductRating(filename) {
    let ratingSection = document.getElementById('productRatingSection');
    if (!ratingSection) {
        ratingSection = document.createElement('div');
        ratingSection.id = 'productRatingSection';
        document.querySelector('.product-detail-info').appendChild(ratingSection);
    }
    ratingSection.innerHTML = `<h3>Rate This Product</h3><div class="product-rating">${[1,2,3,4,5].map(i => `<span class="star" onclick="rateProduct('${filename}',${i})">☆</span>`).join('')}</div>`;
}

function rateProduct(filename, rating) {
    showToast(`You rated this product ${rating} stars!`);
    const stars = document.querySelectorAll('#productRatingSection .star');
    stars.forEach((star, i) => {
        star.textContent = i < rating ? '★' : '☆';
        if (i < rating) star.classList.add('active'); else star.classList.remove('active');
    });
    // Optionally, save rating to backend
}

function renderSizingBubbles(selected) {
    let sizingSection = document.getElementById('productSizingSection');
    if (!sizingSection) {
        sizingSection = document.createElement('div');
        sizingSection.id = 'productSizingSection';
        document.querySelector('.product-detail-info').appendChild(sizingSection);
    }
    const labels = ['Runs Very Small', 'Runs Small', 'True to Size', 'Runs Large', 'Runs Very Large'];
    sizingSection.innerHTML = `<h3>Sizing</h3><div class="sizing-bubbles">${labels.map((label, i) => `<span class="sizing-bubble${selected===i+1?' selected':''}" onclick="selectSizing(${i+1})">${label}</span>`).join('')}</div>`;
}

function selectSizing(val) {
    if (currentProduct && productData[currentProduct]) {
        productData[currentProduct].sizing = val;
        renderSizingBubbles(val);
        showToast(`You selected: ${['Runs Very Small','Runs Small','True to Size','Runs Large','Runs Very Large'][val-1]}`);
    }
}

// Initialize the app
function initApp() {
    randomizeProducts();
    
    // Close fullscreen overlay when clicking outside the image
    document.getElementById('fullscreenOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            closeFullscreen();
        }
    });
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);