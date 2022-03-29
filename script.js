const btn = document.querySelector('button');
const list = document.querySelector('ul');

let isCollapsed = true;

btn.addEventListener('click', () => {
  if (isCollapsed) {
    list.style.maxHeight = '200rem';
    btn.style.transform = 'rotateZ(-180deg)';
  } else {
    list.style.maxHeight = '20vw';
    btn.style.transform = 'rotateZ(0)';
  }
  isCollapsed = !isCollapsed;
});
