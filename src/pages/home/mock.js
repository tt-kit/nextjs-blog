export async function getLatestPosts() {
  // const response = await fetch('/api/posts?limit=5');
  // const data = await response.json();
  return [
    {
      id: 1,
      title: "最新文章1",
      content: "这是最新文章1的内容",
      category: "分类1",
      tags: ["标签1", "标签2"],
      createdAt: "2021-01-01T00:00:00.000Z",
      updatedAt: "2021-01-01T00:00:00.000Z",
    },
    {
      id: 2,
      title: "最新文章2",
      content: "这是最新文章2的内容",
      category: "分类2",
      tags: ["标签2", "标签3"],
      createdAt: "2021-01-02T00:00:00.000Z",
      updatedAt: "2021-01-02T00:00:00.000Z",
    },
  ];
}

export async function getCategories() {
  // const response = await fetch('/api/categories');
  // const data = await response.json();
  return [
    {
      id: 1,
      name: "分类1",
    },
    {
      id: 2,
      name: "分类2",
    },
  ];
}

export async function getTags() {
  // const response = await fetch('/api/tags');
  // const data = await response.json();
  return [
    {
      id: 1,
      name: "标签1",
    },
    {
      id: 2,
      name: "标签2",
    },
  ];
}
