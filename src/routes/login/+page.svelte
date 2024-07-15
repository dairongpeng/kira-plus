<script>
  import { goto } from "$app/navigation";

  let username = "";
  let password = "";

  /**
   * @param {{ preventDefault: () => void; }} event
   */
  async function handleLogin(event) {
    event.preventDefault();
    // 模拟登录逻辑
    if (username === "user" && password === "password") {
      // 登录成功后跳转到主页
      goto("/");
    } else {
      alert("用户名或密码错误");
    }
  }
</script>

<svelte:head>
  <title>登录 - 我的 SvelteKit 网站</title>
  <meta name="description" content="用户登录页面" />
</svelte:head>

<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
    <h1 class="text-2xl font-bold text-center">登录</h1>
    <form on:submit={handleLogin} class="space-y-6">
      <div class="form-control">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
          <span class="label-text">用户名</span>
        </label>
        <input
          type="text"
          bind:value={username}
          class="input input-bordered w-full"
          required
        />
      </div>
      <div class="form-control">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
          <span class="label-text">密码</span>
        </label>
        <input
          type="password"
          bind:value={password}
          class="input input-bordered w-full"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary w-full">登录</button>
    </form>
  </div>
</div>
