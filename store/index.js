const siteURL = "https://css-tricks.com"
/*
this is where we will eventually hold the data for all of our posts
*/
export const state = () => ({
    posts: [],
    tags: [],
    pages: [],
})
/*
this will update the state with the posts
*/
export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  }
}
/*

actions is where we will make an API call that gathers the posts,
and then commits the mutation to update it
*/
export const actions = {
    //this will be asynchronous
  async getPosts({ state, commit, dispatch }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
      ).then(res => res.json())

      posts = posts
      .filter(el => el.status === "publish")
      .map(({ id, slug, title, excerpt, date, tags, content }) => ({
        id,
        slug,
        title,
        excerpt,
        date,
        tags,
        content
      }))

      console.log(posts);
      commit("updatePosts", posts)

    } catch (err) {
      console.log(err)
    }
  },
  async getTags({ state, commit }) {
    if (state.tags.length) return
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce
    let allTags = state.posts.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()
    console.log(allTags);
    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then(res => res.json())
      tags = tags.map(({ id, name }) => ({
        id, name
      }))
      console.log(tags);
      commit("updateTags", tags)
    } catch (err) {
      console.log(err)
    }
  }
}
