const aside = document.querySelector('aside');
document.querySelector('.toggle-btn').addEventListener('click', () => {
  aside.style.display = aside.style.display === 'none' ? 'block' : 'none';
});