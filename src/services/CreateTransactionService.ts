import { uuid } from 'uuidv4';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, type, value }: Request): Transaction {
    const transaction = this.transactionsRepository.create({
      id: uuid(),
      title,
      type,
      value,
    });

    const getBalanceBetweenIncomeAndOutcome = this.transactionsRepository.getBalance(
      {
        id: uuid(),
        title,
        type,
        value,
      },
    );
    return transaction;
  }
}

export default CreateTransactionService;
