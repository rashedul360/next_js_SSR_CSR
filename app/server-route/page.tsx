import { serverSideFunction } from "@/utils/server-utils";

import ImageSlider from "@/components/imageSlide";
const page = async () => {
  const result = serverSideFunction();

  return (
    <>
      {result}
      <ImageSlider />
    </>
  );
};
export default page;
