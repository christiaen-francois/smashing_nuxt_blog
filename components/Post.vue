<template>
  <div>
    <h2><nuxt-link :to="`/blog/${post.slug}`">{{ post.title.rendered }}</nuxt-link></h2>
    <div v-html="post.excerpt.rendered"></div>
    <nuxt-link :to="`/blog/${post.slug}`" class="readmore">Lire a suite</nuxt-link>
  </div>
</template>

<script>
export default {
    props : ["post"]
}
</script>

<style>

</style>