// Crie uma função que exiba uma mensagem de boas-vindas ao usuário quando a página for carregada. Utilize essa função para personalizar a experiência de cada usuário.
const name = prompt("Qual o seu nome?");

const welcome = () => {
    alert(`Bem-vindo(a), ${name}!`);
}

welcome();