/*
  Ser autenticavel significa ter o método "autenticar".
*/

export default class SistemaAutenticacao {
  static login(autenticavel, senha) {
    return autenticavel.autenticar(senha);

  }
}