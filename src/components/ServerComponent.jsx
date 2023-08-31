async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  return await res.json();
}

export default async function ServerComponent() {
  const data = await getData();

  console.log(data);

  return (
    <div>
      <h1>Server Components</h1>
    </div>
  );
}
