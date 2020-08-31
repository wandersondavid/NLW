import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { json, urlencoded } from 'body-parser';
import compression from 'compression';

import router from './route';
const app = express();

app.use(helmet());
app.use(cors());
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(compression());

app.use('/nlw/', router);

const port = 9999;
app.listen(port, () => {
    console.log("server -------------- INIT -------------------");
    console.log(`server Listening on port ${port}`);
})

export default app;
