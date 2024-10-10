const form = document.getElementById('formConta');
const tabelaContas = document.getElementById('tabelaContas').getElementsByTagName('tbody')[0];
let contas = [];

// Função para adicionar uma nova conta
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;

    const novaConta = { descricao, valor, tipo };
    contas.push(novaConta);
    atualizarTabela();
    form.reset(); // Limpa o formulário após a adição
});

// Função para atualizar a tabela com as contas
function atualizarTabela() {
    tabelaContas.innerHTML = ''; // Limpa a tabela antes de adicionar as novas contas

    contas.forEach((conta, index) => {
        const row = tabelaContas.insertRow();

        const cellDescricao = row.insertCell(0);
        const cellValor = row.insertCell(1);
        const cellTipo = row.insertCell(2);
        const cellAcoes = row.insertCell(3);

        cellDescricao.textContent = conta.descricao;
        cellValor.textContent = `R$ ${conta.valor.toFixed(2)}`;
        cellTipo.textContent = conta.tipo === 'receber' ? 'Contas a Receber' : 'Contas a Pagar';

        // Botão de remover
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => {
            contas.splice(index, 1); // Remove a conta do array
            atualizarTabela(); // Atualiza a tabela
        };
        cellAcoes.appendChild(btnRemover);
    });
}
