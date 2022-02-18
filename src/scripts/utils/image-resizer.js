const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(process.cwd(), 'dist/images/hero');

const init = () => {
  let files = 0;
  if (!fs.existsSync(target)) {
    return;
  }

  fs.readdirSync(target)
    .forEach((image) => {
      const [filename, ext] = image.split('.');
      if (filename.search('large') !== -1) {
        files += 1;
        const newName = `${target}/${`${
          filename
            .split('-')
            .slice(0, 2)
            .join('-')}-small.${ext}`
        }`;

        sharp(`${target}/${image}`)
          .resize(800)
          .jpeg({ progressive: true, quality: 50, force: false })
          .webp({ progressive: true, quality: 50, force: false })
          .toFile(
            path.resolve(__dirname, newName), (err, info) => console.log({ [newName]: info }),
          );
      }
    });
  console.log(`Resizing ${files} file(s) succesfully at ${target}`);
};

init();
