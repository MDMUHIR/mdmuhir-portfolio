export default defineNuxtRouteMiddleware((to) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // If route is in admin section and user is not authenticated
  if (to.path.startsWith("/admin") && !isAuthenticated) {
    return navigateTo("/login");
  }
});
