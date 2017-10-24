<template>
  <div id="app">

    <b-navbar toggleable type="dark" variant="green" toggle-breakpoint="md" sticky>

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand href="/">Carro no Minuto Docs</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- <b-nav is-nav-bar>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-nav> -->

        <!-- Right alignd nav items -->
        <b-nav is-nav-bar class="ml-auto">

          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->


            <b-nav is-nav-bar>
              <b-nav-item to="/">Início</b-nav-item>
            </b-nav>

           <b-nav-item-dropdown text="Versões" right>
            <b-dropdown-item to="/v1">V1</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-nav>

      </b-collapse>
    </b-navbar>


    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  @import '../assets/vars';

  .bg-green {
    background-color: $color-primary;
  }


  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    height: 14rem;
    background-color: $color-second;
    color: white;
    margin-bottom: 1rem;
  }

  #content {
    // font-size: 18px;
  }


  .scrollactive-nav {
    overflow: scroll;
    max-height: calc(100vh - 80px);
    padding-bottom: 80px;
  }


  @media (min-width: 576px) {}

  @media (min-width: 768px) {
    .sidebar-menu {
      // width: 180px;
    }
  }

  @media (min-width: 992px) {
    .sidebar-menu {
      // width: 210px;
    }
  }

  @media (min-width: 1200px) {
    .sidebar-menu {
      // width: 255px;
    }
  }



  //docs
  .docs-section {
    margin-top: 10px;
    margin-bottom: 60px;

    h1 {
      border-bottom: 1px solid #d0d0d0;
      padding-bottom: 10px;
      margin-bottom: 30px;
      font-size: 48px;
    }
    h2,
    h3,
    h4,
    h5 {
      margin-top: 20px;
      margin-bottom: 30px;
    }

    img {
      margin-top: 20px;
      margin-bottom: 20px;
      max-width: 100%;
    }
    p {
      margin-bottom: 20px;
    }

    blockquote {
      padding: 15px 20px;
      background: #e2e2e2;
      border-left: 5px solid #b3b3b3;;

      p {
        margin-bottom: 0px;
      }
    }
  }

</style>
