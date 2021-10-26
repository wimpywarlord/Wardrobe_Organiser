<template>
  <router-view />
  <Footer />
</template>

<script>
// MODAL IDENTIFIER TABEL
// ╔═══════════════════╤════╗
// ║ Name of Table     │ Id ║
// ╠═══════════════════╪════╣
// ║ Add Clothes Modal │ 1  ║
// ╚═══════════════════╧════╝


import Footer from "./components/Footer.vue"

export default {
  name : "App",
  components : {
    Footer,
  }
}
</script>

<style>

</style>
