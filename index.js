const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json({ limit: '70mb' }));
app.use(express.urlencoded({ limit: '70mb', extended: true}));
app.use(async (req, res) => {
 for (const alertId in req.body.alerts) {
    const alert = req.body.alerts[alertId];
    if (alert.status !== "firing")
      continue;
    const annotations = Object.assign({}, req.body.commonAnnotations, alert.annotations);
    const body = {
      title: annotations.title,
      message: annotations.description,
      priority: parseInt(annotations.priority || process.env.GOTIFY_DEFAULT_PRIORITY)
    };
    try {
      await axios.post(process.env.GOTIFY_URL, body, {
        headers: {
          "Content-Type": "application/json",
          "X-Gotify-Key": process.env.GOTIFY_TOKEN
        }
      });
    } catch (error) {
      console.error("Error dispatching message:", error);
    }
 }
 res.end("SUCCESS\n");
});

const port = process.env.PORT | 8435;
app.listen(port, () => {
    console.log(`Server Listen On http://localhost:${port}`);
});