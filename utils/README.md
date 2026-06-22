# server only code

### some code is specially desgined to run on the server

### handle enviromnent variables, communicate directly with database, process sensetive data

### since JS module can be shared between server and client components, code meant for the server could accidentally find its way to client

### this is bad news as i can bloat your JS bundle, expose your secret keys, dtaabase queries, sensative business logic

# solution server only code

-> through a build time error if someone accidentally import server code into client code

``npm install server-only`
import it like this in folder utils/server-utils
