document.getElementById('input').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.main-content').classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
});
