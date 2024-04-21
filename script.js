//*=>> A CLASSE FOI DEFINIDA COM O NOME DE (HeroiDev)
class HeroiDev {
  constructor(tipo) {
    this.tipo = tipo;
  }

  //!=>> MÉTODO CRIADO COMO (atacar)
  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou uma magia poderosicima ☠️';
        break;
      case 'guerreiro':
        ataque = 'foi avassalador usando sua espada! 🥴';
        break;
      case 'monge':
        ataque = 'com suas artes marciais, derrotou seus inimigos 💪';
        break;
      case 'dev':
        ataque = 'sofreu com esses desafios. 👨‍💻😅😅😅😅😅';
        break;
      default:
        ataque = 'atacou';
    }
    console.log(`O ${this.tipo} ${ataque}`);
  }
}

const heroi = new HeroiDev('dev');

heroi.atacar(); 