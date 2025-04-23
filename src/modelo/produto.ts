export default class Produto {
    codigo: number;
    descricao: string;
    marca: string;
    preco: number;

    constructor(codigo: number, descricao: string, marca: string, preco: number) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.marca = marca;
        this.preco = preco;
    }
}