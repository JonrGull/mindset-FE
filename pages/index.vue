<template>
  <div>
    <c-button @click="signOut">SIGNOUT</c-button>
    <AddPost />
  </div>
</template>

<script lang="js">
import AddPost from '../components/AddPost.vue';

export default {
  middleware: 'auth',
  components: {
    AddPost,
     },
  methods: {
  signOut() {
    this.$fire.auth.signOut();
    window.location = ('/login')
  }
},
}
</script>
