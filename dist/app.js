"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bolt_1 = require("./initializers/bolt");
const echo_1 = require("./commands/echo");
(async () => {
    const server = await bolt_1.app.start(process.env.PORT || 3000);
    console.log(`⚡️ Bolt app is running! PORT: ${server.address().port}`);
})();
(0, echo_1.default)();
//# sourceMappingURL=app.js.map