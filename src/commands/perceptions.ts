import { app } from "../initializers/bolt";
export default function () {
  app.command(`/gaccha`, async ({ ack, command, say }) => {
    await ack();
    say(`${command.text}`);
  });
}
