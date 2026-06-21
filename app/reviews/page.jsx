import { Suspense } from "react";
import Comments from "../../components/Comments";
import Products from "../../components/Products";

const page = async () => {
  return (
    <>
      <h1>reviews</h1>
      <Suspense fallback="Loading products">
        <Products />
      </Suspense>
      <Suspense fallback={<h1>loading comments</h1>}>
        <Comments />
      </Suspense>
    </>
  );
};
export default page;
