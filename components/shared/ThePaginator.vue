<template>
  <div class="paginator">
    <div v-show="!isStartList" class="paginator__rewinder">
      <Button
        class="pagination-button pagination-button__rewinder"
        @click="$emit('setPage', Math.max(currentPage - 3, 1))"
      >
        <IconChevronLeft />
      </Button>
      <Button class="pagination-button pagination-button__steper" @click="$emit('setPage', 1)"> 1 </Button>
      <Button class="pagination-button" disabled> ... </Button>
    </div>

    <template v-for="page in displayPages">
      <Button
        class="pagination-button pagination-button__steper"
        :class="{ 'pagination-button--active': currentPage === page }"
        @click="$emit('setPage', page)"
      >
        {{ page }}</Button
      >
    </template>

    <div v-show="!isEndList" class="paginator__rewinder">
      <Button class="pagination-button" disabled> ... </Button>
      <Button class="pagination-button pagination-button__steper" @click="$emit('setPage', totalPages)">
        {{ totalPages }}
      </Button>
      <Button
        class="pagination-button pagination-button__rewinder"
        @click="$emit('setPage', Math.min(currentPage + 3, totalPages))"
      >
        <IconChevronRight />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ total: number; currentPage: number; pageLength: number }>(), {
  pageLength: 1,
});

const emit = defineEmits<{
  (event: "setPage", value: number): void;
}>();

const totalPages = computed(() => {
  return Math.ceil(props.total / props.pageLength);
});

const isStartList = computed(() => {
  return props.currentPage < 4;
});

const isMiddleList = computed(() => {
  return props.currentPage >= 4 && props.currentPage <= totalPages.value - 3;
});

const isEndList = computed(() => {
  return props.currentPage > totalPages.value - 3;
});

const displayPages = computed(() => {
  if (isStartList.value) return Array.from({ length: 4 }, (_, i) => i + 1);
  else if (isMiddleList.value) return [props.currentPage - 1, props.currentPage, props.currentPage + 1];
  else if (isEndList.value) return Array.from({ length: 4 }, (_, i) => totalPages.value - i).reverse();
});
</script>

<style src="assets/scss/components/paginator.scss" />
