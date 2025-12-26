# dsurf 🚀

dsurf is a lightweight CLI tool that collects your entire codebase (or selected directories) into one clean .txt file — perfect for sharing full project context with AI models like Claude, GPT, Gemini, etc.

When working with LLMs, feeding multiple files or an entire project is often painful: most AI interfaces limit uploads, and manually copying code is slow and error-prone.  
dsurf solves this by bundling everything into a single, well-formatted text file, ready to paste or upload — giving the AI complete context in seconds.

## Features

- Recursively scans directories (defaults to current working directory)
- Supports custom ignore patterns (e.g. node_modules, dist, .git)
- Outputs file paths as comments for easy navigation
- Custom output directory and filename
- Fast scanning with fast-glob

## Installation
```
npm install -g dsurf
```
or with pnpm/yarn:
```
pnpm add -g dsurf
yarn global add dsurf
```
## Usage

# Scan current directory → dsurf-out.txt
```
dsurf
```
# Scan specific folder
```
dsurf --dir ./src
```
# Ignore folders/patterns
```
dsurf --ignore node_modules,dist,build
```
# Custom output
```
dsurf -o output -f my-codebase.txt
```
# All together
```
dsurf --dir app --ignore node_modules,tests --out results --file codebase.txt
```
Run ```dsurf --help``` for full options.

## Example Output
```txt
// src/index.ts
import { greet } from './utils';

console.log(greet('World'));

// src/utils.ts
export function greet(name: string) {
  return `Hello, ${name}!`;
}
```
## Why dsurf?

Modern AI coding assistants perform best with full context.  
dsurf makes it trivial to give them your whole project — no more file-by-file uploads or tedious copying.

Ideal for:
- Asking LLMs to refactor large modules
- Debugging multi-file issues
- Generating tests or docs for entire projects
- Collaborating with AI on real codebases

## Contributing

Pull requests are welcome!

1. Clone the repo
2. npm install
3. npm run build
4. npm link (for local testing)

## License

MIT © KaelTheVoker
