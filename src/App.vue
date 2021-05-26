<template>
  <navigation-tabs v-if="$route.name !== 'Home'"></navigation-tabs>
  <router-view
    class="p-6"
    style="min-height: 100vh !important; height: 100vh !important"
    v-slot="{ Component }"
  >
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  setup() {},
}
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
}
.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>
