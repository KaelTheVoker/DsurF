import fg from 'fast-glob'
import path from 'path';

type scanDirArgs = {
    directory?: string,
    ignore?: string[] | string,
}

export const scanDir = async (args?: scanDirArgs): Promise<string[]> => {

    let ignore: string[] | undefined;

    if (typeof (args?.ignore) === 'string') {
        ignore = [args.ignore + '/**'];
    } else {
        ignore = args?.ignore?.map(acc => acc + '/**');
    }

    const cwd = process.cwd();
    const directory = args?.directory ? path.join(cwd, args.directory) : cwd;

    return (await (fg('**', { ignore, cwd: directory }))).map(acc => args?.directory + '/' + acc);
}
