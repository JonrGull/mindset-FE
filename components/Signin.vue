<template>
  <c-box backgroundImage="url('../static/bg.jpg')">
    <c-box
      m="auto"
      maxW="sm"
      border-width="1px"
      rounded="lg"
      overflow="hidden"
      p="8"
      mt="10"
    >
      <c-image
        m="auto"
        h="180px"
        w="200px"
        :src="require('@/assets/../static/login.png')"
      />

      <c-box id="auth-container"></c-box>
    </c-box>
  </c-box>
</template>

<script>
export default {
  name: "SignIn",
  mounted() {
    const firebaseui = require("firebaseui");
    require("firebaseui/dist/firebaseui.css");

    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(this.$fire.auth);

    const config = {
      signInOptions: [
        this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
        this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,
      ],

      signInSuccessUrl: "/",
      callbacks: {
        signInSuccessWithAuthResult() {
          alert("Successfully signed in!");
          window.location.href = "/";
        },
      },
    };
    ui.start("#auth-container", config);
  },
};
</script>
