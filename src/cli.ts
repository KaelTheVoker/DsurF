#!/usr/bin/env node

import { Command } from 'commander';
import { scan, type ScanOptions } from './index';

const program = new Command();

program
    .name('dsurf')
    .description('Собирает содержимое всех файлов проекта в один txt-файл')
    .version('1.0.0');

program
    .option('-d, --dir <dir>', 'Папка для сканирования (по умолчанию текущая)')
    .option('-i, --ignore <patterns...>', 'Папки/паттерны для игнора (можно несколько)')
    .option('-o, --out <dir>', 'Куда сохранить результат')
    .option('-f, --file <name>', 'Имя выходного файла', 'dsurf-out.txt')
    .action(async (options) => {
        const scanOptions: ScanOptions = {
            scanDir: options.dir,
            ignore: options.ignore,
            outDir: options.out,
            filename: options.file,
        };

        try {
            const outputPath = await scan(scanOptions);
            console.log(`Готово! Файл сохранён: ${outputPath}`);
        } catch (err) {
            console.error('Ошибка:', err);
            process.exit(1);
        }
    });

program.parse();