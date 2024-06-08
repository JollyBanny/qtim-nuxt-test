export const usePagination = function <T>() {
  const pageLength = 8;
  const items = ref<T[]>([]) as Ref<T[]>;
  const currentPage = ref<number>(1);

  const paginatedItems = computed(() => {
    const page = currentPage.value;
    return items.value.slice((page - 1) * pageLength, page * pageLength);
  });

  const setPage = (page: number): void => {
    currentPage.value = page;
  };

  const prevPage = (): void => {
    --currentPage.value;
  };

  const nextPage = (): void => {
    ++currentPage.value;
  };

  const setItems = (data: T[]): void => {
    items.value = data;
  };

  return { items, paginatedItems, currentPage, pageLength, setItems, setPage, prevPage, nextPage };
};
