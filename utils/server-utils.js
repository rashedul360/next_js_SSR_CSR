import "server-only";
const serverSideFunction = () => {
  console.log(`
    use multiple libraries
    use environment variables
    interect with database
    `);
  return "server result form utils/server-route.js";
};
export { serverSideFunction };
