var inquirer = require('inquirer')

async function test (){
  for(let i=0;i<2;i++){
    let abc = 'test'
    let answers = await inquirer.prompt([{
        type: 'confirm',
        name: 'bacon',
        message: `对于项目：${abc}，是否添加新的分类？`
      }])
    console.log(answers.bacon)
  }
}
console.log('https://api.github.com/repos/eggjs/egg')