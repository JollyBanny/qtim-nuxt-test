<template>
  <div class="article-card">
    <div class="article-card__image">
      <img :src="image" alt="article preview" />
    </div>
    <div class="article-card__content">
      <p class="article-card__description">{{ item.preview }}</p>
      <div class="article-card__more">
        <NuxtLink :to="`/article/${item.id}`"> Read more </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/typings/post";

const props = defineProps<{ item: Post }>();

const image = computed(() => {
  const category = props.item.image.split("/").at(-1);
  return `https://loremflickr.com/320/240/${category}`;
});
</script>

<style src="assets/scss/components/articles.scss" scoped></style>
