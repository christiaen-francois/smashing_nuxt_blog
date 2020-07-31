<template>
  <div class="grid-container">
    <div class="blog">
      <main class="post individual">
        <h1>{{ post.title.rendered }}</h1>
        <small class="date">{{ post.date | dateformat }}</small>
        <ul>
          <li v-for="item in post.tags" :key="item.id">
            <nuxt-link :to="`/tag/${getTagName(item).slug}`">{{ getTagName(item).name }}</nuxt-link>
          </li>
        </ul>
        <section v-html="post.content.rendered"></section>
        <nuxt-link to="/">Retour</nuxt-link>
      </main>
    </div>
    <div class="sidebar">
      <Logo />
      <nuxt-link to="/">Retour</nuxt-link>
      <aside>
          <tags :tags="tags" />
      </aside>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import tags from '~/components/tags.vue'
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
    Logo,
    tags
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    },
    tags() {
      return this.$store.state.tags;
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    getTagName : function(id){
      //let element = this.$store.state.tags.find(el => el.id === id)
      console.log(this.tags.find(el => el.id === id));
      //console.log
      return this.tags.find(el => el.id === id)
    }
  }
};
</script>

<style>

</style>