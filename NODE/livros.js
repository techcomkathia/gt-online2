const Livro = require('./classeLivro.js')

let livros = [
    {
        nome:'Harry Potter e a pedra filosofal',
        autor:'J.K. Rowling',
        ano:1997,

    },
    {
        nome:'Harry Potter e a camara secreta',
        autor:'J.K. Rowling',
        ano:1998,
        preco: 15.00
    },
    {
        nome: 'Senhor dos aneis',
        autor: 'J.R.R. Tolkien', 
        ano: 1954,
        preco: 30.00
    },
    {
        nome: 'Crepusculo',
        autor: 'Stephen King',
        ano: 1986,
        preco: 40.00
    },
    {
        nome: 'Sítio do Picapau', 
        autor: 'Jorge Amado', 
        ano: 1988, 
        preco: 20.00
    }    
]

// novo livro é uma instância da classe Livro
// objeto do tipo Livro
let novoLivro = new Livro('Garota exemplar', 'J.R.R. Tolkien', 1999, 20.00)
novoLivro.mostrarDetalhes()


module.exports = livros