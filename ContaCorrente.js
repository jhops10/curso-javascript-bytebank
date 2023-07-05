export default class ContaCorrente {
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