<template>
<div class="grid-container">
  <div class="content">
    <main class="post individual">
      <h1>{{ post.title.rendered }}</h1>
      <small class="date">{{ post.date | dateformat }}</small>
      <section v-html="post.content.rendered"></section>
      <nuxt-link to="/">Retour</nuxt-link>
    </main>
  </div>
  <div class="tags">
    <Logo />
    <nuxt-link to="/">Retour</nuxt-link>
  </div>
</div>
  
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  head () {
    return {
      title: this.post.title.rendered,
      meta: [
        { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
      ]
    }
  },
  components: {
    Logo
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  created() {
    this.$store.dispatch("getPosts");
  }
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 15px;
  grid-template-areas: "content content content tags";
}

.content { grid-area: content; }

.tags { grid-area: tags; }
</style>