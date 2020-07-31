<template>
    <div class="grid-container">
        <div class="content">
            <main class="post individual">
                <h1>Tag : {{ tag.name }}</h1>
                <div class="post" v-for="post in posts" :key="post.id">
                    <post :post="post" />
                </div>
            </main>
        </div>
        <div class="tags">
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
import post from '~/components/Post.vue'
export default {
    components: {
        Logo,
        tags,
        post
    },
    computed: {
        posts() {
            let postsTag = []
            this.$store.state.posts.forEach(element => {
                if(element.tags.includes(this.currentTag.id)){
                    //console.log(this.currentTag.name + " - "+ element.id);
                    //console.log(element);
                    postsTag.push(element);
                }
            });
            //return this.$store.state.posts.find(el => el.tags.includes(this.currentTag.id));
            return postsTag;
        },
        tags() {
            return this.$store.state.tags;
        },
        tag() {
            this.currentTag = this.tags.find(el => el.slug === this.slug);
            return this.tags.find(el => el.slug === this.slug);
        }
    },
    data() {
        return {
            slug: this.$route.params.slug,
            currentTag: null,
            //postsTag : posts
            //posts : []
        };
    }
}
</script>

<style>

</style>