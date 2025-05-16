const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Cobu_Indystry_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
   };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function COBU_INDYSTRY_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
    try {
            let Pair_Code_By_Cobu_Indystry_Tech = Cobu_Indystry_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
            });
            if(!Pair_Code_By_Cobu_Indystry_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                        const code = await Pair_Code_By_Cobu_Indystry_Tech.requestPairingCode(num)
                if(!res.headersSent){
                await res.send({code});
                    }
                }
            Pair_Code_By_Cobu_Indystry_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Cobu_Indystry_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Cobu_Indystry_Tech.sendMessage(Cobu_Indystry_Tech.user.id, { text: '' + b64data });

               let COBU_INDYSTRY_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃QUEEN_ANITA_V2 SESSION IS
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘 DAVID CYRIL 𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Please Follow My Support Channel
Wanna talk to me?👉 https://t.me/deecee_x 👈
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©*2024-2099 David Cyril*

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Cobu_Indystry_Tech.sendMessage(Cobu_Indystry_Tech.user.id,{text:COBU_INDYSTRY_MD_TEXT},{quoted:session})


        await delay(100);
        await Cobu_Indystry_Tech.ws.close();
        return await removeFile('./temp/'+id);
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                        await delay(10000);
                        COBU_INDYSTRY_MD_PAIR_CODE();
                    }
                });
        } catch (
