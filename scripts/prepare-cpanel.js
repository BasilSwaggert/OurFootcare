const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'out');
const archive = path.join(root, 'cpanel-deploy.zip');

if (!fs.existsSync(path.join(output, 'index.html')) ||
    !fs.existsSync(path.join(output, '_next'))) {
  throw new Error('Static export must contain index.html and _next');
}

fs.rmSync(path.join(root, '_next'), { recursive: true, force: true });
for (const entry of fs.readdirSync(output)) {
  fs.cpSync(path.join(output, entry), path.join(root, entry), { recursive: true });
}

fs.rmSync(archive, { force: true });
execFileSync('zip', ['-q', '-r', archive, '.'], { cwd: output, stdio: 'inherit' });
