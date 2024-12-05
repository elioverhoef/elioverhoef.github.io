const fs = require('fs');
const path = require('path');

function verifyBuild() {
  const buildDir = path.join(__dirname, '../build');
  
  ['projects', 'blogs'].forEach(dir => {
    const typeDir = path.join(buildDir, dir);
    if (!fs.existsSync(typeDir)) {
      console.error(`${dir} directory not found!`);
      process.exit(1);
    }

    // Verify index.json
    const indexPath = path.join(typeDir, 'index.json');
    if (!fs.existsSync(indexPath)) {
      console.error(`${dir}/index.json not found!`);
      process.exit(1);
    }

    // Verify content bundle
    const bundlePath = path.join(typeDir, 'content-bundle.json');
    if (!fs.existsSync(bundlePath)) {
      console.error(`${dir}/content-bundle.json not found!`);
      process.exit(1);
    }

    // Read and verify index.json
    const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    console.log(`Found ${index.length} items in ${dir}/index.json`);

    // Read and verify bundle
    const bundle = JSON.parse(fs.readFileSync(bundlePath, 'utf8'));
    console.log(`Found ${Object.keys(bundle).length} items in ${dir}/content-bundle.json`);

    // Verify all indexed files are in bundle
    index.forEach(filename => {
      if (!bundle[filename]) {
        console.error(`Listed file not found in bundle: ${dir}/${filename}`);
        process.exit(1);
      }
      console.log(`Verified ${dir}/${filename} in bundle`);
    });
  });

  console.log('Build verification completed successfully!');
}

verifyBuild(); 