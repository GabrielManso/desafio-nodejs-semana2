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

  public getBalance({ income, outcome, total }: Balance): Balance {
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

    const diferenceBetweenIncomeAndOutcome =
      total + getIncomeValues - getOutcomeValues;

    return {
      income: getIncomeValues,
      outcome: getOutcomeValues,
      total: diferenceBetweenIncomeAndOutcome,
    };
  }

  public create({ title, type, value }: Transaction): Transaction {
    const transaction = new Transaction({
      title,
      value,
      type,
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
