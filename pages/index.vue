<template>
  <div class="grid-container">
    <div class="blog">
      <main>
        <h1>Articles de CSS-Tricks repris par la REST API</h1>
        <div class="post" v-for="post in sortedPosts" :key="post.id">
          <post :post="post" />
        </div>
      </main>
    </div>
    <div class="sidebar">
      <Logo />
      <aside>
        <tags :tags="tags" />
      </aside>
    </div>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import tags from "~/components/tags.vue";
import post from "~/components/Post.vue";
export default {
  head() {
    return {
      title: "Articles CSS Tricks de la REST API",
      meta: [
        { hid: "description", name: "description", content: "Projet Nuxt.JS " },
      ],
    };
  },
  components: {
    Logo,
    tags,
    post,
  },
  data() {
    return {
      selectedTag: null,
      activeClass: "active",
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    tags() {
      return this.$store.state.tags;
    },
    sortedPosts() {
      if (!this.selectedTag) return this.posts;
      return this.posts.filter((el) => el.tags.includes(this.selectedTag));
    },
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id;
      } else {
        this.selectedTag = null;
      }
    },
  },
};
</script>

<style>
</style>