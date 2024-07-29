document.getElementById('restartButton').addEventListener('click', function() {
    const logo = document.getElementById('restartLogo');
    logo.classList.add('rotate');

    // Remove a classe após a animação para que possa ser adicionada novamente no próximo clique
    setTimeout(() => {
        logo.classList.remove('rotate');
    }, 1000); // Tempo da animação deve ser igual ao definido no CSS (1s)
});