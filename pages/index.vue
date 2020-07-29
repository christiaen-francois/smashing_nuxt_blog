<template>
<div class="posts">
  <main>
    <h2>Articles de CSS-Tricks repris par la REST API</h2>
  <!-- here we loop through the posts -->
    <div class="post" v-for="post in posts" :key="post.id">
      <h3>
      <!-- for each one of them, we’ll render their title, and link off to their individual page -->
        <nuxt-link :to="`blog/${post.slug}`">{{ post.title.rendered }}</nuxt-link>
      </h3>
      <div v-html="post.excerpt.rendered"></div>
      <nuxt-link :to="`blog/${post.slug}`" class="readmore">Lire a suite</nuxt-link>
    </div>
  </main>
  </div>
</template>

<script>
export default {
computed: {
  posts() {
    return this.$store.state.posts;
  },
 },
created() {
  this.$store.dispatch("getPosts");
},
};
</script>
