<template>
  <Button class="locale-button" @click="changeLocale">
    <component :is="`icon-locale-${currentLocale}`" class="w-6 h-6" />
  </Button>
</template>

<script setup lang="ts">
import type { Locale } from "~/typings/locale";

const currentLocale = ref<Locale>("ru");

const changeLocale = () => {
  currentLocale.value = currentLocale.value === "en" ? "ru" : "en";
};
</script>

<style src="assets/scss/components/button.scss" lang="scss" scoped />
