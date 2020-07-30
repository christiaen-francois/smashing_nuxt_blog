<template>
<div class="grid-container">
  <div class="content">
    <main>
    <h2>Articles de CSS-Tricks repris par la REST API</h2>
  <!-- here we loop through the posts -->
    <div class="post" v-for="post in sortedPosts" :key="post.id">
      <h3>
      <!-- for each one of them, we’ll render their title, and link off to their individual page -->
        <nuxt-link :to="`blog/${post.slug}`">{{ post.title.rendered }}</nuxt-link>
      </h3>
      <div v-html="post.excerpt.rendered"></div>
      <nuxt-link :to="`blog/${post.slug}`" class="readmore">Lire a suite</nuxt-link>
    </div>
  </main>
  </div>
  <div class="tags">
    <Logo />
    <aside>
    <h2>Categories</h2>
    <div class="tags-list">
          <ul>
            <li
              @click="updateTag(tag)"
              v-for="tag in tags"
              :key="tag.id"
              :class="[tag.id === selectedTag ? activeClass : '']"
            >
              <a>{{ tag.name }}</a>
              <span v-if="tag.id === selectedTag">✕</span>
            </li>
          </ul>
        </div>
  </aside>
  </div>
</div>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
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