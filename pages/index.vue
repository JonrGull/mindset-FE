<template>
  <flex>
    <c-button @click="signOut">SIGNOUT</c-button>
  </flex>
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
