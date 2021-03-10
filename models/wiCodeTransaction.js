// var mongoose = require('mongoose');

// var transactionSchema = mongoose.Schema({
//     description: String, 
//     amount: Integer, 
//     transactionType: String, //PAYMENT, DEPOSIT, WITHDRAWAL
//     testType: String, //SUCCESS-TEST; FAIL-TEST
//     state: String, //NEW - just created, wiCodeBOOKED - wicode is stored, PENDING - platform started transaction, SUCCESS - successfully finalised, FAILED - successfully failed
//     bookedWiCode: String, //token obtained from Platform
//     testState: String, //"In Progress, Pending, Abandoned, Successful Test, Failed Test"
//     testStateDescription: String //Readable state for users to see 
// });

// module.exports = mongoose.model('Transaction', transactionSchema);