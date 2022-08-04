import express from 'express';
import path from 'path';
import "reflect-metadata";

const app = express()

import './database';

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});