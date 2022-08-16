<template>
  <div>
    <div class="posts-container">
      <div v-if="posts.length === 0">No posts</div>
      <div v-if="posts.length !== 0">
        <div v-for="post in posts.slice().reverse()" :key="post.id">
          {{ post.text }}
          {{ post.createdAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostContainer",
  props: {
    posts: Array,
  },
};
</script>

<style scoped></style>
