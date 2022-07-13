<template>
  <Signin />
</template>

<script>
import Signin from "../components/Signin.vue";
export default {
  name: "Login",
  components: {
    Signin,
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  data() {
    return {};
  },
};
</script>
