import type { RouteLocationNormalized } from "vue-router";

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized) => {
  if (to.matched.length === 0) {
    return navigateTo("/", { redirectCode: 301 });
  }
});
