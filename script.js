
//HORÁRIOS

const dia = document.getElementById("dia");
const modalidade = document.getElementById("modalidade");
const resultado = document.getElementById("resultado-horarios");

const horarios = {
    "jiu-jitsu": [
        "08:00 — Baby",
        "09:00 — Kids",
        "10:00 — Teens",
        "11:00 — Juvenil",
        "12:00 — Adulto",
        "14:00 — Baby",
        "15:00 — Kids",
        "16:00 — Teens",
        "17:00 — Juvenil",
        "18:00 — Adulto",
        "19:00 — Adulto",
        "20:00 — Adulto"
    ],

    "muay-thai": [
        "08:00 — Baby",
        "09:00 — Kids",
        "10:00 — Teens",
        "11:00 — Juvenil",
        "12:00 — Adulto",
        "14:00 — Baby",
        "15:00 — Kids",
        "16:00 — Teens",
        "17:00 — Juvenil",
        "18:00 — Adulto",
        "19:00 — Adulto",
        "20:00 — Adulto"
    ],

    "boxe": [
        "09:00 — Kids",
        "10:00 — Teens",
        "11:00 — Juvenil",
        "12:00 — Adulto",
        "15:00 — Kids",
        "16:00 — Teens",
        "17:00 — Juvenil",
        "18:00 — Adulto",
        "19:00 — Adulto",
        "20:00 — Adulto"
    ],

    "judo": [
        "08:00 — Baby",
        "09:00 — Kids",
        "10:00 — Teens",
        "11:00 — Juvenil",
        "12:00 — Adulto",
        "14:00 — Baby",
        "15:00 — Kids",
        "16:00 — Teens",
        "17:00 — Juvenil",
        "18:00 — Adulto",
        "19:00 — Adulto",
        "20:00 — Adulto"
    ],

    "mma": [
        "10:00 — Teens",
        "11:00 — Juvenil",
        "12:00 — Adulto",
        "16:00 — Teens",
        "17:00 — Juvenil",
        "18:00 — Adulto",
        "19:00 — Adulto",
        "20:00 — Adulto"
    ]
};

function mostrarHorarios() {
    const modalidadeEscolhida = modalidade.value;
    const diaEscolhido = dia.options[dia.selectedIndex].text;

    const lista = horarios[modalidadeEscolhida];

    let conteudo = `
        <h3>${modalidade.options[modalidade.selectedIndex].text}</h3>
        <p><strong>${diaEscolhido}</strong></p>
    `;

    lista.forEach(function(horario) {
        conteudo += `<p>${horario}</p>`;
    });

    resultado.innerHTML = conteudo;
}

dia.addEventListener("change", mostrarHorarios);
modalidade.addEventListener("change", mostrarHorarios);

mostrarHorarios();


// PLANOS

const botoesPeriodo = document.querySelectorAll(".periodos-planos button");

const precosPlanos = {
    mensal: {
        one: "R$ 249,90/mês",
        duo: "R$ 299,90/mês",
        unlimited: "R$ 349,90/mês"
    },

    trimestral: {
        one: "R$ 237,40/mês",
        duo: "R$ 284,90/mês",
        unlimited: "R$ 332,40/mês"
    },

    anual: {
        one: "R$ 224,90/mês",
        duo: "R$ 269,90/mês",
        unlimited: "R$ 314,90/mês"
    }
};

function atualizarPrecos(periodo) {
    document.getElementById("preco-one").textContent =
        precosPlanos[periodo].one;

    document.getElementById("preco-duo").textContent =
        precosPlanos[periodo].duo;

    document.getElementById("preco-unlimited").textContent =
        precosPlanos[periodo].unlimited;
}

let periodoSelecionado = "mensal";

botoesPeriodo.forEach(function(botao) {

    botao.addEventListener("click", function() {

        periodoSelecionado = botao.dataset.periodo;

        atualizarPrecos(periodoSelecionado);
    });

});


//FORMULÁRIO

const formulario = document.getElementById("formulario-contato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    const numeroWhatsApp = "5521988721157";

    const texto =
        "Olá, AMATZ!\n\n" +
        "Nome: " + nome + "\n" +
        "E-mail: " + email + "\n" +
        "Telefone: " + telefone + "\n\n" +
        "Mensagem:\n" + mensagem;

    const linkWhatsApp =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(texto);

    window.open(linkWhatsApp, "_blank");
});

const botoesPlano = document.querySelectorAll(".btn-plano");

botoesPlano.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const planoEscolhido = this.getAttribute("data-plano");

        let preco;

        if (planoEscolhido === "AMATZ ONE") {
            preco = document.getElementById("preco-one").textContent;
        }

        else if (planoEscolhido === "AMATZ DUO") {
            preco = document.getElementById("preco-duo").textContent;
        }

        else if (planoEscolhido === "AMATZ UNLIMITED") {
            preco = document.getElementById("preco-unlimited").textContent;
        }

        const nomesPeriodos = {
            mensal: "Mensal",
            trimestral: "Trimestral",
            anual: "Anual"
        };

        const campoMensagem = document.getElementById("mensagem");

        campoMensagem.value =
            "Olá! Tenho interesse no plano " +
            planoEscolhido +
            ".\n\n" +
            "Período: " + nomesPeriodos[periodoSelecionado] + "\n" +
            "Valor: " + preco + "\n\n" +
            "Gostaria de receber mais informações.";
    });

});

// MENU E ROLAGEM

const secoes = document.querySelectorAll("section");
const linksMenu = document.querySelectorAll("nav a");

window.addEventListener("scroll", function() {

    let secaoAtual = "";

    secoes.forEach(function(secao) {

        const topo = secao.offsetTop;
        const altura = secao.offsetHeight;

        if (
            window.scrollY >= topo - 200 &&
            window.scrollY < topo + altura - 200
        ) {
            secaoAtual = secao.getAttribute("id");
        }

    });

    linksMenu.forEach(function(link) {

        link.classList.remove("ativo");

        if (link.getAttribute("href") === "#" + secaoAtual) {
            link.classList.add("ativo");
        }

    });

});

// ROLAGEM SUAVE AO CLICAR NO MENU

linksMenu.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        var destino = this.getAttribute("href");
        var secaoDestino = document.querySelector(destino);

        if (!secaoDestino) {
            return;
        }

        var inicio =
            window.pageYOffset ||
            document.documentElement.scrollTop;

        var fim = secaoDestino.offsetTop;

        var distancia = fim - inicio;

        var duracao = 900;
        var inicioTempo = Date.now();

        var animacao = setInterval(function() {

            var tempoPassado = Date.now() - inicioTempo;

            var progresso = tempoPassado / duracao;

            if (progresso > 1) {
                progresso = 1;
            }

            /* suavização */
            var movimento;

            if (progresso < 0.5) {
                movimento = 2 * progresso * progresso;
            } else {
                movimento =
                    -1 +
                    (4 - 2 * progresso) * progresso;
            }

            window.scrollTo(
                0,
                inicio + distancia * movimento
            );

            if (progresso === 1) {
                clearInterval(animacao);
            }

        }, 16);

    });

});