import Contract from "../models/Contract.js";

export const GetAllContrat = async (req,res,next)=>{
    try{
        const limit = req.query.limit ? parseInt(req.query.limit) : 20;
        const getAllContrat= await Contract.find().limit(limit)
        res.status(200).json(getAllContrat)
    }catch(err) {
        next(err);
    }
}

// export const GetAllContrat = async (req, res, next) => {
//   try {
//     const getAllContrat = await Contract.find();
//     res.status(200).json(getAllContrat);
//   } catch (err) {
//     next(err);
//   }
// };

export const findContractById = async (req, res, next) => {
  try {
    const getContrat = await Contract.findById(req.params.id);
    res.status(200).json(getContrat);
  } catch (err) {
    next(err);
  }
};
