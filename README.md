# Sample Project for adding a React and Patternfly GUI to Quarkus 

This project uses Quarkus, the Supersonic Subatomic Java Framework and has a React project embedded in the /src/main/webapp folder.  The React assets are compiled implicitly during the maven build.  

If you want to learn more about Quarkus, please visit its website: https://quarkus.io/ .
If you want to learn more about Patternfly , please visit its website: https://www.patternfly.org/v4/ .

## Running the application in dev mode

Start Quarkus in Dev mode:
```shell script
./mvnw compile quarkus:dev
```

And in a new terminal React in dev mode:
```shell script
cd src/main/webapp
node start
```

Then you can access the React frontend under http://localhost:3000

## Packaging and running the application

The application can be packaged using:
```shell script
./mvnw package
```
It produces the `quarkus-run.jar` file in the `target/quarkus-app/` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `target/quarkus-app/lib/` directory.

If you want to build an _über-jar_, execute the following command:
```shell script
./mvnw package -Dquarkus.package.type=uber-jar
```

The application is now runnable using `java -jar target/quarkus-app/quarkus-run.jar`.

## Creating a native executable

You can create a native executable using: 
```shell script
./mvnw package -Pnative
```

Or, if you don't have GraalVM installed, you can run the native executable build in a container using: 
```shell script
./mvnw package -Pnative -Dquarkus.native.container-build=true
```

You can then execute your native executable with: `./target/react-quarkuss-1.0.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult https://quarkus.io/guides/maven-tooling.html.

## Related guides

- RESTEasy JSON-B ([guide](https://quarkus.io/guides/rest-json)): JSON-B serialization support for RESTEasy
- RESTEasy JAX-RS ([guide](https://quarkus.io/guides/rest-json)): REST endpoint framework implementing JAX-RS and more


