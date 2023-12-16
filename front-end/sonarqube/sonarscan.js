const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "e838dd064de0e78c5c39bcbb23aeb758353944ca",
    login: "admin",
    password: "Admin",
    options: {
      "sonar.projectName": "dOpz-Front-End",
      "sonar.projectKey": "dOpz-Front-End",
      "sonar.projectVersion": "0.0.1",
      "sonar.exclusions": "",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.sources": "./src",
    },
  },
  () => process.exit()
);
