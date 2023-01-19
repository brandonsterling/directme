export default async function handler(req, res) {
  const signingSecret = process.env.SLACK_SIGNING_SECRET;
  const botToken = process.env.BOT_TOKEN;

  if (req.method === "POST") {
    const { team_id, response_url, user_id } = req.body;

    try {
      const headers = {
        Authorization: `Bearer ${botToken}`,
        "Content-type": "application/json",
      };

      let raw = {
        response_type: "in_channel",
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "I'm a brand new Slack bot!",
            },
          },
        ],
      };

      const requestOptions = {
        method: "POST",
        headers,
        body: JSON.stringify(raw),
      };

      await fetch(`${response_url}`, requestOptions);
      res.status(200).end();
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(404).end();
  }
}
