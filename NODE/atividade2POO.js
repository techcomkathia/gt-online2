// definição de uma super classe veículo

class Veiculo {
    #preco
    constructor(numeroRodas, ano, cor, marca, preco) {
        this.#preco = preco
        this.numeroRodas = numeroRodas
        this.ano = ano
        this.cor = cor
        this.marca = marca
    }

    getPreço() {
        return this.#preco
    }

    setPreço(novoPreco) {
        this.#preco = novoPreco
    }

    ligar() {   
        console.log('Veiculo ligado')
    }

    exibirInformacoes() {
        return `Numero de rodas: ${this.numeroRodas} | Ano: ${this.ano} | Cor: ${this.cor} | Marca: ${this.marca} | Preco: ${this.#preco}`
    }
}

// heranca da superclasse veículo

class Moto extends Veiculo {
    constructor(numeroRodas, ano, cor, marca, preco, cilindradas, tipoPartida) {
        super(numeroRodas, ano, cor, marca, preco)
        this.cilindradas = cilindradas
        this.tipoPartida = tipoPartida
    }

    // sobrescreve o metodo da superclasse
    exibirInformacoes(){
        return  `Numero de rodas: ${this.numeroRodas} | Ano: ${this.ano} | Cor: ${this.cor} | Marca: ${this.marca} | Preco: ${this.getPreço()} | Cilindradas: ${this.cilindradas} | Tipo de partida: ${this.tipoPartida}` 
    }

    exibirInformacoes() {   
        return super.exibirInformacoes() + ` | Cilindradas: ${this.cilindradas} | Tipo de partida: ${this.tipoPartida}`
    }


}

// classe filha motocicleta
//todos os atributos da superclasse veículo +
// cilindradas
// tipoPartida
// exibirInformacoes() ---> polimorfismo
