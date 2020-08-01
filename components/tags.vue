<template>
  <div>
    <h2>Tags</h2>
    <div class="tags-list">
      <ul>
        <li v-for="tag in tags" :key="tag.id">
          <nuxt-link :to="`/tag/${tag.slug}`">{{ tag.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //tags : tags
    };
  },
  props: ["tags"],
};
</script>

<style>
</style>