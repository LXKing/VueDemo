<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>First VUE Demo</h2>
    <h3>By:杰少</h3>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '石头！快来装逼！(*^__^*) '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h1{
	color: deeppink;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
