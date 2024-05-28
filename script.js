document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.detalhes-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Mais detalhes sobre o produto em breve!');
        });
    });
});