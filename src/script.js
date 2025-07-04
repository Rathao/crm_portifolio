 
        // Script para o menu mobile
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Fechar o menu mobile ao clicar em um link
        document.querySelectorAll('#mobile-menu a').forEach(item => {
            item.addEventListener('click', () => {
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });
    