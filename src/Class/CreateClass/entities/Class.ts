export class ClassEntity {
    public number: number;
    public schedule: string;

    constructor(props: ClassEntity) {
        Object.assign(this, props);
    }
}