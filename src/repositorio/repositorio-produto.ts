import Produto from "../modelo/produto";
import DadosProdutos from "../utils/dados-produtos"


export default class ProdutoRepository {
    private produtos: Produto[] = DadosProdutos.dados();

    // Consulta (Todos)
    public consultarTodos(): Produto[] {
        return this.produtos;
    }

    // Consulta por código
    public consultarPorCodigo(codigo: number): Produto | undefined {
        return this.produtos.find(p => p.codigo === codigo);
    }

    // Cadastra Produto
    public adicionar(produto: Produto): void {
        this.produtos.push(produto);
    }

    // Atualiza produto
    public atualizar(codigo: number, produtoAtualizado: Produto): boolean {
        const index = this.produtos.findIndex(p => p.codigo === codigo);
        if (index !== -1) {
            this.produtos[index] = produtoAtualizado;
            return true;
        }
        return false;
    }

    // Deleta Produto
    public remover(codigo: number): boolean {
        const index = this.produtos.findIndex(p => p.codigo === codigo);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            return true;
        }
        return false;
    }
}