import { Router } from 'express';
import { uuid } from 'uuidv4';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const transaction = transactionsRepository.all();

    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;

    const createTransaction = new CreateTransactionService(
      transactionsRepository,
    );

    const transaction = transactionsRepository.create({
      /* Eu acho que ta errado isso aqui, por que se eu nao me engano o Diego
      usou para pegar as informações em outro arquivo
      , mas eu nao lembro qual, mas talvez pode ser esse tbm */

      id: uuid(),
      title,
      value,
      type,
    });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
