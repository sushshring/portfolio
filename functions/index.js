const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
const cors = require('cors')({origin: true});
const path = require('path');
const os = require('os');
const fs = require('fs');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.test = functions.https.onRequest((req, res) => {
    console.log("TESTTTT");
    res.status(200).send("TESTTTT");
});

exports.resume = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if (req && req.method === "GET") {
            if (true || req.get('origin') && req.get('origin') === "sushshring.me") {
                const db = admin.firestore();
                db.collection("resume").get().then((snapshot) => {
                    if (snapshot.length === 0) {
                        res.status(404).send("ERROR: Could not find link");
                    } else {
                        snapshot.forEach(doc => {
                            res.status(200).send(doc.data().ref);
                        });
                    }
                }, err => {
                    console.error(err);
                    res.status(500).send(err);
                });
            }
        }
        else {
            res.status(400).send("Illegal request");
        }
    });
});

exports.formpost = functions.https.onRequest((req, res) => {
    if (req) {
        if (req.method.post) {
            console.log(req.get('origin'));
            if (req.get('origin') && req.get('origin') === "sushshring.me") {
                transporter.verify((err, succ) => {
                    if (err) {
                        console.error(err);
                        res.status(500).send(err);
                    }
                    console.log("Server is ready to send messages");
                });
            }
        }
    }
});