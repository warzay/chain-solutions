import { glob } from 'glob';
import jsBeautify from 'js-beautify';
import type { HTMLBeautifyOptions } from 'js-beautify';

import { readFile, writeFile } from 'fs/promises';

const { html: beautifyHtml } = jsBeautify;

const beautifyOptions: HTMLBeautifyOptions = {
  indent_size: 2,
  indent_char: ' ',
  max_preserve_newlines: 2,
  preserve_newlines: true,
  indent_scripts: 'normal',
  indent_inner_html: false,
  extra_liners: [],
  end_with_newline: true,
  wrap_line_length: 80,
  wrap_attributes: 'auto',
  unformatted: [],
  content_unformatted: [],
  eol: '\n',
  inline: [],
  void_elements: [],
};

async function beautifyFile(inputPath: string): Promise<void> {
  try {
    const data = await readFile(inputPath, 'utf8');
    const unminifiedHTML = beautifyHtml(data, beautifyOptions);
    await writeFile(inputPath, unminifiedHTML, 'utf8');
    console.log(`Beautified: ${inputPath}`);
  } catch (err) {
    console.error(`Error processing ${inputPath}:`, err);
  }
}

async function beautifyAllHtmlInDist(): Promise<void> {
  const files = await glob('dist/**/*.html');
  await Promise.all(files.map(beautifyFile));
}

await beautifyAllHtmlInDist();
