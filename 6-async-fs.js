const fs = require('fs').promises;
const path = require('path');

const filepath = path.join(__dirname, 'content', 'subfolder', 'first.txt');

async function readWriteFiles() {
    try {
        await fs.writeFile(filepath, 'Mambo msela wangu');
        console.log("File Written Successfully");

        const data = await fs.readFile(filepath, 'utf-8');
        console.log(data);

    }
    catch(err) {
        console.log("There was an error: ", err);
    }

    console.log("Hello");
}

readWriteFiles()


async function handleFile() {
    try {
      // Append
      await fs.appendFile('content/subfolder/first.txt', 'Appending this line!\n');
      console.log('✅ Line appended');
  
      // Read back to confirm
      const content = await fs.readFile('content/subfolder/first.txt', 'utf-8');
      console.log('📄 Current Content:\n', content);
  
      // Delete the file
    //   await fs.unlink('content/subfolder/first.txt');
    //   console.log('🗑️ File deleted');
    } catch (err) {
      console.error('❌ Error:', err);
    }
  }
  
handleFile();
