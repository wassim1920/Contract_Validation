import mongoose from 'mongoose';
const CustomerSchema =  new mongoose.Schema({
    address: {
        type: String,
        required: true,
        default : 'default',
    },
    city: {
        type: String,
        required: true,
        default : 'default',
    },
    region: {
        type: String,
        required: true,
    },
    postal_code: {
        type: String,
        default: "0000",
    },
    cin: {
        type: String,
        //unique: true
    },
    passport: {
        type: String,
        //unique: true
    },
    creation_date:{
        type: Date,
        required: true,
    },
    email:{
        type: String,
        required: true,
        default : 'default',
    },
    first_name:{
        type: String,
        required: true,
        default : 'default',
    },
    last_name:{
        type: String,
        required: true,
        default : 'default',
    },
    gender: {
        type: String,
        required: true,
        default : 'default',
    },
    update_date: {
        type: Date,
    },
    cin_recto_path:{
        type: String,
    },
    cin_verso_path:{
        type: String,
    },
    passport_path:{
        type: String,
    },
    arta_id:{
        type: Number,
    },
    DOB:{
        type: Date,
        required: true,
        default : new Date(),
    },  
    job:{
        type: String,
        required: true,
        default : 'default',
    },
    issue_date:{
        type: Date,
        required: true,
    },
    POB:{
        type: String,
        required: true,
        default : 'default',
    },
    mvno_id: {
        type: Number,
        required: true,
    }

},{versionKey: false});

const Customer = mongoose.model('Customer', CustomerSchema) ; 
export default Customer;