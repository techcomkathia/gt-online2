class Livro {
    #nome
    #autor
    #ano
    constructor(nome, autor, ano, preco){
        this.#nome = nome
        this.#autor = autor
        this.#ano = ano
        this.preco = preco
    }

    mostrarDetalhes(){
        return `Nome: ${this.#nome} | Autor: ${this.#autor} | Ano: ${this.#ano} | Preço: ${this.preco}`
    }

    getNome(){
        return this.#nome
    }

    setNome(novoNome){
        this.#nome = novoNome
    }


}

let livro1 = new Livro('Harry Potter e a pedra filosofal', 'J.K. Rowling', 1997, 15.00)
console.log(livro1.mostrarDetalhes())
console.log(livro1.mostrarDetalhes())
console.log(livro1.getNome())
console.log(Object.keys(livro1))

livro1.setNome('HP e Camara Secreta')
console.log(livro1.mostrarDetalhes())
console.log(livro1.getNome())


// objeto.mostrarDetalhes()
module.exports = Livro