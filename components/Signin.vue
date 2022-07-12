<template>
  <div
    v-bind:style="{
      backgroundImage: 'url(' + image + ')',
      backgroundPosition: center,
    }"
  >
    <c-box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <c-box
        m="auto"
        maxW="lg"
        border-width="1px"
        rounded="lg"
        overflow="hidden"
        p="8"
        bg="white"
      >
        <c-image
          m="auto"
          h="180px"
          w="200px"
          :src="require('@/assets/../static/login.png')"
        />

        <!-- the auth buttons will be appended in this container -->
        <c-box id="auth-container"></c-box>
      </c-box>
    </c-box>
  </div>
</template>

<script>
import bgbg from ".././static/bgbgbg.jpg";

export default {
  name: "SignIn",
  data() {
    return {
      image: bgbg,
    };
  },
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
