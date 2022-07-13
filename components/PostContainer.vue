<template>
  <div>
    <div class="posts-container">
      <div v-if="posts.length > 0">No posts</div>

      <div v-else="post in posts.slice().reverse()" :key="post.id">
        {{ post.text }}
        {{ post.createdAt }}
        {{ console.log(`posts`, post) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsContainer",
  props: ["posts"],
};
</script>

<style scoped></style>
