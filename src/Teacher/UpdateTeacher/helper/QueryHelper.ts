interface IQueryObject {
    id: number;
    name?: string;
    email?: string;
}

export function queryHelper(object: IQueryObject): [string, any[]] {
    const { id, name, email } = object
    const values = [];
    let paramIndex = 1;

    if (name) {
        values.push(`name = $${paramIndex}`);
        paramIndex++;
    }

    if (email) {
        values.push(`email = $${paramIndex}`);
        paramIndex++;
    }

    return [`UPDATE teachers SET ${values.join(', ')} WHERE id = $${paramIndex}`,[...values.map((_, index) => _ === `name = $${index + 1}` ? name : email), id]]
}
