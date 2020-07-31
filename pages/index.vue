<template>
<div class="grid-container">
  <div class="content">
    <main>
    <h1>Articles de CSS-Tricks repris par la REST API</h1>
  <!-- here we loop through the posts -->
    <div class="post" v-for="post in sortedPosts" :key="post.id">
      <post :post="post" />
    </div>
  </main>
  </div>
  <div class="tags">
    <Logo />
    <aside>
      <tags :tags="tags" />
    </aside>
  </div>
</div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import tags from '~/components/tags.vue'
import post from '~/components/Post.vue'
export default {
  head () {
    return {
      title: 'Articles CSS Tricks de la REST API',
      meta: [
        { hid: 'description', name: 'description', content: 'Projet Nuxt.JS ' }
      ]
    }
  },
  components: {
    Logo,
    tags,
    post,
  },
  data() {
    return {
      selectedTag: null,
      activeClass: "active"
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
      return this.posts.filter(el => el.tags.includes(this.selectedTag));
    }
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
    }
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

.post{
  margin-bottom: 1.5rem;
}

p{
  margin: .5rem 0 1rem;
}
pre{
  background: #F9F9F9;
  padding: 1rem;
  margin: .5rem 0 1rem;
}
</style>