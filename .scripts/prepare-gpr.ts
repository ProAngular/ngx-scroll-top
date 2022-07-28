import { readFileSync, writeFileSync } from 'fs-extra';

const packagePath = __dirname + '/../dist/npm/package.json';

// Update `package.json` to prepare publishing the package to GitHub
try {
  console.log('patching', packagePath);
  const packageContent = JSON.parse(readFileSync(packagePath, 'utf8'));
  writeFileSync(
    packagePath,
    JSON.stringify({
      ...packageContent,
      publishConfig: {
        registry: 'https://npm.pkg.github.com',
      },
    }),
  );
} catch (error: unknown) {
  throw new Error(
    `Failed to update package JSON at path "${packagePath}" resulting in the following error: ${String(
      error,
    )}`,
  );
} finally {
  console.log('Package ready for GPR.');
}
