module.exports = function (plop) {
	
  plop.setGenerator('component', {
    description: 'Create a component or page',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name:'
    }, {
      type: 'list',
      name: 'path',
      message: 'Component directory:',
      default: 'components',
      choices: ['components', 'pages']
    }],
    actions: [{
      type: 'add',
      path: '../src/{{path}}/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/Component/index.tsx.hbs',
    }, {
      type: 'add',
      path: '../src/{{path}}/{{pascalCase name}}/styles.ts',
      templateFile: 'templates/Component/styles.ts.hbs',
    }, {
      type: 'add',
      path: '../src/{{path}}/{{pascalCase name}}/test.tsx',
      templateFile: 'templates/Component/test.tsx.hbs',
    }]
  });
};
