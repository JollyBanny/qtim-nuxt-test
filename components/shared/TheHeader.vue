<template>
  <header class="header">
    <div class="header__container">
      <NuxtLink to="/" class="header__logo">
        <IconLogo />
      </NuxtLink>

      <nav class="header__menu">
        <RouterLink to="/">
          <span> Works </span>
        </RouterLink>

        <RouterLink to="/">
          <span> About </span>
        </RouterLink>
      </nav>

      <div class="header__buttons">
        <ButtonLocale class="header__locale" />
        <Button class="header__letswork"> Let's work </Button>
      </div>
    </div>
  </header>
</template>

<style src="assets/scss/components/header.scss" lang="scss" scoped />
