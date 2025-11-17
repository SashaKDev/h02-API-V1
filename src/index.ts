import express from 'express';

const app = express();
setupApp(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));