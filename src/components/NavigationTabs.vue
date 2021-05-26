<template>
  <div class="flex space-x-4">
    <router-link class="text-lg font-extrabold" to="/">Home</router-link>
    <router-link class="text-lg font-extrabold" to="/about">About</router-link>
    <router-link class="text-lg font-extrabold" to="/resume"
      >Resume</router-link
    >
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  position: relative;
  color: rgb(0, 0, 0, 0.8);
}
a:hover {
  color: rgb(0, 0, 0, 1);
}
a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: '';
  display: block;
  height: 3px;
  left: 0;
  position: absolute;
  background: rgb(235, 182, 10);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after {
  width: 50%;
  left: 0;
}
.router-link-exact-active:after {
  width: 50%;
  left: 0;
}
</style>