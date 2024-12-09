class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';

        if (this.tipo.toLowerCase() === 'mago') {
            ataque = 'magia';
        } else if (this.tipo.toLowerCase() === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo.toLowerCase() === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo.toLowerCase() === 'ninja') {
            ataque = 'shuriken';
        } else {
            ataque = 'ataque desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Aragon', 30, 'Guerreiro');
const heroi2 = new Heroi('Gandalf', 100, 'Mago');
const heroi3 = new Heroi('Bruce', 25, 'Monge');
const heroi4 = new Heroi('Naruto', 20, 'Ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();