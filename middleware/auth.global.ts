export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  if (userStore.getUser) {
    if (to.path === "/login" || to.path === "/register") {
      return navigateTo("/dashboard");
    }
  } else {
    if (to.path === "/profile" || to.path.includes("/dashboard")) {
      return navigateTo("/login");
    }
  }
});
