function verificarLogin() {
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

   //Verifica se o usuario está correto
   if (usuario == 'admin' && senha == '123') {
   localStorage.setItem('estaLogado', 'true');
   localStorage.setItem('nomeUsuario', usuario);
   habilitarAgendamentos();
   FazerLogin();    
        } else {
        alert('Login inválido');
    }
}
function habilitarAgendamentos() {
   // Habilita o link para "Agendamentos"
   document.getElementById('menu-tops-active').removeAttribute('disabled');
}

   // Verificação inicial ao carregar a página
   
window.onload = function() {
   if (localStorage.getItem('estaLogado') === 'true') {
   habilitarAgendamentos();
   FazerLogin();  
}  
} 
function FazerLogin() {
       let nomeUsuario = localStorage.getItem('nomeUsuario');    
    // Selecionando os elementos a serem alterados
   const formLogin = document.getElementById('loginForm');
   const mensagemBoasVindas = document.createElement('p');

   // cria a mensagem de boas-vindas
   mensagemBoasVindas.textContent = "Seja bem-vindo, " + nomeUsuario + " ! "; 
   mensagemBoasVindas.classList.add('menboasvindas');  
     
   //realiza a troca da tela de login pela tela de boas vindas
   formLogin.parentNode.replaceChild(mensagemBoasVindas, formLogin);
   
   // Cria um botão sair
   const botaoLogout = document.createElement('button');
   botaoLogout.textContent = 'Sair';
   botaoLogout.classList.add('loginButton');
   botaoLogout.onclick = logout;

   // botão de logout após a mensagem de boas-vindas
   mensagemBoasVindas.appendChild(botaoLogout);
}
function logout() {
   // Remove o nome do usuário do localStorage e recarrega a página
   localStorage.removeItem('nomeUsuario');
   localStorage.removeItem('estaLogado');
   location.reload();
   } 