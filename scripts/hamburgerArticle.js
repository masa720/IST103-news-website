document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.overlay');
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
  
    const icon = document.createElement('img');
    icon.src = '../assets/images/icon-menu.svg';
    icon.alt = 'Menu';
    icon.className = 'menu-icon';
  
    menuButton.appendChild(icon);
    header.appendChild(menuButton);
  
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
  
      document.body.classList.toggle('menu-open', isOpen);
  
      if (isOpen) {
        icon.src = '../assets/images/icon-menu-close.svg';
        icon.alt = 'Close Menu';
      } else {
        icon.src = '../assets/images/icon-menu.svg';
        icon.alt = 'Menu';
      }
    });
  
    overlay.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      document.body.classList.remove('menu-open');
      icon.src = '../assets/images/icon-menu.svg';
      icon.alt = 'Menu';
    });
  });