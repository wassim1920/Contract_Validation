import fs from "fs";
import path from "path";




// Function to read PDF content from file
// export const readpdf = async (contract) => {
//   try {
//     // Check if the contract object and pdf_path property exist
//     if (!contract || !contract.pdf_path) {
//       throw new Error('Contract object or PDF path not provided');
//     }

//     // Construct full path on Windows
//     const fullPath = path.join('C:\\', contract.pdf_path);

//     // Read the PDF file asynchronously
//     const pdfContent = await fs.promises.readFile(fullPath, 'utf8');
//     return pdfContent;
//   } catch (error) {
//     throw new Error('Error reading PDF file: ' + error.message);
//   }
// };


// export const readpdf = async (req, res, next) => {
//   try {
//     const { name } = req.params;
//     if (!name) {
//       return res.status(400).json({ error: "Folder name is required" });
//     }

//     const folderPath = path.join("C:\\client\\", name);

//     if (!fs.existsSync(folderPath)) {
//       return res.status(404).json({ error: "Folder not found" });
//     }

//     // Read files from the folder
//     const files = await fs.promises.readdir(folderPath);

//     // Filter out only files
//     const fileNames = files.filter((file) =>
//       fs.statSync(path.join(folderPath, file)).isFile()
//     );
//     res.status(200).json(fileNames);
//   } catch (error) {
//     console.error("Error reading files from folder:", error);
//     next(error);
//   }
// };


export const getAllFolders = async (req, res, next) => {
    
    try {
      const  directoryPath = "C:\\contract\\" 
      if (!directoryPath) {
        return res.status(400).json({ error: "Directory path is required" });
      }
  
      // Read contents of the directory
      const contents = await fs.promises.readdir(directoryPath);
  
      // Filter out only folders
      const folders = contents.filter((item) =>
        fs.statSync(path.join(directoryPath, item)).isDirectory()
      );
  
      res.status(200).json(folders);
    } catch (error) {
      console.error("Error reading folders:", error);
      next(error);
    }
  };
  




function readPDF(contractId) {
    const contract = findContractById(contractId);
    if (!contract) {
        console.error(`Contract with ID ${contractId} not found`);
        return null;
    }

    // Construct the full path to the PDF file
    const fullPath = path.join('C:', contract.pdf_path);

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
        console.error(`PDF file for contract ${contractId} not found at ${fullPath}`);
        return null;
    }

    // Read the PDF file
    try {
        const pdfContent = fs.readFileSync(fullPath, 'utf8');
        console.log(`PDF content for contract ${contractId}:`);
        console.log(pdfContent);
        return pdfContent;
    } catch (err) {
        console.error(`Error reading PDF file for contract ${contractId}:`, err);
        return null;
    }
}