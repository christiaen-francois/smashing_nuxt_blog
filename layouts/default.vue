<template>
  <div class="container">
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>


export default {
  components: {
    
  }
}
</script>
<style>
html {
  font-family: 'Maven Pro', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html{
  background: #092938;
  padding: 3vw;
}
body {
  background: #fff;
  min-height:calc(100vh - (3vw * 2)) ;
  border-bottom-right-radius: 30px;
  box-shadow: 0 0 30px rgba(0,0,0,.2);
  padding: 70px 3vw;
  position: relative;
  line-height: 1.6;
}


.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 2rem;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 1.5rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 1rem;
}

.container{
  width: 100%;
}
.container > div{
  width: 100%;
}

.links {
  margin-top: 2rem;
  display: inline-block;
}
img{
  max-width: 100%;
  height: auto;
}
a{
  color:#e72776;
  text-decoration: none;
}
.grid-container {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  grid-template-rows: 1fr;
  gap: 15px 15px;
  grid-template-areas: "blog sidebar";
}

.blog { grid-area: blog; }

.sidebar { grid-area: sidebar; }

@media only screen and (max-width: 767px) { /*change this number to whatever you want*/
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1px 1px;
    grid-template-areas: "blog" "sidebar";
  }

  .blog { grid-area: blog; }

  .sidebar { grid-area: sidebar; }
}

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
  width: 100%;
  overflow: hidden;
  white-space: initial;
}
</style>
