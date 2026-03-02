export const TRANSACTION_TYPES = ["income", "expense", "transfer"] as const;
export type TransactionType = typeof TRANSACTION_TYPES[number];

export interface TransactionProps {
    id?: string;
    userId: string;
    type: TransactionType;
    amount: number;
    description?: string;

    //Only for income and expense
    category?: string;
    accountId?: string;

    //Only for transfer
    fromAccountId?: string;
    toAccountId?: string;

    date: Date;
    createdAt: Date;
}

export class Transaction {
    private readonly _id: string | undefined;
    private readonly _userId: string;
    private readonly _type: TransactionType;
    private readonly _amount: number;
    private readonly _description: string | undefined;

    //Only for income and expense
    private readonly _category: string | undefined;
    private readonly _accountId: string | undefined;

    //Only for transfer
    private readonly _fromAccountId: string | undefined;
    private readonly _toAccountId: string | undefined;

    private readonly _date: Date;
    private readonly _createdAt: Date;

    constructor(props: TransactionProps) {
        this.validate(props);

        this._id = props.id;
        this._userId = props.userId;
        this._type = props.type;
        this._amount = props.amount;
        this._description = props.description;

        //Only for income and expense
        this._category = props.category;
        this._accountId = props.accountId;

        //Only for transfer
        this._fromAccountId = props.fromAccountId;
        this._toAccountId = props.toAccountId;

        this._date = props.date;
        this._createdAt = props.createdAt;
    }

    private validate(props: TransactionProps): void {
        if (!props.userId) {
            throw new Error('User id is required');
        }
        if (props.amount <= 0) {
            throw new Error('Amount must be greater than zero');
        }

        if (props.type === 'income' || props.type === 'expense') {
            if (!props.accountId) {
                throw new Error('Account id is required');
            }
            if (!props.category) {
                throw new Error('Category is required');
            }
        }

        if (props.type === 'transfer') {
            if (!props.fromAccountId || !props.toAccountId) {
                throw new Error('Transfer requires from and to accounts')
            }
            if (props.fromAccountId === props.toAccountId) {
                throw new Error('Cannot transfer same account');
            }
        }

    }

    get id(): string | undefined {
        return this._id
    }

    get userId(): string {
        return this._userId
    }

    get type(): TransactionType {
        return this._type;
    }

    get amount(): number {
        return this._amount;
    }

    get description(): string | undefined {
        return this._description
    }

    get category(): string | undefined {
        return this._category
    }

    get accountId(): string | undefined {
        return this._accountId
    }

    get fromAccountId(): string | undefined {
        return this._fromAccountId
    }

    get toAccountId(): string | undefined {
        return this._toAccountId
    }

    get date(): Date {
        return this._date
    }

    get createdAt(): Date {
        return this._createdAt
    }

}
