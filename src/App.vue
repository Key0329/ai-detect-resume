<script setup>
// 不需要直接引入 ResumeView
</script>

<template>
  <router-view />
</template>

<style>
html,
body {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: "Microsoft JhengHei", PingFangTC, Roboto, Arial, sans-serif;
  font-weight: 400;
  color: #292929;
  letter-spacing: 0.01em;
  background-color: #fff;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  padding: 0;
}
</style>
