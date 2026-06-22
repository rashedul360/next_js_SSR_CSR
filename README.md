## topics

1.  SSR
2.  CSR
3.  SSG
4.  Streaming
5.  Server only code
6.  Third Party Packages
    1. in components folder. ImageSlide.jsx is created as a client component but it is imported in a server component.(but if we directly use in server component. it can't find client essentials. and through error.)

       ```javascript
       import { serverSideFunction } from "@/utils/server-utils";
       import ImageSlider from "@/components/imageSlide";
       const page = async () => {
         const result = serverSideFunction();
         return (
           <>
             {" "}
             {result} <ImageSlider />
           </>
         );
       };
       export default page;
       ```

       image slider acts as a client component but whole works in server

7.  Context Providers (server component)
    if we use directly in server component or root component. this through an error (because it could not find any client assentials. so that wen can use it by applying tricks (like third party packages)). first of all create a client component and make context over there. and import it into server component or root component.

8.  client only code
    client only code works with browser-specific features - like dom manipulation, window objetc, localstorage etc
    `package name is client-only`

    ```javascript
    "utils/client-utils.js";

    import "client-only";
    export const clientSideFunction = () => {
      return "client side function from utils/client-utils";
    };
    ```

    ```javascript
    "client-router/page.tsx";

    "use client";
    import { clientSideFunction } from "@/utils/client-utils";
    const page = () => {
      const result = clientSideFunction();
      return <>{result}</>;
    };
    export default page;
    ```

9.  Client Component Placement
    if client declared in the navbar component shouldn't that be the only compoment running client side (common misconception)
    when we mark a component with client it doesn't effect that componet but also effect every child component in the component tree bellow it.

    ![Cat](screenshot/Client%20Component%20Placement%201.png "Client Component Placement 1.png")

    ##### in our case

    nav link and navsearch also client component
    ![Cat](screenshot/Client%20Component%20Placement%202.png "Client Component Placement 2.png")

    ##### we can fix like this

    ![Cat](screenshot/Client%20Component%20Placement%203.png "Client Component Placement 3.png")

    #### node: reduce component tree length or do client server or mix.

10. Interleaving Server and Client Components
    example -> @app/interleaving-server/page.tsx
    example -> @app/interleaving-client/page.tsx

    #### Note:

              client component inside server : works perfectly
              server component inside client : doesn't work (because Client creates a browser boundary), but works where doesn't create any server action.

11. Data Fetching
    client side.
    server side

    fetch data in server component: go -> /users for example

    #### now: handle error and loading state in SSC

    For Loading: create a loading.tsx for each route. and design it
    For Error : create a error.tsx for each route. and design it,

    ###### note: error.tsx is s client side component
