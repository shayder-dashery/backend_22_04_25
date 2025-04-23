import Produto from "../modelo/produto";
import ProdutoRepository from "../repositorio/repositorio-produto";

export default class ProdutoService {
    private repository: ProdutoRepository = new ProdutoRepository();

    public listarTodos(): Produto[] {
        return this.repository.consultarTodos();
    }

    public buscarPorCodigo(codigo: number): Produto | string {
        const produto = this.repository.consultarPorCodigo(codigo);
        return produto ? produto : "Produto não encontrado";
    }

    public cadastrar(produto: Produto): string {
        this.repository.adicionar(produto);
        return "Produto cadastrado com sucesso";
    }

    public atualizar(codigo: number, produto: Produto): string {
        return this.repository.atualizar(codigo, produto) 
            ? "Produto atualizado com sucesso" 
            : "Produto não encontrado";
    }

    public deletar(codigo: number): string {
        return this.repository.remover(codigo)
            ? "Produto removido com sucesso"
            : "Produto não encontrado";
    }
}