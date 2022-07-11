<template>
  <form ref="form" class="form-group">
    <c-form-control>
      <c-form-label for="add-post">New Post</c-form-label>
      <c-textarea
        focus-border-color="lime"
        v-model="text"
        placeholder="What's on your mind?"
      />
      <c-button variant-color="green" @click="onSubmit">Submit</c-button>
      <div>{{ text }}</div>
    </c-form-control>
  </form>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("Please enter some text");
        return;
      }

      console.log(this.text);
      this.$emit("add-post", this.text);
      this.text = ""; // Shows the typed text for debugging purposes
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
