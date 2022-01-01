"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const { App } = require(`@slack/bolt`);
const config = {
    token: process.env.SLACK_SIGNING_SECRET,
    signingSecret: process.env.SLACK_BOT_TOKEN,
};
exports.app = new App(config);
//# sourceMappingURL=bolt.js.map