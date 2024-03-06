import fs from "fs";

export const processFiles = async (req, res) => {
    try {
      // Assuming req.body contains the contract document data
      
  
      // Construct the PDF path dynamically
      const pdfPath = `C:\\Client\\10824300\\contr_100600068401.pdf`;
  
      // Read the PDF file
      const pdfData = fs.readFileSync(pdfPath);
  
      // Set the appropriate Content-Type header
      res.setHeader("Content-Type", "application/pdf");
  
      // Send the PDF file as the response
      res.send(pdfData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  };

export const processImage = async (req, res) => {
  try {
    const imagePath = "C:\\Client\\10824300\\recto_100600068401.jpg";
    const imageData = fs.readFileSync(imagePath);
    res.setHeader("Content-Type", "image/jpeg");
    res.send(imageData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const processImageVerso = async (req, res) => {
  try {
    const imagePath = "C:\\Client\\10824300\\verso_100600068401.jpg";

    const imageData = fs.readFileSync(imagePath);

    res.setHeader("Content-Type", "image/jpeg");

    res.send(imageData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
