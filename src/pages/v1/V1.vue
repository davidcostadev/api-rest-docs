<template>
  <div class="page page-produtos">

    <div class="hero">
      <h1>Versão V1</h1>
    </div>


    <div class="container">
      <div class="row">
        <div class="col">
          <b-card tag="article" class="mb-2">
            <h4 class="card-title">
              <router-link to="/v1/avaliador">App do Avaliador</router-link>
            </h4>
          </b-card>
          <b-card tag="article" class="mb-2">
            <h4 class="card-title">
              <router-link to="/v1/admin">Admin</router-link>
            </h4>
          </b-card>
        </div>

      </div>
  </div>

  </div>
</template>

<script>
  import InformacoesBasicas from './sub/informacoes-basicas.md'
  import ProdutoVariante from './sub/produto-variante.md'
  import ProdutoCategoria from './sub/produto-categoria.md'
  import ProdutoPromocional from './sub/produto-promocional.md'
  import InclusaoIconPdf from './sub/inclusao-icon-pdf.md'
  import ProdutoDigital from './sub/produto-digital.md'


  export default {
    name: 'PageProdutos',
    components: {
      InformacoesBasicas,
      ProdutoVariante,
      ProdutoCategoria,
      ProdutoPromocional,
      InclusaoIconPdf,
      ProdutoDigital,
    },
    methods: {
      yourFunction(event, currentItem, lastActiveItem) {
        console.log(event, currentItem, lastActiveItem)
      },
    },
  }
</script>
