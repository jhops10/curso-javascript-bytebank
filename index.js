import Cliente from './Cliente.js';
import ContaCorrente from './Conta/ContaCorrente.js';
import ContaPoupanca from './Conta/ContaPoupanca.js';
import ContaSalario from './Conta/ContaSalario.js';


const cliente1 = new Cliente('João', 11122233345);

const contaCorrenteC1 = new ContaCorrente(1001, cliente1);
const contaPoupancaC1 = new ContaPoupanca(0, cliente1, 1001);
const contaSalarioC1 = new ContaSalario(cliente1);

//Ações

contaCorrenteC1.depositar(500);
contaCorrenteC1.sacar(100);

contaPoupancaC1.depositar(500);
contaPoupancaC1.sacar(100);

console.log(contaCorrenteC1);
console.log(contaPoupancaC1);
console.log(contaSalarioC1);



