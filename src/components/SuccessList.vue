<template>
  <div class="container">
    <h2>Виконаних завдань : {{ postSuccesss.length }}</h2>
    <div v-if="postSuccesss.length > 0">
      <SuccessItem
        @remove="$emit('remove', postSuccess)"
        @success="$emit('success', postSuccess)"
        :postSuccess="postSuccess"
        v-for="postSuccess in postSuccesss"
        :key="postSuccess.id"
      />
    </div>

    <h2 v-else style="color: red; text-align: center; margin-top: 50px">Виконаних задач немає</h2>
  </div>
</template>
<script>
// import PostItem from "@/components/PostItem.vue";
import SuccessItem from '@/components/SuccessItem.vue'

export default {
  props: {
    postSuccesss: {
      type: Array,
      required: true
    }
  },
  components: { SuccessItem }
}
</script>
<style scoped>
.container {
  background-color: #faf0e6;
  margin: 30px;
  padding: 20px;
  border-radius: 15px;
}
</style>
