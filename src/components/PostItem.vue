<template>
  <div>
    <div class="post">
      <div>
        <div><strong>Назва:</strong> {{ post.title }}</div>
        <div><strong> Опис:</strong> {{ post.body }}</div>
      </div>

      <div class="btn-post-item">
        <div v-if="post.edit === true" style="display: flex">
          <div class="block-edit">
            <p>Назва:</p>
            <input
              class="edit-input"
              :value="post.title"
              @input="changeName($event.target.value)"
              type="text"
            />
          </div>
          <div class="block-edit">
            <p>Опис:</p>
            <input
              class="edit-input"
              :value="post.body"
              @input="changeBody($event.target.value)"
              type="text"
            />
          </div>
          <button @click="changeEdit(false)" class="btn-post">Зберегти</button>
        </div>
        <button v-if="post.edit === false" @click="changeEdit(true)" class="btn-post">
          Редагувати
        </button>
        <button @click="$emit('success', post)" class="btn-post">Виконати</button>
        <button @click="$emit('remove', post)" class="btn-post">Видалити</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      require: true
    }
  },
  methods: {
    changeName(title) {
      //   console.log({ ...this.post, title })
      this.$emit('savePostItem', { ...this.post, title })
    },
    changeBody(body) {
      //   console.log({ ...this.post, title })
      this.$emit('savePostItem', { ...this.post, body })
    },
    changeEdit(edit) {
      this.$emit('savePostItem', { ...this.post, edit })
    }
  }
}
</script>
<style scoped>
.post {
  background-color: #3cb371;
  margin-top: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin: 10px 30px;
  border-radius: 15px;
}
.btn-post {
  background-color: #9370db;

  padding: 5px 10px;
  margin: 10px;
  border-radius: 5px;
  transition: 0.5s;
}
.btn-post:hover {
  background-color: #ffdab9;
}
.btn-post-item {
  display: flex;
}
.block-edit {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
}
.edit-input {
  border: 2px solid #9370db;
  padding: 5px;
  border-radius: 5px;
}
</style>
