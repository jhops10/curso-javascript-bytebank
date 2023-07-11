import Cliente from './Cliente.js';
import Diretor from './Funcionarios/Diretor.js';
import Gerente from './Funcionarios/Gerente.js';
import ContaCorrente from './Conta/ContaCorrente.js';
import ContaPoupanca from './Conta/ContaPoupanca.js';
import ContaSalario from './Conta/ContaSalario.js';
import SistemaAutenticacao from './SistemaAutenticacao.js'


const cliente1 = new Cliente('João', 11122233345);

const contaCorrenteC1 = new ContaCorrente(1001, cliente1);
const contaPoupancaC1 = new ContaPoupanca(0, cliente1, 1001);
const contaSalarioC1 = new ContaSalario(cliente1);

const diretor = new Diretor('Ronaldo', 10000, 12332145631);
diretor.cadastrarSenha('123456789');
const gerente = new Gerente('Astolfo', 5000, 87662364531);
gerente.cadastrarSenha('123');



//Ações

const estaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(estaLogado);