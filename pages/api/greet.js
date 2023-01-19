import { App } from "@slack/bolt";

export default async function handler(request, response) {
  const signingSecret = process.env.SLACK_SIGNING_SECRET;
  const botToken = process.env.BOT_TOKEN;

  const app = new App({
    signingSecret: signingSecret,
    token: botToken,
  });
  async () => {
    await app.start(3000 || 12000);

    app.message("quote", async ({ message, say }) => {
      let resp = await fetch(`https://api.quotable.io/random`);
      const quote = resp.data.content;
      await say(`Hello, <@${message.user}>, ${quote}`);
    });

    console.log(`⚡️ Bolt app is running!`);
  };
}
