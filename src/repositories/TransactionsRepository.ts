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

  public getBalance({ value, type }: Transaction): Balance {
    const income = 0;
    const outcome = 0;
    let getIncomeValues = 0;
    let getOutcomeValues = 0;
    if (type === 'income') {
      getIncomeValues = this.transactions.reduce(
        newIncome => newIncome + value,
        income,
      );
    }
    if (type === 'outcome') {
      getOutcomeValues = this.transactions.reduce(
        newOutcome => newOutcome + value,
        outcome,
      );
    }
    const diferenceBetweenIncomeAndOutcome = getIncomeValues - getOutcomeValues;

    if (diferenceBetweenIncomeAndOutcome < 0) {
      throw Error(
        'You can`t  do the transaction. Please add an income transaction first',
      );
    }
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
