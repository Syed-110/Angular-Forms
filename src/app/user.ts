export class User {
    constructor(
        public username: string,
        public email: string,
        public department: string,
        public time: string,
        public state: string,
        public city: string,
        public terms: boolean,
    ) {}
}
