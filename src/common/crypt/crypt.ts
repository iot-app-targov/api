import { compare, compareSync, hash, hashSync } from 'bcrypt';

export class Crypt {
    public static hashInputSync(input: string): string {
        return hashSync(input, 10);
    }

    public static async hashInput(input: string): Promise<string> {
        return hash(input, 10);
    }

    public static isHashSame(
        input: string,
        encrypted: string,
    ): Promise<boolean> {
        return compare(input, encrypted);
    }

    public static isHashSameSync(input: string, encrypted: string): boolean {
        return compareSync(input, encrypted);
    }
}
