import { posts } from "./data.js";

// 当这个页面的路由被访问时，会触发服务端渲染的load函数，返回一个对象
// 页面组件定义了一个export的data对象，会接住这个值，当页面渲染成功后，组件的data就是这个对象
export function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title,
    })),
  };
}
