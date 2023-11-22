let pratos = []
let nome = document.getElementById("nome");
let ingredientes = document.getElementById("ingredientes");
let tipoPrato = document.getElementById("tipoPrato");
let idPrato = "";
let btnAdd = document.getElementById("btn-add");
let btnAtualizar = document.getElementById("btn-atualizar");


const listaDinamica = () => {
    const container = document.getElementById("listando-pratos");
    pratos = [];
    container.innerHTML = "";
    const url = 'http://localhost:3000/listar/pratos';
    fetch(url, {
        method:'GET',
        headers: {
            'Content-Type': 'application/json', // Se a API esperar um conteúdo em JSON
            // Adicione quaisquer outros cabeçalhos necessários aqui
        },
    })
     .then(response => {
        return response.json();
     })
     .then(data => {
        pratos.push(...data);
        pratos.map((item, index) => {
        container.innerHTML += `<span>${item.nome} - ${item.ingredientes} - ${item.tipo_de_prato} <button class="btn-adiciona-prato" onClick="removerItem(${index})" type="button">remover</button> <button class="btn-adiciona-prato" onClick="pegaPratoInformacoes(${index})" type="button">Editar</button><span/>`
    }); 
     });
}
const adicionarPrato = async () => {
    const url = 'http://localhost:3000/prato/cadastro';
    if((nome.value.length > 0 && ingredientes)) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome.value,
                ingredientes: ingredientes.value,
                tipo_de_prato: tipoPrato.value
            })
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data)
            listaDinamica();
        })
    }
}

const removerItem = (index) => {
    pratos.splice(index,1);
    nome.value = "";
    ingredientes.value = "";
    tipoPrato.value = "";
    listaDinamica();
}

const pegaPratoInformacoes = (index) => {
    btnAdd.style.display = 'none';
    btnAtualizar.style.display = 'block';
    nome.value = pratos[index].nome;
    ingredientes.value = pratos[index].ingredientes;
    tipoPrato.value = pratos[index].tipo_de_prato;
    idPrato = pratos[index].id;
}

const atualizarPrato = () => {
    btnAtualizar.style.display = 'none';
    btnAdd.style.display = 'block';
    const url = 'http://localhost:3000/atualizar/pratos';
    fetch(url, {
        method:"PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id_prato: idPrato,
            nome: nome.value,
            ingredientes: ingredientes.value,
            tipo_de_prato: tipoPrato.value
        })
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        if(data)
        nome.value = "";
        ingredientes.value = "";
        tipoPrato.value = "";
        idPrato = "";
        listaDinamica();
    })
}