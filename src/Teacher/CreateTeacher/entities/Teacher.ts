export class TeacherEntity {
    public name: String;
    public email: String;
    public cpf: String;

    constructor(props: TeacherEntity) {
        Object.assign(this, props);
    }
}