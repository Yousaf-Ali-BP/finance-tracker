export interface UserProps {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

export class UserEntity {
    private readonly props: UserProps;

    constructor(props: UserProps) {
        if(!props.email){
            throw new Error("User email is required");
        }
        this.props = props;
    }

    get id(){
        return this.props.id;
    }
    get name(){
        return this.props.name;
    }
    get email(){
        return this.props.email;
    }
    get password(){
        return this.props.password;
    }
    get createdAt(){
        return this.props.createdAt.toISOString();
    }
}

