<template>
  <div>
    <div class="post">
      <div>
        <div><strong>Назва:</strong> {{ postSuccess.title }}</div>
        <div><strong>Опис: </strong> {{ postSuccess.body }}</div>
      </div>

      <div class="btn-post-item">
        <button @click="$emit('remove', postSuccess)" class="btn-post">Видалити</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    postSuccess: {
      type: Object,
      require: true
    }
  }
}
</script>
<style scoped>
.post {
  border: 2px solid blue;
  margin-top: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin: 10px 30px;
  background-color: #f08080;
  border-radius: 15px;
}
.btn-post {
  background-color: #ffd700;
  border: 2px solid blue;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px;
  transition: 0.5s;
}
.btn-post:hover {
  background-color: #ffdab9;
}
</style>
