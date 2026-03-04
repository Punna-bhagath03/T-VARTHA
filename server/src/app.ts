import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import newsRoutes from './routes/newsRoutes';

const app = express();

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  if (error && typeof error === 'object') {
    const errorObj = error as { message?: unknown; error?: { message?: unknown } };

    if (typeof errorObj.message === 'string') {
      return errorObj.message;
    }

    if (typeof errorObj.error?.message === 'string') {
      return errorObj.error.message;
    }
  }

  return 'Internal Server Error';
};

app.use(cors());
app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/news', newsRoutes);

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  const message = getErrorMessage(err);
  const statusCode =
    typeof (err as { statusCode?: unknown })?.statusCode === 'number'
      ? ((err as { statusCode: number }).statusCode as number)
      : typeof (err as { status?: unknown })?.status === 'number'
        ? ((err as { status: number }).status as number)
        : 500;

  res.status(statusCode).json({ message });
});

export default app;
