import Contract from "../models/Contract.js";
import Customer from "../models/Customer.js";

export const searchContractsByCreationDate = async (req, res, next) => {
  try {
    const { startDate } = req.query;
    if (!startDate) {
      return res
        .status(400)
        .json({ error: "Both start date and end date are required" });
    }
    const start = new Date(startDate);
    const contracts = await Contract.find({
      creation_date: { $gte: start },
    });

    res.status(200).json(contracts);
  } catch (error) {
    console.error("Error searching contracts by creation date:", error);
    next(error);
  }
};


export const searchContractsByMSISDN = async (req, res, next) => {
  try {
    const { MSISDN } = req.query;
    if (!MSISDN) {
      return res.status(400).json({ error: "MSISDN is required" });
    }
    const contracts = await Contract.find({ MSISDN: MSISDN });
    res.status(200).json(contracts);
    console.log(contracts);
  } catch (error) {
    console.error("Error searching contracts by MSISDN:", error);
    next(error);
  }
};

export const searchByCin = async (req, res, next) => {
  const { cin } = req.query;
  try {
    const customer = await Customer.findOne({  cin });
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    const contracts = await Contract.find({ customer: customer._id }).populate(
      "customer"
    );
    res.status(200).json(contracts);
  } catch (error) {
    console.error("Error searching by CIN:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const searchByName = async (req, res, next) => {
  const { first_name } = req.query;
  try {
    const customer = await Customer.findOne({ first_name });
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    const contracts = await Contract.find({ customer: customer._id }).populate(
      "customer"
    );
    res.status(200).json(contracts);
  } catch (err) {
    console.error("Error searching by name:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// export const GetAllCustomer = async (req, res, next) => {
//   try {
//       const getAllCustomer = await Customer.find();
//       res.status(200).json(getAllCustomer);
//   } catch(err) {
//       next(err);
//   }
// }

export const GetAllCustomer = async (req,res,next)=>{
  try{
      const limit = req.query.limit ? parseInt(req.query.limit) : 20; 
      const getAllContrat= await Customer.find().limit(limit)
      res.status(200).json(getAllContrat)
  }catch(err) {
      next(err);
  }
}