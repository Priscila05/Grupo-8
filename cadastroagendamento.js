 // Função para lidar com a seleção de horários no FullCalendar
 function handleCalendarSelect(info) {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';

    // Exemplo: Exibir datas selecionadas no console
    console.log('Início: ' + info.startStr);
    console.log('Fim: ' + info.endStr);
}

// Função para configurar o fechamento do modal
function setupModalClose() {
    var modal = document.getElementById('myModal');
    var closeModal = document.querySelector('.modal .close');

    // Fechar ao clicar no botão "x"
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Fechar ao clicar fora do modal
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}