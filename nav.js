const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'aside active';
}

const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
    document.body.style.overflow= "initial";
}

 document.getElementById('menubtn').onclick = e => {
    e.preventDefault();
    document.body.style.overflow='hidden';
    openMenu();
 }

document.querySelector('aside button.close').onclick = e => {
    closeMenu();
}

document.querySelector('.backdrop').onclick = e => {
    closeMenu();
}

