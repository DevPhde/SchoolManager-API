export class PrettyConsole {
    static log(value: string) {
        console.log(`
-------------------------------------------------
            ${value}
-------------------------------------------------`)
    }
}