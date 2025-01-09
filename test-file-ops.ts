import fs from 'fs/promises';
import path from 'path';

async function testFileWrite() {
  const testDir = process.cwd();
  const testFile = path.join(testDir, './src/test-write.txt');

  try {
    // Simple file write
    console.log('Writing test file...');
    await fs.writeFile(testFile, 'This is a test file.\nIf you can see this, file writing works!', 'utf-8');
    console.log('Successfully wrote test file:', testFile);

  } catch (error) {
    console.error('Error during file write:', error);
  }
}

testFileWrite().catch(console.error);
