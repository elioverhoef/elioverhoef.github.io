const fs = require('fs');
const path = require('path');

function bundleContent() {
  ['blogs', 'projects'].forEach(type => {
    const sourceDir = path.join(__dirname, `../public/${type}`);
    
    // Ensure directory exists
    if (!fs.existsSync(sourceDir)) {
      console.error(`Directory not found: ${sourceDir}`);
      process.exit(1);
    }

    // Read index.json
    const indexPath = path.join(sourceDir, 'index.json');
    if (!fs.existsSync(indexPath)) {
      console.error(`Index not found: ${indexPath}`);
      process.exit(1);
    }

    const files = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    
    // Create content bundle
    const bundle = {};
    files.forEach(filename => {
      const filePath = path.join(sourceDir, filename);
      if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
      }
      const content = fs.readFileSync(filePath, 'utf8');
      bundle[filename] = content;
    });
    
    // Write bundle
    const bundlePath = path.join(sourceDir, 'content-bundle.json');
    fs.writeFileSync(bundlePath, JSON.stringify(bundle, null, 2));
    
    console.log(`Created ${type} bundle with ${Object.keys(bundle).length} files`);
  });
}

bundleContent(); 