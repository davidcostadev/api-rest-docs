<template>
  <div class="page page-home">

    <div class="hero">
      <h1>Carro no Minuto - API REST Docs</h1>
    </div>


    <div class="container">
      <p>Olá seja bem vindo ao documentação da api do projeto do carro no minuto. A baixo você encontrar os principais tópicos.</p>

      <div class="row">
        <div class="col">
          <b-card tag="article" class="mb-2">
            <h4 class="card-title">
              <router-link to="/v1">v1</router-link>
            </h4>
          </b-card>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PageHome',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
  }
</script>

<style lang="scss">


</style>
