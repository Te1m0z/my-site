const fs = require('fs');
const path = require('path');
const SVGSpriter =  require('svg-sprite')
// Create spriter instance (see below for `config` examples)
const spriter = new SVGSpriter({
  mode: {
    symbol: {
      dest: path.resolve('public'),
      sprite: 'sprite.svg'
    }
  }
});

function addSvgFilesToSpriter(directory) {
  const files = fs.readdirSync(directory);

  console.log(files)

  files.forEach(file => {
    const filePath = path.join(directory, file);
    if (path.extname(filePath).toLowerCase() === '.svg') {
      const svgContent = fs.readFileSync(filePath, 'utf-8');
      const svgPath = path.relative(process.cwd(), filePath);
      spriter.add(svgPath, null, svgContent);
    }
  });
}

const svgDirectory = path.resolve('src/assets/icons');

addSvgFilesToSpriter(svgDirectory);


spriter.compile((error, result) => {
  /* Write `result` files to disk (or do whatever with them ...) */
  for (const mode in result) {
      for (const resource in result[mode]) {
          fs.mkdirSync(path.dirname(result[mode][resource].path), { recursive: true });
          fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
      }
  }
});
