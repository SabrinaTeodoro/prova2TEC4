const temLivros = localStorage.getItem('livros');
const listLivros = JSON.parse(temLivros);
const start = () => {
    const btns = document.getElementsByClassName("book");
    Array.from(btns).forEach(e => {
        let p = document.createElement('p');
        let pContent = document.createTextNode('Quantidade: 0');
        e.children[0].appendChild(p);
    });
    
    
    if(temLivros){
        
        //atualiza carrinho
        atualizaPag();
        //plota no html
    }
    
}
const atualizaPag = () => {
    let car = document.getElementById('quantity');
    let livroDaVez = null;
    let qt = 0;
    listLivros.forEach((e) => {
        console.log(e.un);
        qt += e.un;
        livroDaVez = document.getElementById(e.nome);
        livroDaVez.innerText = e.un;
    });
    car.innerText = qt;
}
start();
