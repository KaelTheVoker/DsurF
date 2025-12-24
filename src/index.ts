import { scanDir } from './scanDir';
import { collectData, type File } from './collectData';
import { makeFile } from './makeFile';
import path from 'path';

export type ScanOptions = {
    scanDir?: string;           // относительный путь к папке (по умолчанию текущая)
    ignore?: string | string[]; // папки/паттерны для игнора
    outDir?: string;            // куда класть результат (по умолчанию текущая папка)
    filename?: string;          // имя выходного файла (по умолчанию 'dsurf-out.txt')
};

/**
 * Сканирует директорию, собирает содержимое файлов и сохраняет всё в один txt-файл
 *
 * @param options - параметры сканирования и сохранения
 * @returns путь к созданному файлу
 */
export async function scan(options: ScanOptions = {}): Promise<string> {
    const {
        scanDir: dirToScan = '.', // по умолчанию текущая директория
        ignore,
        outDir = '',
        filename = 'dsurf-out.txt',
    } = options;

    // 1. Получаем список файлов (относительные пути)
    const filePaths = await scanDir({
        directory: dirToScan,
        ignore,
    });

    // 2. Читаем содержимое всех файлов
    const files: File[] = await collectData(filePaths);

    // 3. Формируем и сохраняем итоговый файл
    await makeFile(files, {
        outDir,
        filename,
    });

    // Полный путь к созданному файлу (для удобства)
    const outputPath = path.join(process.cwd(), outDir, filename);

    console.log(`Собрано ${files.length} файлов → ${outputPath}`);

    return outputPath;
}

// Экспорт типов и функций на случай, если кто-то захочет использовать по отдельности
export { type File, scanDir, collectData, makeFile };