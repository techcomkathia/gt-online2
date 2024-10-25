// classe chamada ContaBancaria
class ContaBancaria {
    #saldo
    constructor(titular, agencia, numeroConta, saldo) {
        this.titular = titular
        this.agencia = agencia
        this.numeroConta = numeroConta
        this.#saldo = saldo
    }

    depositar(valor) {
        this.#saldo += valor
    }

    sacar(valor) {
        if (this.#saldo < valor) {
            console.log('Saldo insuficiente')
            return
        }
        else{
            this.#saldo -= valor
        }
        
    }

    extrato() {
        return `Titular: ${this.titular} | Agencia: ${this.agencia} | Conta: ${this.numeroConta} | Saldo: ${this.#saldo}`
    }

    getSaldo() {
        return this.#saldo
    }
}


 let minhaConta = new ContaBancaria('Káthia', 123, 456, 0)
// console.log(minhaConta.extrato())

// minhaConta.depositar(100)
// console.log(minhaConta.extrato())
// minhaConta.sacar(50000)

// console.log(Object.keys(minhaConta))

class ContaPJ extends ContaBancaria {
    // herdados de ContaBancaria
    // titular
    // agencia
    // numeroConta
    // saldo

    constructor(titular, agencia, numeroConta, saldo, cnpj, limiteCredito) {
        super(titular, agencia, numeroConta, saldo)
        // caracteristicas da ContaPJ
        this.cnpj = cnpj
        this.limiteCredito = limiteCredito
    }

    
    // fazerEmprestimo
    fazerEmprestimo(valor) {
        if ( this.limiteCredito < valor) {
            console.log('Saldo insuficiente')
            return
        }
        else{
            this.depositar(valor) 
            this.limiteCredito -= valor
            console.log('Emprestimo realizado')
        }
    }

    // polimorfismo
    extrato() {
        return `Titular: ${this.titular} | Agencia: ${this.agencia} | Conta: ${this.numeroConta} | Saldo: ${this.getSaldo()} | Cnpj: ${this.cnpj} | Limite de credito: ${this.limiteCredito}`
    }
}

// instancia da conta PJ

let minhaContaPJ = new ContaPJ('Káthia', 123, 456, 0, 123456789, 1000)

minhaContaPJ.fazerEmprestimo(500)
console.log(minhaContaPJ.extrato())

console.log(minhaConta.extrato()) 
// sofreu um polimorfismo
console.log(minhaContaPJ.extrato())