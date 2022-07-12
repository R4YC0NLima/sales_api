import 'reflect-metadata';
import "express-async-errors";

import express, { Application, NextFunction, Request, Response } from 'express';
import  cors from 'cors';
import AppError from '@shared/errors/AppError';
import { routes } from "./routes";
import "@shared/infra/typeorm";

const app: Application = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((error: Error, request:Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error!'
  })
})

export { app };
