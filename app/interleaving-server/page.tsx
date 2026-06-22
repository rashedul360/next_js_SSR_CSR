import ClientComponentOne from "@/components/clientComponentOne";
const page = async () => {
  return (
    <>
      <h1>interleaving server</h1>
      <ClientComponentOne />
    </>
  );
};

export default page;
