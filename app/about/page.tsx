const page = async () => {
  return (
    <>
      <div className="content">
        <h1>Server Side Rendering Test Page</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="card">
          <h2>User Profile</h2>
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Location: New York</p>
        </div>

        <div className="card">
          <h2>Latest Articles</h2>
          <div>
            <h3>Article One</h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div>
            <h3>Article Two</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div>
            <h3>Article Three</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="card">
          <h2>Statistics</h2>
          <div>Total Users: 25,483</div>
          <div>Active Users: 12,942</div>
          <div>Orders Today: 1,287</div>
          <div>Revenue: $84,293</div>
        </div>

        <div className="card">
          <h2>Products</h2>

          <div>
            <h3>Laptop</h3>
            <p>High performance device for developers.</p>
          </div>

          <div>
            <h3>Phone</h3>
            <p>Modern smartphone with advanced features.</p>
          </div>

          <div>
            <h3>Tablet</h3>
            <p>Portable device for entertainment and work.</p>
          </div>

          <div>
            <h3>Monitor</h3>
            <p>27-inch 4K display for productivity.</p>
          </div>
        </div>

        <div className="card">
          <h2>Long Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
          <p>Integer vitae libero ac risus egestas placerat.</p>
          <p>Morbi in sem quis dui placerat ornare.</p>
          <p>Praesent dapibus, neque id cursus faucibus.</p>
          <p>Nam dui mi, tincidunt quis, accumsan porttitor.</p>
          <p>Donec vitae sapien ut libero venenatis faucibus.</p>
          <p>Nullam quis ante. Etiam sit amet orci eget eros.</p>
          <p>Sed cursus turpis vitae tortor.</p>
          <p>Curabitur vestibulum aliquam leo.</p>
        </div>
      </div>
    </>
  );
};
export default page;
