<template>
  <div class="container">
    <div class="main-text">Напишіть список</div>
    <form @submit.prevent class="input-form">
      <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Введіть назву:"
      />
      <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Введіть опис:"
      />
      <button @click="CreatePost" class="bth">Створити</button>
    </form>
    <div class="text-empty">Введіть значення</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
        edit: false,
      },
    };
  },
  methods: {
    CreatePost() {
      if (this.post.title && this.post.body !== "") {
        const textEmpty = document.querySelector(".text-empty");
        textEmpty.classList.remove("visible");
        this.post.id = Date.now();
        this.$emit("create", this.post);
        this.post = {
          title: "",
          body: "",
          edit: false,
        };
      } else {
        const textEmpty = document.querySelector(".text-empty");
        textEmpty.classList.add("visible");
        console.log("pusto");
      }
    },
  },
};
</script>
<style scoped>
.input-form {
  display: flex;
  margin-top: 20px;
  justify-content: center;
}
.input {
  margin-right: 10px;
  background-color: none;
  border: none;
  border: 2px solid orange;
  border-radius: 10px;
  width: 200px;
  font-size: 16px;
  height: 30px;
}

.bth {
  background-color: #d3d3d3;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  transition: 0.5s;
}
.bth:hover {
  background-color: #ffdab9;
}
.text-empty {
  visibility: hidden;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  color: brown;
}
.visible {
  visibility: visible;
}
.main-text {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
}
.container {
  background-color: #4682b4;
  margin: 0 30px;
  margin-top: 40px;
  border-radius: 15px;
  padding: 10px;
}
</style>
