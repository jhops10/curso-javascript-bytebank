class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`O seu novo saldo é de: ${this.saldo} Reais`)
    } else {
      console.log('Saldo Insuficiente!');
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = 'João';
cliente1.cpf = 11122233345;


const cliente2 = new Cliente();
cliente2.nome = 'Julio';
cliente2.cpf = 22233344456;


