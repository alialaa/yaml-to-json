yaml = require('js-yaml');
fs = require('fs');

const inputFile = 'input.yaml';
const outputFile = 'output.json';
  
const json = yaml.load(fs.readFileSync(inputFile,  'utf8'));

fs.writeFileSync(outputFile, JSON.stringify(json, null, 2));