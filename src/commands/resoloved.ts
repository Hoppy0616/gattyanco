import { app } from '../initializers/bolt'
export default function() {
  app.event('reaction_added', async ({ message, ack, say }) => {
    await　ack()
  })
}