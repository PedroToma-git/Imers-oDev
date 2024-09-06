function pesquisar() {
    // Acessa o elemento HTML com o ID "resultados-pesquisa" e o armazena na variável section.
    // Esse elemento será usado para exibir os resultados da pesquisa.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa);
    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML.
    let resultados = "";

    let nome = "";
    let descricao = "";
    let tag = "";

    // Itera sobre cada jogador no array 'jogadores'.
    for (let jogador of jogadores) {
      nome = jogador.nome.toLowerCase();
      descricao = jogador.descricao.toLowerCase();
      tags = jogador.tags.toLowerCase();
      if(nome == campoPesquisa || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        if (!campoPesquisa){
          section.innerHTML = "<p>Nada foi encontrado! Você precisa digitar o nome do jogador a ser buscado.</p>"
          return;
        }
        console.log(jogador.nome);
        // Constrói o HTML para cada jogador, incluindo nome, descrição e link, e adiciona à string 'resultados'.
      // As templates strings (``) facilitam a criação de strings multi-linha e a inserção de variáveis.
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${jogador.nome}</a>
          </h2>
          <p class="descricao-meta">
            ${jogador.descricao}
          </p>
          <a href=${jogador.link} target="_blank"> Mais informações </a>
        </div>
      `;
      }
    }

    if (!resultados){
      resultados = "<p>Nenhum jogador foi encontrado na base de dados.</p>";
    }
    // Atribui o conteúdo HTML gerado à propriedade innerHTML do elemento section.
    // Isso substitui o conteúdo existente no elemento com os novos resultados da pesquisa.
    section.innerHTML = resultados;
}