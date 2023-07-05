class Cliente {
  nome;
  cpf;
  agencia;
  saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = 'João';
cliente1.cpf = 11122233345;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = 'Julio';
cliente2.cpf = 22233344456;
cliente2.agencia = 1001;
cliente2.saldo = 0;


console.log(cliente1);
console.log(cliente2);