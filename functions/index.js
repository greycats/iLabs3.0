/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
// const querystring = require('querystring')
// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Your company name to include in the emails
// TODO: Change this to your app or company name to customize the email sent.
// const APP_NAME = 'Cloud Storage for Firebase quickstart';

// [START sendWelcomeEmail]
/**
 * Sends a welcome email to new user.
 */
// [START onCreateTrigger]
// exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
// // [END onCreateTrigger]
//   // [START eventAttributes]
//   const email = user.email; // The email of the user.
//   const displayName = user.displayName; // The display name of the user.
//   // [END eventAttributes]

//   return sendWelcomeEmail(email, displayName);
// });
// [END sendWelcomeEmail]

// [START sendByeEmail]
/**
 * Send an account deleted email confirmation to users who delete their accounts.
 */
// [START onDeleteTrigger]
// exports.sendByeEmail = functions.auth.user().onDelete((user) => {
// // [END onDeleteTrigger]
//   const email = user.email;
//   const displayName = user.displayName;

//   return sendGoodbyeEmail(email, displayName);
// });
// [END sendByeEmail]

// Sends a welcome email to the given user.
// function sendWelcomeEmail(email, displayName) {
//   const mailOptions = {
//     from: `${APP_NAME} <noreply@firebase.com>`,
//     to: email,
//   };

//   // The user subscribed to the newsletter.
//   mailOptions.subject = `Welcome to ${APP_NAME}!`;
//   mailOptions.text = `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
//   return mailTransport.sendMail(mailOptions).then(() => {
//     return console.log('New welcome email sent to:', email);
//   });
// }

// Sends a goodbye email to the given user.
// function sendGoodbyeEmail(email, displayName) {
//   const mailOptions = {
//     from: `${APP_NAME} <noreply@firebase.com>`,
//     to: email,
//   };

//   // The user unsubscribed to the newsletter.
//   mailOptions.subject = `Bye!`;
//   mailOptions.text = `Hey ${displayName || ''}!, We confirm that we have deleted your ${APP_NAME} account.`;
//   return mailTransport.sendMail(mailOptions).then(() => {
//     return console.log('Account deletion confirmation email sent to:', email);
//   });
// }

function sendProjectEmail(name, email, linkedin, project) {
  // console.log('option is', options)
  // console.log(typeof options)
  // const name = options.user.name
  // const email = options.user.email
  // const house = options.house.overview
  // const location = options.house.location
  // const startDate = options.bookingDate[0]
  // const endDate = options.bookingDate[1]

  // console.log('name is', name)
  // console.log('email is', email)
  // console.log('house is', house)
  // console.log('location is', location)

  const mailOptions = {
    from:'iLabs <noreply@interactivelabs.com>',
    to: 'hello@interactivelabs.co',
    subject: `New project from ${email}`,
    text: ` user: ${name} \n email: ${email} \n linkedIn: ${linkedin} \n project: ${project}`
  }

  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('Account deletion confirmation email sent');
  });
}

exports.sendEmail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const params = request.query

    console.log('query name', params.name)

    const name = params.name
    const email = params.email
    const house = params.linkedin || 'N/A'
    const project = params.project

    const sendMailPromise = sendProjectEmail(name, email, house, project)
    sendMailPromise.then(res=>{
      response.status(200).send('OK WORKS')
      return ''
    })
    .catch(err => {
      console.log(err)
      response.status(500).send('FAILED')
    })
  })
})
