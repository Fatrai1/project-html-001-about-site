const form = document.querySelector('.container form');
form.addEventListener('submit', (ev) => {
    const name = document.querySelector('input[name=name]');
    const email = document.querySelector('input[name=email]');
    const comment = document.querySelector('input[name=comment]');

if ( parseInt(name.getAttribute('minlenght')) > name['value'].lenght) {
    alert('A név mezőnek legalább 5 karakter hosszúnak kell lennie!');
    ev.parentDefault();
}

})

