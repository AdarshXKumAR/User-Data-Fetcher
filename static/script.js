class UserDataFetcher {
    constructor() {
        this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
        this.users = [];
        this.init();
        this.createBackgroundAnimation();
    }

    init() {
        this.fetchBtn = document.getElementById('fetchBtn');
        this.reloadBtn = document.getElementById('reloadBtn');
        this.loader = document.getElementById('loader');
        this.errorMessage = document.getElementById('errorMessage');
        this.usersContainer = document.getElementById('usersContainer');
        this.stats = document.getElementById('stats');
        this.userCount = document.getElementById('userCount');
        this.loadTime = document.getElementById('loadTime');

        this.bindEvents();
    }

    bindEvents() {
        this.fetchBtn.addEventListener('click', () => this.fetchUsers());
        this.reloadBtn.addEventListener('click', () => this.reloadUsers());
    }

    createBackgroundAnimation() {
        const bgAnimation = document.getElementById('bgAnimation');
        
        setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particle.style.opacity = Math.random();
            bgAnimation.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 6000);
        }, 300);
    }

    async fetchUsers() {
        this.showLoader();
        this.hideError();
        this.disableButtons();

        const startTime = performance.now();

        try {
            const response = await fetch(this.apiUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
            }

            const users = await response.json();
            const endTime = performance.now();
            const loadTime = Math.round(endTime - startTime);

            // Limit to first 9 users
            const limitedUsers = users.slice(0, 9);
            this.users = limitedUsers;
            this.displayUsers(limitedUsers);
            this.updateStats(limitedUsers.length, loadTime);
            this.showReloadButton();

        } catch (error) {
            console.error('Error fetching users:', error);
            this.showError(this.getErrorMessage(error));
        } finally {
            this.hideLoader();
            this.enableButtons();
        }
    }

    getErrorMessage(error) {
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            return '🌐 Network Error: Please check your internet connection and try again.';
        } else if (error.message.includes('HTTP Error')) {
            return `📡 Server Error: ${error.message}`;
        } else {
            return `❌ Unexpected Error: ${error.message}`;
        }
    }

    displayUsers(users) {
        this.usersContainer.innerHTML = '';
        
        users.forEach((user, index) => {
            const userCard = this.createUserCard(user);
            userCard.style.animationDelay = `${index * 0.1}s`;
            this.usersContainer.appendChild(userCard);
        });
    }

    createUserCard(user) {
        const card = document.createElement('div');
        card.className = 'user-card';
        
        const initials = user.name.split(' ')
            .map(name => name.charAt(0))
            .join('')
            .substring(0, 2);

        card.innerHTML = `
            <div class="user-avatar">${initials}</div>
            <div class="user-name">${user.name}</div>
            <div class="user-email">
                <i class="fas fa-envelope info-icon"></i>
                ${user.email}
            </div>
            <div class="user-info">
                <div class="info-item">
                    <i class="fas fa-map-marker-alt info-icon"></i>
                    ${user.address.street}, ${user.address.suite}
                </div>
                <div class="info-item">
                    <i class="fas fa-city info-icon"></i>
                    ${user.address.city}, ${user.address.zipcode}
                </div>
                <div class="info-item">
                    <i class="fas fa-phone info-icon"></i>
                    ${user.phone}
                </div>
                <div class="info-item">
                    <i class="fas fa-globe info-icon"></i>
                    ${user.website}
                </div>
                <div class="info-item">
                    <i class="fas fa-building info-icon"></i>
                    ${user.company.name}
                </div>
            </div>
        `;

        return card;
    }

    updateStats(count, time) {
        this.userCount.textContent = count;
        this.loadTime.textContent = time;
        this.stats.style.display = 'flex';
    }

    reloadUsers() {
        this.usersContainer.innerHTML = '';
        this.stats.style.display = 'none';
        this.hideReloadButton();
        this.fetchUsers();
    }

    showLoader() {
        this.loader.style.display = 'flex';
    }

    hideLoader() {
        this.loader.style.display = 'none';
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.style.display = 'block';
        setTimeout(() => {
            this.errorMessage.style.display = 'none';
        }, 5000);
    }

    hideError() {
        this.errorMessage.style.display = 'none';
    }

    disableButtons() {
        this.fetchBtn.disabled = true;
        this.reloadBtn.disabled = true;
    }

    enableButtons() {
        this.fetchBtn.disabled = false;
        this.reloadBtn.disabled = false;
    }

    showReloadButton() {
        this.fetchBtn.style.display = 'none';
        this.reloadBtn.style.display = 'inline-block';
    }

    hideReloadButton() {
        this.fetchBtn.style.display = 'inline-block';
        this.reloadBtn.style.display = 'none';
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new UserDataFetcher();
});

// Add some extra interactivity
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const rect = particle.getBoundingClientRect();
        const distance = Math.sqrt(
            Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
            Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
        );
        
        if (distance < 100) {
            particle.style.transform = `scale(${1.5 - distance / 100})`;
        }
    });
});
