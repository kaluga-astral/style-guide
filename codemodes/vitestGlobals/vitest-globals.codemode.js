const { Project, QuoteKind } = require('ts-morph');

const project = new Project({
  manipulationSettings: {
    quoteKind: QuoteKind.Single, // Set to use single quotes
  },
});

// TODO: указать glob паттерн, чтобы под него попадали все файлы с тестами
project.addSourceFilesAtPaths('packages/**/*.test.tsx');
project.addSourceFilesAtPaths('packages/**/*.test.ts');

const files = project.getSourceFiles();

files.forEach((sourceFile, index) => {
  console.log(
    `Processing file ${sourceFile.getBaseName()}... ${index + 1}/${
      files.length
    }`,
  );

  let vitestImportDeclaration = sourceFile.getImportDeclaration(
    (declaration) => {
      return declaration.getModuleSpecifierValue() === 'vitest';
    },
  );

  if (vitestImportDeclaration) {
    vitestImportDeclaration.remove();
  }

  const baseImportSpecifiers = ['describe', 'expect', 'it'];
  const conditionalImportSpecifiers = [
    'vi',
    'beforeAll',
    'afterAll',
    'afterEach',
    'beforeEach',
  ];

  const usedSpecifiers = conditionalImportSpecifiers.filter((specifier) => {
    return sourceFile.forEachDescendantAsArray().some((node) => {
      return (
        node.getKindName() === 'Identifier' && node.getText() === specifier
      );
    });
  });

  const importSpecifiers = [...baseImportSpecifiers, ...usedSpecifiers].sort();

  sourceFile.insertImportDeclaration(0, {
    moduleSpecifier: 'vitest',
    namedImports: importSpecifiers,
  });
});

project.save();
