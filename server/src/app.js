import express from 'express';

const app = express();

app.use('api/v1/user', userRoute);
export default app;