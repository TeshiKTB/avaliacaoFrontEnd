

if (localStorage.getItem('carrinho') == null) {
    localStorage.setItem('carrinho', '[]')
}

if (localStorage.getItem('produtos') == null) {
    criaProdutos()
}


function criaProdutos() {
    let produtos = [
        { id: 0, descricao: 'Galaxy S22 Ultra', estoque: 10, preco: 5999.89, segmento: 'Celular', icon: '<i class="bi bi-android"></i>'},
        { id: 1, descricao: 'Galaxy S22', estoque: 2, preco: 4599.89, segmento: 'Celular', icon: '<i class="bi bi-android"></i>'},
        { id: 2, descricao: 'Galaxy S21', estoque: 3, preco: 2499.89, segmento: 'Celular', icon: '<i class="bi bi-android"></i>'},
        { id: 3, descricao: 'Galaxy S20 FE', estoque: 8, preco: 1989.89, segmento: 'Celular', icon: '<i class="bi bi-android"></i>'},
        { id: 4, descricao: 'iPhone 12', estoque: 30, preco: 4999.89, segmento: 'Celular', icon: '<i class="bi bi-apple"></i>'},
        { id: 5, descricao: 'iPhone 12 Pro', estoque: 31, preco: 6591.89, segmento: 'Celular', icon: '<i class="bi bi-apple"></i>'},
        { id: 6, descricao: 'iPhone 13', estoque: 32, preco: 5592.89, segmento: 'Celular', icon: '<i class="bi bi-apple"></i>'},
        { id: 7, descricao: 'iPhone 13 Pro', estoque: 33, preco: 7662.89, segmento: 'Celular', icon: '<i class="bi bi-apple"></i>'},
        { id: 8, descricao: 'Xiaomi Mi 10', estoque: 15, preco: 2790.89, segmento: 'Celular', icon: '<i class="bi bi-android"></i>'},
        { id: 9, descricao: 'Xiaomi Mi 10T', estoque: 16, preco: 2490.89, segmento: 'Celular', icon: '<i class="bi bi-android"></i>'},

        { id: 10, descricao: 'Samsung Neo QLED 8K 55"', estoque: 1, preco: 8199.79, segmento: 'TV', icon: '<i class="bi bi-tv"></i>'},
        { id: 11, descricao: 'Samsung Neo QLED 8K 49"', estoque: 2, preco: 7229.79, segmento: 'TV', icon: '<i class="bi bi-tv"></i>'},
        { id: 12, descricao: 'Samsung QLED 4K 55"', estoque: 3, preco: 3799.79, segmento: 'TV', icon: '<i class="bi bi-tv"></i>'},
        { id: 13, descricao: 'Samsung QLED 4K 65"', estoque: 4, preco: 4969.79, segmento: 'TV', icon: '<i class="bi bi-tv"></i>'},
        { id: 14, descricao: 'Samsung Crystal UHD 55"', estoque: 5, preco: 2699.79, segmento: 'TV', icon: '<i class="bi bi-tv"></i>'},
        { id: 15, descricao: 'Samsung Crystal UHD 65"', estoque: 6, preco: 3799.79, segmento: 'TV', icon: '<i class="bi bi-tv"></i>'},
        { id: 16, descricao: 'Samsung Crystal UHD 49"', estoque: 7, preco: 2199.79, segmento: 'TV', icon: '<i class="bi bi-tv"></i>'},
        { id: 17, descricao: 'LG Quantum Dot 65"', estoque: 8, preco: 4969.79, segmento: 'TV', icon: '<i class="bi bi-tv"></i>'},
        { id: 18, descricao: 'LG OLED Evo Gallery Edition 120Hz 65"', estoque: 9, preco: 18999.79, segmento: 'TV', icon: '<i class="bi bi-tv"></i>'},
        { id: 19, descricao: 'Philips AndroidTV 4K 50"', estoque: 10, preco: 2696.79, segmento: 'TV', icon: '<i class="bi bi-tv"></i>'},

        { id: 20, descricao: 'Lenovo IdeaPad 3i 15,6" Ryzen 5', estoque: 3, preco: 3199.69, segmento: 'Notebook', icon: '<i class="bi bi-laptop"></i>'},
        { id: 21, descricao: 'Lenovo IdeaPad 3i 15,6" Core i5', estoque: 6, preco: 3299.69, segmento: 'Notebook', icon: '<i class="bi bi-laptop"></i>'},
        { id: 22, descricao: 'Samsung Galaxy Book', estoque: 2, preco: 4299.69, segmento: 'Notebook', icon: '<i class="bi bi-laptop"></i>'},
        { id: 23, descricao: 'Samsung Book Core i3', estoque: 1, preco: 3001.69, segmento: 'Notebook', icon: '<i class="bi bi-laptop"></i>'},
        { id: 24, descricao: 'Asus ZenBook 13" Core i5', estoque: 5, preco: 4999.69, segmento: 'Notebook', icon: '<i class="bi bi-laptop"></i>'},
        { id: 25, descricao: 'Asus E510MA Celeron', estoque: 90, preco: 1999.69, segmento: 'Notebook', icon: '<i class="bi bi-laptop"></i>'},
        { id: 26, descricao: 'Positivo Atom 14"Celeron', estoque: 101, preco: 1499.69, segmento: 'Notebook', icon: '<i class="bi bi-laptop"></i>'},
        { id: 27, descricao: 'DELL Inspiron 15,6" Pentium Gold', estoque: 20, preco: 2499.69, segmento: 'Notebook', icon: '<i class="bi bi-laptop"></i>'},
        { id: 28, descricao: 'DELL Latitude 5420 14"', estoque: 2, preco: 5499.69, segmento: 'Notebook', icon: '<i class="bi bi-laptop"></i>'},
        { id: 29, descricao: 'Acer Nito 5+ Ryzen 5 GTX 1650', estoque: 5, preco: 5389.69, segmento: 'Notebook', icon: '<i class="bi bi-laptop"></i>'}
    ]

    localStorage.setItem('produtos', JSON.stringify(produtos))
}


function preencheTabela() {
    let tabela = document.getElementById('linhastabela')
    let produtos = JSON.parse(localStorage.getItem('produtos'))

    produtos = embaralha(produtos)
    tabela.innerHTML = ''

    for (let i = 0; i < 12; i++) {
        tabela.innerHTML += `<tr>
                                <td>${produtos[i].icon} ${produtos[i].descricao}</td>
                                <td>R$${produtos[i].preco}</td>
                                <td><button class="btn btn-outline-dark" onclick="adicionaNoCarrinho(${produtos[i].id})">Adicionar ao carrinho <i class="bi bi-cart-plus"></i></button></td>
                             </tr>`
    }

}

function embaralha(lista) {
    return lista
        .map(n => ({ n, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ n }) => n)
}

function adicionaNoCarrinho(id) {
    let produtos = JSON.parse(localStorage.getItem('produtos'))
    let carrinho = JSON.parse(localStorage.getItem('carrinho'))
    let posCarrinho = carrinho.findIndex(e => e.id == id)
    let posProdutos = produtos.findIndex(e => e.id == id)


    if (posCarrinho != -1) {

        if (produtos[posProdutos].estoque == carrinho[posCarrinho].quantidade) {
            alert('Não é possivel adicionar mais desse item. Não há mais estoque disponível.')
            return
        } else {
            carrinho[posCarrinho].quantidade++
        }
    } else {
        carrinho.push({
            id: produtos[posProdutos].id,
            descricao: produtos[posProdutos].descricao,
            preco: produtos[posProdutos].preco,
            quantidade: 1,
            icon: produtos[posProdutos].icon
        })
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho))
    alert('Item adicionado!')
}


function preencheCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'))
    let tabela = document.getElementById('linhascarrinho')
    let valorTotal = 0
    let divValor = document.getElementById('divvalor')
    tabela.innerHTML = ''

    if (carrinho.length == 0) {
        tabela.innerHTML += 'Nenhum item adicionado ao carrinho'
        divValor.innerHTML = ''
        return
    }

    for (let i = 0; i < carrinho.length; i++) {
        valorTotal += carrinho[i].preco * carrinho[i].quantidade

        tabela.innerHTML += `<tr>
                                <td>${carrinho[i].icon} ${carrinho[i].descricao}</td>
                                <td>R$${carrinho[i].preco}</td>
                                <td><button class="btn btn-outline-danger" onclick="decrementaItemCarrinho(${carrinho[i].id})"><i class="bi bi-cart-dash"></i></button><input id="carrinho${carrinho[i].id}" type="text" class="form-control w-15 text-center d-inline mx-2 align-middle mybtn" readonly value="${carrinho[i].quantidade}"/><button class="btn btn-outline-dark" onclick="incrementaItemCarrinho(${carrinho[i].id})"><i class="bi bi-cart-plus"></i></button>
                                <td><button class="btn btn-danger" onclick="removeItemCarrinho(${carrinho[i].id})">Remover</button></td>
                             </tr>`
    }

    divValor.innerHTML = `Valor total: R$${valorTotal.toFixed(2)}`
}


function removeItemCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'))
    let pos = carrinho.findIndex(e => e.id == id)

    carrinho.splice(pos, 1)

    localStorage.setItem('carrinho', JSON.stringify(carrinho))
    preencheCarrinho()
}


function decrementaItemCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'))
    let pos = carrinho.findIndex(e => e.id == id)

    if (carrinho[pos].quantidade == 1) {
        removeItemCarrinho(id)
    } else {
        carrinho[pos].quantidade--
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
        preencheCarrinho()
    }
}

function incrementaItemCarrinho(id) {

    let produtos = JSON.parse(localStorage.getItem('produtos'))
    let carrinho = JSON.parse(localStorage.getItem('carrinho'))
    let posCarrinho = carrinho.findIndex(e => e.id == id)
    let posProdutos = produtos.findIndex(e => e.id == id)

    if (produtos[posProdutos].estoque == carrinho[posCarrinho].quantidade) {
        alert('Não é possivel adicionar mais desse item. Não há mais estoque disponível.')
        return
    }
    carrinho[posCarrinho].quantidade++

    localStorage.setItem('carrinho', JSON.stringify(carrinho))

    preencheCarrinho()
}


function preencheMenu() {
    
    let produtos = JSON.parse(localStorage.getItem('produtos'))
    console.log(produtos[0])
    let tabela = document.getElementById('linhasmenu')
    let filtroSegmento = document.getElementById('segmento').value
    let filtroNome = document.getElementById('filtronome').value


    switch (filtroSegmento) {
        case '1':
            produtos = produtos.filter(e => e.segmento == 'Celular')
            break
        case '2':
            produtos = produtos.filter(e => e.segmento == 'Notebook')
            break
        case '3':
            produtos = produtos.filter(e => e.segmento == 'TV')
            break
    }

    if ( filtroNome != '' ) {
        produtos = produtos.filter(e => e.descricao.toLowerCase().includes(filtroNome))
    }

    tabela.innerHTML = ''
    for (let i = 0; i < produtos.length; i++) {
        tabela.innerHTML += `<tr>
                                <td>${produtos[i].icon} ${produtos[i].descricao}</td>
                                <td>R$${produtos[i].preco}</td>
                                <td>${produtos[i].segmento}</td>
                                <td><button class="btn btn-outline-dark" onclick="adicionaNoCarrinho(${produtos[i].id})">Adicionar ao carrinho <i class="bi bi-cart-plus"></i></button></td>
                             </tr>`
    }
}

function pegaTecla(evento) {
    if ( evento.key == 'Enter' ) {
        preencheMenu()
    }
}