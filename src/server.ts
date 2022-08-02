import express from 'express';
import "reflect-metadata";

const app = express()

import './database';

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});