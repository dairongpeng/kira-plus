<script>
  import "../app.css";
  import { onMount } from "svelte";
  // 从SvelteKit导入goto函数，用来进行客户端导航。
  import { goto } from "$app/navigation";

  // 在组件挂载时，使用goto函数自动导航到/login页面。
  // 这意味着每次加载这个布局组件时，都会立即重定向到登录页面。
  onMount(() => {
    goto("/login");
  });
</script>

<nav class="bg-gray-800 p-4 text-white">
  <div class="container mx-auto">
    <a href="/login" class="mr-5 hover:underline">登录</a>
    <a href="/" class="mr-5 hover:underline">主页</a>
    <a href="/blog" class="mr-5 hover:underline">博客</a>
    <a
      class="mr-5 hover:underline rounded-md md:hover:bg-indigo-50 md:hover:dark:bg-indigo-900 py-1 md:px-3 transition-colors umami--click--nav-item-🏠 Home"
      href="/">🏠 主页</a
    >
  </div>
</nav>

<!-- 插槽，用于在此布局中嵌入其他内容。插槽是 Svelte 中的一种机制，允许父组件向子组件传递内容。-->
<!-- 在这个布局文件中，插槽将包含路由匹配的具体页面内容。 -->
<slot />
