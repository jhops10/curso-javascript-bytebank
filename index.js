import Cliente from './Cliente.js'
import ContaCorrente from './ContaCorrente.js'
import ContaPoupanca from './ContaPoupanca.js';


const cliente1 = new Cliente('João', 11122233345);

const contaCorrenteC1 = new ContaCorrente(1001, cliente1);
const contaPoupancaC1 = new ContaPoupanca(0, cliente1, 1001);




//Ações

contaCorrenteC1.depositar(500);
contaCorrenteC1.sacar(100);

console.log(contaCorrenteC1);



