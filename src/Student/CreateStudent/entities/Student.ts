export class StudentEntity {
    public name: String;
    public email: String;
    public cpf: String;

    constructor(props: StudentEntity) {
        Object.assign(this, props);
    }
}