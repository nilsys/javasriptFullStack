let page = 1;
const getPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5_page=${page}`)
  const jsonDatas = await response.json();
  console.log(jsonDatas)
}

getPosts();

//