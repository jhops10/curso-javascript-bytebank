class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  _saldo;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      console.log(`O seu novo saldo é de: ${this._saldo} Reais`)
    } else {
      console.log('Saldo Insuficiente!');
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
      console.log(`Depósito efetuado com sucesso. Saldo atual: ${this._saldo}`);
    } else {
      console.log('Você não pode depositar um valor negativo ou igual a 0.');
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = 'João';
cliente1.cpf = 11122233345;


const cliente2 = new Cliente();
cliente2.nome = 'Julio';
cliente2.cpf = 22233344456;


const contaCorrenteC1 = new ContaCorrente();
contaCorrenteC1._saldo = 0;
contaCorrenteC1.agencia = 1001;

contaCorrenteC1.depositar(500);
contaCorrenteC1.sacar(200);


