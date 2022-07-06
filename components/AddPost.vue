<template>
  <c-textarea placeholder="Here is a sample placeholder" />
  
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      text: "",
      day: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("Please add a post");
        return;
      }
      const newPost = {
        text: this.text,
        day: this.day,
      };
      this.$emit("add-post", newPost);
      this.text = "";
      this.day = "";
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
