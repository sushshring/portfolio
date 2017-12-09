var functions = require('firebase-functions');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
     host: 'smtp.google.com',
     port: 465,
     secure: true,
     auth: {
         user: 'sush.shring@gmail.com',
         password: functions.config().emailservice.password
     }
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.formpost = functions.https.onRequest((req, res) => {
    if (req) {
        if (req.method.post) {
            console.log(req.get('origin'));
            if (req.get('origin') && req.get('origin') == "sushshring.me") {
                transporter.verify((err, succ) => {
                    if (err){
                        console.error(err);
                        res.status(500).send(err);
                    }
                    console.log("Server is ready to send messages");
                });
            }
        }
    }
});