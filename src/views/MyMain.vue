<template>
  <div>
    <FormPost @create="CreatePost" />
    <PostList
      @remove="RemovePost"
      @success="SuccessPost"
      @edit="EditPost"
      @save="SavePost"
      @savePostItem="onSavePostItem"
      :posts="posts"
    />
    <SuccessList @remove="RemoveSuccess" @success="SuccessPost" :postSuccesss="postSuccesss" />
  </div>
</template>

<script>
// @ is an alias to /src

import FormPost from '@/components/FormPost.vue'
import PostList from '@/components/PostList.vue'
import SuccessList from '@/components/SuccessList.vue'

export default {
  components: {
    FormPost,
    PostList,
    SuccessList
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Задача 1',
          body: 'Створити landing page',
          edit: false
        },
        { id: 2, title: 'Задача 2', body: 'Зробити курсовий', edit: false },
        { id: 3, title: 'Задача 3', body: 'Зробити Лабораторні', edit: false }
      ],
      postSuccesss: []
    }
  },
  methods: {
    CreatePost(post) {
      this.posts.push(post)
    },
    RemovePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },
    RemoveSuccess(postSuccess) {
      this.postSuccesss = this.postSuccesss.filter((s) => s.id !== postSuccess.id)
    },
    SuccessPost(post) {
      this.postSuccesss.push(post)
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },

    onSavePostItem(postItem) {
      let index = this.posts.findIndex((x) => x.id === postItem.id)
      this.posts[index] = postItem
    }
  }
}
</script>
<style scoped></style>
