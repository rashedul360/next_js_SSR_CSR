const Comments = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await res.json();

  return <h1>Comments {data?.title}</h1>;
};
export default Comments;
