<template>
  <div
    id="home"
    class="flex flex-col justify-center items-start h-full space-y-5 w-2/4 m-auto"
  >
    <img
      src="@/assets/profile.jpg"
      alt="My Profile"
      class="box-border border-2 border-gray-500 rounded-full object-contain h-1/3"
    />
    <div>
      <h1 class="text-5xl font-bold font-sans text-center mb-1">
        Riel Joseph Bulaybulay
      </h1>
      <p class="text-sm">BS Computer Engineer | Software Engineer</p>
    </div>
    <p class="text-xl">
      A Passionate
      <span
        class="transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1 cursor-pointer pb-1 border-b-2 border-yellow-300 font-bold"
        >Software Engineer</span
      >
      Based from the
      <span class="font-bold">
        Philippines
        <img
          src="@/assets/ph-flag.png"
          alt="Philippine Flag"
          class="object-contain h-4 inline"
        />
      </span>
    </p>
    <navigation-tabs></navigation-tabs>
    <div>
      <a
        class="hover:bg-yellow-300 rounded-md p-1 flex justify-items-center"
        href="https://www.linkedin.com/in/riel-joseph-bulaybulay-185aa6202/"
        target="_blank"
      >
        <img
          src="@/assets/linkedin.png"
          alt="Philippine Flag"
          class="object-contain h-4 inline bg-white"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#home {
  animation: move 1s;
}

@keyframes move {
  from {
    top: 0;
  }
}
</style>