export class AppError extends Error {
    public readonly code: string;
    public readonly statusCode: number;

    constructor(code:string , message:string , statusCode:number) {
        super(message);

        // @ts-ignore
        Object.setPrototypeOf(this,new.target.prototype);

        this.code = code;
        this.statusCode = statusCode;
        this.name=this.constructor.name;

        Error.captureStackTrace(this);
    }

}