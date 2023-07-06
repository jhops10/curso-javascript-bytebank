import Cliente from "./Cliente.js";

export default class ContaCorrente {
  agencia;
  _cliente;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  _saldo;

  get saldo() {
    return this._saldo;
  }


  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
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