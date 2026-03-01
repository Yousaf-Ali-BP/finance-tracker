import {MissingRequiredFieldError} from '@/application/errors/index.js'

export interface UserProps {
    id?: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

export class User {
    private readonly props: UserProps;

    constructor(props: UserProps) {
        if (!props.email) {
            throw new MissingRequiredFieldError()
        }
        this.props = props;
    }

    get id() {
        return this.props.id;
    }

    get name() {
        return this.props.name;
    }

    get email() {
        return this.props.email;
    }

    get password() {
        return this.props.password;
    }

    get createdAt() {
        return this.props.createdAt;
    }
}
