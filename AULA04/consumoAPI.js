
// https://viacep.com.br/ws/62041350/json/

//lógica assincrona que retorna uma promessa
fetch('https://viacep.com.br/ws/62041350/json/'). //requisição
then(resposta => (resposta.json())). //tratamento conversao para json para obejto
then(dados => console.log(dados)) // utilizando o json

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json => json.forEach(item => console.log(item.title)))



// consuma a API da FakeStoreAPI, para TODOS OS PRODUTOS.
//Mostre no console uma string formatada, tipo **Nome: Nome Produto - Preço: Preço produto** para todos os item.


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json()) //tratamento conversao para json para obejto
            .then(arrayObjetos=>{
                console.log(arrayObjetos) //mostrar no console
                return arrayObjetos //retornar o array para o proximo then
            })
            .then((arrayObjetos) => {
                arrayObjetos.forEach(item => console.log(`Nome: ${item.title} - Preço: ${item.price}`))}
            )


async function consumirAPI() {
    let resposta = await fetch('https://fakestoreapi.com/products')
    let arrayObjetos = await resposta.json() //tratamento conversao para json para obejto
    console.log(arrayObjetos)
    arrayObjetos.forEach(item => console.log(`Nome: ${item.title} - Preço: ${item.price}`))
}
consumirAPI()