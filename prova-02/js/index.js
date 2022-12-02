const listLivros = [];
//---index
//eventos dos botoes a uma var
//  acessar btns OK, CHAOS!
//  por event (id) saber qual livro eles estao se referindo OK, CHAOS!
//  incrementar no resp. obj la no localStorage
//  OBS: aloca todos ou somente os comprados? -> 2°
//aloca var no localstorage -> update html E/OU?
//arr com qtd de cada book
//---cart
//atualiza carrrinho
//acessa arr localStorage -> plota no html dos resp. books
const start = () => {
    //localStorage.removeItem('livros');
    const btns = document.getElementsByClassName("buyButton");
    Array.from(btns).forEach(e => {
        e.onclick = incrementa;
    });
}
const incrementa = (event) => {
    let key = true;
    let refLivro = event.target.parentNode.children[0].id;
    console.log(refLivro);
    // -------- add somente os compardos
    //  no ato de clique -> existe no localStorage?
    //      -> sim -> inc
    //      -> nao -> add no LS
    //incrementa resp.
    
    //--------------------let temLivros = localStorage.getItem('livros');
    for(let i = 0; i < listLivros.length; i++){
        let livroDaVez = listLivros[i];
        console.log(livroDaVez.nome == refLivro);
        if(livroDaVez.nome == refLivro){//verif. existencia
            livroDaVez.un += 1;
            key = false;
            break;
        }
    }
    if(key){//caso nao tenha -> cria
        listLivros.push(livro(refLivro));
    }
    livrosOnLocalStorage();
    //atualiza carrinho
    atualizaCar();
}
const livro = (nome) => {//para armazenamento no localStorage
    return{
        nome: nome,
        un: 1
    }
}
const livrosOnLocalStorage = () => {
    localStorage.setItem('livros', JSON.stringify(listLivros));
}
const atualizaCar = () => {
    let car = document.getElementById('quantity');
    let qt = 0;
    listLivros.forEach((e) => {
        qt += e.un;
    });
    car.innerText = qt;
}
start();
