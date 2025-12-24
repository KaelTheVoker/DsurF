import path from "path";
import { type File } from "./collectData";
import { writeFile, mkdir } from 'fs/promises';

type makeOptions = {
    outDir?: string,
    filename?: string
}

export const makeFile = async (files: File[], options?: makeOptions): Promise<void> => {
    let dataToSave: string = '';

    for (const file of files) {
        dataToSave += '// ' + file.name;
        dataToSave += '\r\n';
        dataToSave += file.data;
        dataToSave += '\r\n\r\n';
    }

    const filename = options?.filename || 'dsurf-out.txt';

    const outDir = options?.outDir || '';

    const toSave = path.join(process.cwd(), outDir, filename);

    await mkdir(path.dirname(toSave), { recursive: true });
    await writeFile(toSave, dataToSave);
}