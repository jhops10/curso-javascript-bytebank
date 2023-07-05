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

contaCorrenteC1.depositar(500);
contaCorrenteC1.sacar(200);


