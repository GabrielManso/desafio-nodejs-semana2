/* import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const balanceRouter = Router();

const transactionsRepository = new TransactionsRepository();

balanceRouter.get('/', (request, response) => {
  try {
    const transaction = transactionsRepository.getBalance();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
}); */
