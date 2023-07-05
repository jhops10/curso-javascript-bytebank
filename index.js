import Cliente from './Cliente.js'
import ContaCorrente from './ContaCorrente.js'


const cliente1 = new Cliente();
cliente1.nome = 'João';
cliente1.cpf = 11122233345;

const cliente2 = new Cliente();
cliente2.nome = 'Julio';
cliente2.cpf = 22233344456;



const contaCorrenteC1 = new ContaCorrente();
contaCorrenteC1._saldo = 0;
contaCorrenteC1.agencia = 1001;
contaCorrenteC1.cliente = cliente1;
contaCorrenteC1.depositar(100);


const contaCorrenteC2 = new ContaCorrente();
contaCorrenteC2._saldo = 0;
contaCorrenteC2.agencia = 1001;
contaCorrenteC2.cliente = cliente2;


//Ações
contaCorrenteC1.transferir(25, contaCorrenteC2);
contaCorrenteC2.transferir(5, contaCorrenteC1);


console.log(contaCorrenteC1);
console.log(contaCorrenteC2);





