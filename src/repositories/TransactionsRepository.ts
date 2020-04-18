import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[] = [];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance({ income, outcome, total }: Balance): Transaction {
    // Eu nao sei se o tipo do metodo getBalance ta certo, o Transaction
    const getIncomeValues = this.transactions
      .filter(transaction => transaction.type === 'income')
      .reduce(
        (newIncome, transaction) => newIncome + transaction.value,
        income,
      );

    const getOutcomeValues = this.transactions
      .filter(transaction => transaction.type === 'outcome')
      .reduce(
        (newOutcome, transaction) => newOutcome + transaction.value,
        outcome,
      );

    const diferenceBetweenIncomeAndOutcome = getIncomeValues - getOutcomeValues;

    const getTotalValues = this.transactions.reduce(
      newTotal => newTotal + diferenceBetweenIncomeAndOutcome,
      total,
    );

    return getTotalValues;
  }

  public create({ title, type, value }: Transaction): Transaction {
    const transaction = new Transaction({
      title,
      type: 'income' || 'outcome',
      value,
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
