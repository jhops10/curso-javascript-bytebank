export default class Conta {

  constructor(saldoInicial, cliente, agencia) {

    if (this.constructor == Conta) {
      throw new Error('Você não deveria instanciar um objeto do tipo conta.');
    }


    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;

  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }


  get saldo() {
    return this._saldo;
  }


  sacar(valor) {
    throw new Error('Não é possível utilizar o método "sacar" da classe Conta.');
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    } else {
      console.log('Saldo Insuficiente!');
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    }
  }

  transferir(valor, conta) {
    this.sacar(valor);
    conta.depositar(valor);
  }
}