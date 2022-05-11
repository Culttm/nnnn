import * as functions from "firebase-functions";
const {app} = require('../dist/server/main');

export const ssr = functions.https.onRequest(app());
