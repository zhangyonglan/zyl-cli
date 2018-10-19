'use strict'
const exec = require('child_process').exec
const projectUrl = 'https://github.com/screetBloom/wecat.js.git'

module.exports = () => {
    console.log('this is my first commander >>>>>> ')
    let cmdStr = `git clone `+projectUrl

    exec(cmdStr, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
            process.exit()
        }
        console.log('pull我们的项目已经成功了')
        process.exit()
    })

}