<template>

 <router-view></router-view>
 <router-link to="/">Home</router-link>
 <br>
 <router-link to="/AboutComponent">About</router-link>
 <br>
 <router-link to="/LoginPage">Login</router-link>
 <br>
 <router-link to="/ProfileComponent/Peter">Peter Profile Page</router-link>
 <br>
 <router-link to="/ProfileComponent/Sam">Sam Profile Page</router-link>
 
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
