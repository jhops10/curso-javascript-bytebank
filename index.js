import Cliente from './Cliente.js'
import ContaCorrente from './ContaCorrente.js'


const cliente1 = new Cliente('João', 11122233345);

const cliente2 = new Cliente('Julio', 22233344456);



const contaCorrenteC1 = new ContaCorrente(1001, cliente1);

const contaCorrenteC2 = new ContaCorrente(1001, cliente2);




//Ações
contaCorrenteC1.depositar(100);
contaCorrenteC1.transferir(25, contaCorrenteC2);
contaCorrenteC2.transferir(5, contaCorrenteC1);

console.log(ContaCorrente.numeroDeContas);




