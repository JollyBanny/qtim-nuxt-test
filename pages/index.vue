<template>
  <div class="articles page__container">
    <h1 class="page__title">Articles</h1>
    <div class="articles__gallery">
      <template v-for="item in paginatedItems" :key="`article-${item.id}`">
        <ArticleItem :item="item"></ArticleItem>
      </template>
    </div>

    <ThePaginator
      :total="items.length"
      :current-page="currentPage"
      :page-length="pageLength"
      @set-page="setPage"
      class="articles__paginator"
    />
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/typings/post";

const config = useRuntimeConfig();
const { items, currentPage, pageLength, paginatedItems, setItems, setPage } = usePagination<Post>();

await useFetch<Post[]>(`${config.public.apiBase}/posts/`, { key: "posts" }).then(({ data }) => {
  data.value && setItems(data.value);
});
</script>

<style src="assets/scss/components/articles.scss" scoped></style>
<style src="assets/scss/components/page.scss" scoped></style>
