<template>
  <div class="container">WELCOMEEEEEEEEEEEEEE</div>
</template>

<script lang="js">

export default {
  middleware: 'auth',
methods: {
  signOut() {
    this.$fire.auth.signOut();
    window.location = ('/login')
  }
}
}
</script>
