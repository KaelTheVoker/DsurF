
import * as fs from 'fs/promises';
import path from 'path';
import { scanDir } from './scanDir';

export type File = {
    data: string,
    name: string
}

export const collectData = async (files: string[]): Promise<File[]> => {
    const res: File[] = [];
    for (const file of files) {
        const loc = path.join(process.cwd(), file);
        res.push({ data: (await fs.readFile(loc)).toString(), name: file });
    }

    return res;
}