import Produto from "./modelo/produto";
import ProdutoService from "./service/produto-servico";

function simularAPI() {
    const produtoService = new ProdutoService();

    // console.log("=== CONSULTAR TODOS OS PRODUTOS ===");
    // console.log(produtoService.listarTodos());
    // console.log("\n");

    // console.log("=== CONSULTAR PRODUTO POR CÓDIGO (1) ===");
    // console.log(produtoService.buscarPorCodigo(1));
    // console.log("\n");

    // console.log("=== CADASTRAR NOVO PRODUTO ===");
    // const novoProduto = new Produto(4, "Macarrão", "XYZ", 3.99);
    // console.log("Produto a ser cadastrado:");
    // console.log(novoProduto);
    // console.log("----------------------")
    // console.log(produtoService.cadastrar(novoProduto));
    // console.log("Lista após cadastro:");
    // console.log(produtoService.listarTodos());
    // console.log("\n");

    // console.log("=== ATUALIZAR PRODUTO (código 2) ===");
    // const produtoAtualizado = new Produto(2, "Feijão Premium", "XYZ", 6.50);
    // console.log("Produto a ser atualizado:");
    // console.log(produtoAtualizado);
    // console.log("----------------------")
    // console.log(produtoService.atualizar(2, produtoAtualizado));
    // console.log("Lista após atualização:");
    // console.log(produtoService.listarTodos());
    // console.log("\n");

    console.log("=== REMOVER PRODUTO (código 3) ===");
    console.log("Produto a ser removido:");
    console.log(produtoService.buscarPorCodigo(3));
    console.log("----------------------")
    console.log(produtoService.deletar(3));

    console.log("Lista após remoção:");
    console.log(produtoService.listarTodos());
}

simularAPI();