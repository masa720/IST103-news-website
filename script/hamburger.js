document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
  
    // Create menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
  
    const icon = document.createElement('img');
    icon.src = './assets/images/icon-menu.svg';
    icon.alt = 'Menu';
    icon.className = 'menu-icon';
  
    menuButton.appendChild(icon);
    header.appendChild(menuButton);
  
    // Toggle navigation
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open'); // toggle and get state
  
      if (isOpen) {
        icon.src = './assets/images/icon-menu-close.svg';
        icon.alt = 'Close Menu';
      } else {
        icon.src = './assets/images/icon-menu.svg';
        icon.alt = 'Menu';
      }
    });
  });
  