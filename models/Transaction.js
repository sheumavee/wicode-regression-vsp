var mongoose = require('mongoose');

//var Enum = require ('enum');
//var transactionTypeEnum = new Enum({'PAYMENT': 1, 'DEPOSIT': 2, 'WITHDRAWAL': 3});

var mongoose = require('mongoose');

var transactionSchema = mongoose.Schema({
    description: String, 
    basketAmount: Number,
    tipAmount: Number,
    paymentAmount: Number, 
    transactionType: String, //PAYMENT, DEPOSIT, WITHDRAWAL
    transactionTestType: String, //SUCCESS-TEST; FAIL-TEST
    adviceTestType: String, //SUCCESS-TEST; FAIL-TEST
    state: String, //NEW - just created, wiCodeBOOKED - wicode is stored, PENDING - platform started transaction, SUCCESSFULL-PENDING-RECON, SUCCESS - successfully finalised, FAILED - successfully failed
    bookedWiCode: String, //token obtained from Platform
    //testState: String, //"In Progress, Pending, Abandoned, Successful Test, Failed Test"
    transactionProcessingLogs: Array, //
    wiTrxId: String,
    UserID: String
});

module.exports = mongoose.model('Transaction', transactionSchema);