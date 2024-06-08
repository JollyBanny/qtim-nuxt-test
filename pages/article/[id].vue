<template>
  <div class="page__container">
    <h1 class="article__title">{{ item?.title }}</h1>
    <div class="article__image">
      <img :src="image" alt="article preview" />
    </div>
    <div class="article__content">
      <p>About</p>
      <p class="article__description">{{ item?.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/typings/post";

const route = useRoute();
const config = useRuntimeConfig();

const { data: item } = await useFetch<Post>(`${config.public.apiBase}/posts/${route.params["id"]}`, { key: "posts" });

const image = computed(() => {
  const category = item.value?.image?.split("/").at(-1);
  return `https://loremflickr.com/320/240/${category}`;
});
</script>

<style src="assets/scss/components/articles.scss" scoped></style>
<style src="assets/scss/components/page.scss" scoped></style>
