class Retangulo {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }


    // Método para calcular o perímetro do retângulo
    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}


function iniciar_triangulo() {
    const largura = 5;
    const altura = 10;
    const ret = new Retangulo(largura, altura);

    console.log(`Largura: ${ret.largura}, Altura: ${ret.altura}`);
    console.log(`Área: ${ret.calcularArea()}`);
    console.log(`Perímetro: ${ret.calcularPerimetro()}`);
}


iniciar_triangulo();
