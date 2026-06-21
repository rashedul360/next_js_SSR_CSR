const Products = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const data = await res.json();
  return <h1>Products {data?.title}</h1>;
};
export default Products;
