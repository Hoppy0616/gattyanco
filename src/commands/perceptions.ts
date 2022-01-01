import { app } from '../initializers/bolt'
export default function() {
  app.command(`/gaccha`, async ({ ack, body, client, logger }) => {
    await ack();
    
  )}