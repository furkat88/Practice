const box = document.querySelectorAll('.box');


    box.forEach(el => el.addEventListener('click', () => {
        el.classList.toggle('red')
    }))
