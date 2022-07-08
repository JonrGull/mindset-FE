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
      <c-stack spacing="4">
        <c-input placeholder="username" />
        <c-input placeholder="password" />
      </c-stack>
      <flex>
        <c-button variant-color="blue" size="md" mt="10"> Login </c-button>
        <c-button variant-color="blue" size="md" mt="10">Register</c-button>
      </flex>
    </c-box>
  </c-box>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      property: {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      },
    };
  },
};
</script>
