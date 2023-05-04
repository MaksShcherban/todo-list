<template>
  <div class="container" v-if="posts.length > 0">
    <PostItem
      @remove="$emit('remove', post)"
      @success="$emit('success', post)"
      @savePostItem="onSavePostItem"
      :post="post"
      v-for="post in posts"
      :key="post.id"
    />
  </div>
  <h2 v-else style="color: red; text-align: center; margin-top: 50px">Список задач пустий</h2>
</template>
<script>
import PostItem from '@/components/PostItem.vue'

export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  components: { PostItem },
  methods: {
    onSavePostItem(postItem) {
      this.$emit('savePostItem', postItem)
    }
  }
}
</script>
<style scoped>
.container {
  background-color: #f4a460;
  margin-top: 20px;
  margin: 30px;
  padding: 20px;
  border-radius: 15px;
}
</style>
