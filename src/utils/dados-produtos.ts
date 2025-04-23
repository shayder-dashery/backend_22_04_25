import dados from '../dados/produtos.json'; // Ensure JSON module is declared in a .d.ts file
import Produto from '../modelo/produto';

export default class DadosProdutos {

    public static dados(): Array<Produto>{

        const json_para_string = JSON.stringify(dados);
        const json_para_objeto = JSON.parse(json_para_string);

        const produtos: Array<Produto> = [];

        json_para_objeto.forEach( (element: {codigo: number, descricao: string, marca: string, valor: number }) => {

            let produto = new Produto(element.codigo, element.descricao, element.marca, element.valor);
            produtos.push(produto);
    })

        return produtos;
    }

}

