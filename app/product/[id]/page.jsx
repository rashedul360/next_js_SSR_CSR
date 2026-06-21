// app/product/[id]/page.jsx

// Optional (default true)
export const dynamicParams = true;

// These pages will be generated at build time
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

// Optional: regenerate every 60 seconds (ISR)
export const revalidate = 5;

export default async function Page({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Product {id}</h1>
      <p>Time: {new Date().toTimeString()}</p>
    </div>
  );
}
