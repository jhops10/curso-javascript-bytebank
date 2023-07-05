export default class ContaCorrente {
  agencia;
  cliente;

  _saldo;

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