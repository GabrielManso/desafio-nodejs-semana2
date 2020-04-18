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
    const;

    const getBalanceBetweenIncomeAndOutcome = this.transactionsRepository
      .getBalance
      // Eu nao sei qual parametro passar aqui
      ();
  }
}

export default CreateTransactionService;
