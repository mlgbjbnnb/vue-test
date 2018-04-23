<template>
  <div id="app">
    <div class="sidebar">
      <ul>
        <li>
          <router-link to="/field">input</router-link>
        </li>
        <li>
          <router-link to="/display">content</router-link>
        </li>
      </ul>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  overflow: hidden;
}
#app {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7f8c8d;
  margin-top: 60px;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(0,0,0,.07);
}
.sidebar {
  width: 200px;
  float: left;
  height: 100%;
  border-right: 1px solid rgba(0,0,0,.07);
}
.sidebar ul {
  list-style: none;
  text-align: left;
}
.sidebar ul li a {
  text-decoration: none;
  padding: 10px 15px;
  font-weight: 600;
  display: block;
}
.sidebar ul li a:visited {
  color: #7f8c8d;
}
.container {
  overflow: hidden;
  height: 100%;
  padding: 20px;
}
.col-2, .col-10 {
  display: inline-block;
}
.col-2 {
  width: 16%;
}
.col-10 {
  width: 83%;
}
.line {
  height: 42px;
}
</style>
