const { lowerCase } = require("lodash");

const config = plop => {
    plop.setGenerator('screen', {
        description: 'create new screen',
        prompts: [
            {
                type: "input",
                name: "name",
                message: "what is the name of the screen"
            }
        ],
        actions: [
            {
                type: "add",
                path: "./src/screens/{{lowerCase name }}/index.js",
                templateFile:"./templates/screen.md"
            },
            {
                type: "add",
                path: "./src/screens/{{lowerCase name}}/styles.js",
                templateFile:"./templates/styles.md"
            }
        ]
    });
}

 

module.exports= config;