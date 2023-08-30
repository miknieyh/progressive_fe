<template>
  <section class="container">
    <div>
      <app-logo/>
    </div>

  </section>
</template>

<script>
import AppLogo from '~/components/ProjectListTable.vue'

export default {
  components: {
    AppLogo
  },

}
</script>

<style>
.container {
  max-width: 1600px;
  width: 90%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: baseline;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.sr-only {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  clip: rect(0,0,0,0);
}
</style>

