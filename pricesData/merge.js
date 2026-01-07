const fs = require('fs').promises;
const path = require('path');

async function mergeJsonFiles() {
  const pricesDataPath = __dirname;
  const merged = {};

  try {
    const files = await fs.readdir(pricesDataPath);

    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(pricesDataPath, file);
        const data = await fs.readFile(filePath, 'utf-8');
        const key = file.replace('.json', '');
        merged[key] = JSON.parse(data);
      }
    }

    const outputPath = path.join(pricesDataPath, 'merged.json');
    await fs.writeFile(outputPath, JSON.stringify(merged, null, 2));
    
    console.log(`✓ Merged ${Object.keys(merged).length} JSON files`);
    return merged;
  } catch (error) {
    console.error('Error merging JSON files:', error);
  }
}

mergeJsonFiles();