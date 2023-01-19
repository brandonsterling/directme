export default function handler(req, res) {
  console.log(req.body);
  const { challenge } = req.body;

  if (req.method === "POST" && challenge) {
    try {
      res.status(200).json({
        challenge: `${challenge}`,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
