document.addEventListener('DOMContentLoaded', carregarCortes);

        document.getElementById('corteForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio do formulário
            const corteInput = document.getElementById('corte');
            const precoInput = document.getElementById('preco');
            const corteNome = corteInput.value;
            const cortePreco = parseFloat(precoInput.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 }); // Formata o preço com vírgula

            // Adiciona o corte à tabela
            adicionarCorte(corteNome, cortePreco);
            corteInput.value = ''; // Limpa o campo de nome do corte
            precoInput.value = ''; // Limpa o campo de preço
        });

        function adicionarCorte(corteNome, cortePreco) {
            const tabela = document.getElementById('tabelaCortes').querySelector('tbody');

            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
                <td>${corteNome}</td>
                <td>${cortePreco}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editarCorte(this)">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="removerCorte(this)">Remover</button>
                </td>
            `;

            tabela.appendChild(novaLinha);
            salvarCortes(); // Salva a tabela no localStorage
        }

        function editarCorte(botao) {
            const linha = botao.parentElement.parentElement;
            const corteCelula = linha.cells[0];
            const precoCelula = linha.cells[1];

            const novoNome = prompt('Editar Corte:', corteCelula.textContent);
            const novoPreco = prompt('Editar Preço (R$):', precoCelula.textContent);

            if (novoNome && novoPreco && !isNaN(parseFloat(novoPreco))) {
                corteCelula.textContent = novoNome;
                precoCelula.textContent = parseFloat(novoPreco).toLocaleString('pt-BR', { minimumFractionDigits: 2 }); // Formata o preço com vírgula
                salvarCortes(); // Salva a tabela no localStorage
            }
        }

        function removerCorte(botao) {
            // Exibe uma mensagem de confirmação
            const confirmacao = confirm('Tem certeza que deseja excluir este corte?');

            // Se o usuário confirmar, remove o item
            if (confirmacao) {
                const linha = botao.closest('tr'); // Encontra a linha mais próxima ao botão
                linha.remove(); // Remove a linha da tabela
                salvarCortes(); // Salva a tabela no localStorage
            }
        }

        function salvarCortes() {
            const tabela = document.getElementById('tabelaCortes').querySelector('tbody');
            const cortes = [];

            // Coleta os nomes e preços dos cortes da tabela
            for (let i = 0; i < tabela.rows.length; i++) {
                const corteNome = tabela.rows[i].cells[0].textContent;
                const cortePreco = tabela.rows[i].cells[1].textContent;
                cortes.push({ nome: corteNome, preco: cortePreco });
            }

            // Armazena os cortes no localStorage
            localStorage.setItem('cortes', JSON.stringify(cortes));
        }

        function carregarCortes() {
            const cortes = JSON.parse(localStorage.getItem('cortes')) || [];
            
            // Adiciona os cortes armazenados na tabela
            cortes.forEach(corte => adicionarCorte(corte.nome, corte.preco));
        }