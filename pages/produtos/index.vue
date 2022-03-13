import { resolve } from 'url';
import { setTimeout } from 'timers';
import { watch } from 'fs';

<template>
  <div>
    <div>
      <div class="container mx-auto">
        <h1 class="font-bold text-lg">Produtos</h1>
          <nuxt-link to="/produtos/produto-a">Produto A</nuxt-link>
          <nuxt-link to="/produtos/produto-b">Produto b</nuxt-link>
          <br>
          <div v-for="product in products" :key="product.id"
            class="border-b border-gray-400 py-3"
          >
          {{ product.title }}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quas
            consectetur placeat sunt mollitia dolores qui corrupti cupiditate vero rem
            dolore repudiandae ipsam ex, delectus, fugit aperiam, illum ab velit!
          </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {

    }
  },
  head(){
    return {
      title: 'Produtos'
    }
  },

  async asyncData({ $axios }){
    const products = await $axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return {
      products,
    }
  }
}
</script>

