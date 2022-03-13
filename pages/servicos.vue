<template>
  <div>
    <div>
      <div class="container mx-auto">
        <h1 class="font-bold text-lg">serviços</h1>
        <nuxt-link to="/servicos/desenvolvimento-de-sites"
          >Desenviolvimento De Sites
        </nuxt-link>
        <nuxt-link to="/servicos/marketing-digital"> Marketing Digital</nuxt-link>
        <br />
        <br />
        <div v-if="$fetchState.pending">Carregando...</div>
        <div
          v-for="service in services"
          :key="service.id"
          class="border-b border-gray-400 py-4"
        >
          {{ service.username }}
        </div>
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [],
    };
  },
  head(){
    return {
      title: 'Serviços'
    }
  },
  async fetch() {
    this.services = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users?_limit=5"
    );
    console.log(this);
  },
};
</script>
