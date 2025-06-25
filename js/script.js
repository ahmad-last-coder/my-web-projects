document.addEventListener('DOMContentLoaded', function() {
    // Initialize Chart.js
    const ctx = document.getElementById('marketTrendsChart').getContext('2d');
    const marketTrendsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'AI Writing Guides',
                    data: [65, 59, 80, 81, 76, 85, 90],
                    borderColor: '#00B894',
                    backgroundColor: 'rgba(0, 184, 148, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Vampire Romance',
                    data: [80, 85, 70, 65, 60, 55, 50],
                    borderColor: '#D63031',
                    backgroundColor: 'rgba(214, 48, 49, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Mindfulness Coloring',
                    data: [30, 40, 45, 60, 65, 70, 85],
                    borderColor: '#6C5CE7',
                    backgroundColor: 'rgba(108, 92, 231, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });

    // Toggle mobile menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // Simulate loading for project cards
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });

    // Notification dropdown
    const notificationBtn = document.querySelector('.btn-notification');
    const notificationDropdown = document.createElement('div');
    notificationDropdown.className = 'notification-dropdown';
    notificationDropdown.innerHTML = `
        <div class="dropdown-header">
            <h4>Notifications</h4>
            <button class="mark-all-read">Mark all as read</button>
        </div>
        <div class="dropdown-content">
            <div class="notification-item unread">
                <i class="fas fa-book"></i>
                <div>
                    <p>Your book "AI Writing Guide" has been approved!</p>
                    <span>2 hours ago</span>
                </div>
            </div>
            <div class="notification-item">
                <i class="fas fa-chart-line"></i>
                <div>
                    <p>New sales record! 42 copies sold yesterday.</p>
                    <span>1 day ago</span>
                </div>
            </div>
            <div class="notification-item">
                <i class="fas fa-comment-alt"></i>
                <div>
                    <p>You have 5 new reader reviews.</p>
                    <span>2 days ago</span>
                </div>
            </div>
        </div>
        <div class="dropdown-footer">
            <a href="#">View all notifications</a>
        </div>
    `;
    
    notificationBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const existingDropdown = document.querySelector('.notification-dropdown');
        if (existingDropdown) {
            existingDropdown.remove();
            return;
        }
        
        notificationBtn.appendChild(notificationDropdown);
        
        // Mark as read functionality
        const markAllRead = notificationDropdown.querySelector('.mark-all-read');
        markAllRead.addEventListener('click', function() {
            const unreadItems = notificationDropdown.querySelectorAll('.unread');
            unreadItems.forEach(item => {
                item.classList.remove('unread');
            });
            document.querySelector('.notification-badge').style.display = 'none';
        });
    });
    
    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function() {
        const existingDropdown = document.querySelector('.notification-dropdown');
        if (existingDropdown) {
            existingDropdown.remove();
        }
    });

    // User profile dropdown
    const userProfile = document.querySelector('.user-profile');
    const profileDropdown = document.createElement('div');
    profileDropdown.className = 'profile-dropdown';
    profileDropdown.innerHTML = `
        <div class="dropdown-header">
            <img src="https://via.placeholder.com/40" alt="User">
            <div>
                <h4>John Author</h4>
                <p>Pro Member</p>
            </div>
        </div>
        <div class="dropdown-content">
            <a href="#"><i class="fas fa-user"></i> Profile</a>
            <a href="#"><i class="fas fa-cog"></i> Settings</a>
            <a href="#"><i class="fas fa-book"></i> My Books</a>
            <a href="#"><i class="fas fa-chart-line"></i> Analytics</a>
        </div>
        <div class="dropdown-footer">
            <a href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>
        </div>
    `;
    
    userProfile.addEventListener('click', function(e) {
        e.stopPropagation();
        const existingDropdown = document.querySelector('.profile-dropdown');
        if (existingDropdown) {
            existingDropdown.remove();
            return;
        }
        
        userProfile.appendChild(profileDropdown);
    });
    
    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function() {
        const existingDropdown = document.querySelector('.profile-dropdown');
        if (existingDropdown) {
            existingDropdown.remove();
        }
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.action-card, .project-card, .feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Simulate data loading
    setTimeout(() => {
        document.querySelector('.welcome-banner').style.opacity = '1';
        document.querySelector('.quick-actions').style.opacity = '1';
        document.querySelector('.recent-projects').style.opacity = '1';
        document.querySelector('.enhanced-features').style.opacity = '1';
        document.querySelector('.market-insights').style.opacity = '1';
    }, 300);
});

// Add some animation on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.feature-card, .project-card');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize elements with animation properties
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.feature-card, .project-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Welcome banner animation
    const welcomeBanner = document.querySelector('.welcome-banner');
    welcomeBanner.style.opacity = '0';
    welcomeBanner.style.transform = 'translateY(20px)';
    welcomeBanner.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    // Other sections
    const sections = document.querySelectorAll('.quick-actions, .recent-projects, .enhanced-features, .market-insights');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});