const fs=require('fs');
const vm=require('vm');
const path='app/src/main/assets/js/app.js';
const code=fs.readFileSync(path,'utf8');
new vm.Script(code,{filename:path});
const required=['function renderHome','function renderParts','function renderDocs','function renderSettings','function validateBackup','function applyTheme','function compareVersions'];
for(const token of required){if(!code.includes(token))throw new Error('Falta '+token)}
const gradle=fs.readFileSync('app/build.gradle','utf8');
if(!gradle.includes('versionName "2.3.0"'))throw new Error('Version Android no actualizada');
console.log('OK: sintaxis JS, pantallas principales, tema, respaldo y version 2.3.0');
