
import mongoose from 'mongoose';

const ContractSchema =  new mongoose.Schema({
    creation_date: {
        type: Date,
        required: true
    },
    activation: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'activation',

    },
    portability: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'portability',
  
    },
    update_date :{
        type: Date,
    },
    pdf_path: {
        type: String,
        required: true,
    },
    signature_path: {
        type: String,
        required: true,
    },
    agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'agent',
        required: true
    },
    id:{
        type: Number,
        required: true,
        unique : true
    },
    SIM: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'SIM',
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Customer',
        required: true,
    },
    MSISDN: {
        type: String,
        required: true,
    },
    arta_id:{
        type: Number,
        required: true,
    },
    mvno_id: {
        type: Number,
        required: true,
    }
},{versionKey: false});

const Contract = mongoose.model('Contract', ContractSchema);

export default Contract;

