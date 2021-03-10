const { promisify } = require('util');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const passport = require('passport');
const _ = require('lodash');
const validator = require('validator');
const mailChecker = require('mailchecker');
const User = require('../models/User');
const Transaction = require('../models/Transaction');

const randomBytesAsync = promisify(crypto.randomBytes);

/**
 * GET /transaction page
 * New transaction page.
 */
exports.getNewTransaction = (req, res) => {
    res.render('transactions/transaction', {
      title: 'New Transaction'
    });
  };
  