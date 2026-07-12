const personagens = [
    {
        nome: "Kael",
        classe: "Paladino",
        raca: "Humano",
        nivel: 8,
        imagem: "imagens/personagens/kael.jpg"
    }
];

const sessoes = [
    {
        titulo: "Sessão 01",
        data: "12/07/2026",
        resumo: "Os aventureiros chegaram a Neverwinter..."
    }
];

const galeria = [
    {
        imagem: "imagens/galerias/castelo.jpg",
        descricao: "Castelo de Ravenhold."
    }
];

const mapas = [
    {
        nome: "Mapa do Reino",
        imagem: "imagens/mapas/reino.jpg"
    }
];

const videos = [
    {
        titulo: "Sessão 01",
        url: "https://www.youtube.com/embed/SEU_VIDEO"
    }
];
const areaPersonagens = document.querySelector("#personagens .cards");

personagens.forEach(personagem => {

    areaPersonagens.innerHTML += `
        <div class="card">
            <img src="${personagem.imagem}">
            <h3>${personagem.nome}</h3>
            <p>${personagem.raca}</p>
            <p>${personagem.classe}</p>
            <p>Nível ${personagem.nivel}</p>
        </div>
    `;

});
