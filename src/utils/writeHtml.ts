import { promises } from 'fs';
import * as fs from 'fs';
import * as path from 'path';

export const writeHtml = async (id: string, html: any): Promise<string> => {
  // Получаем путь до файла
  const filePath = path.join(__dirname, `${id}_channel.html`);

  // Создаем файл и записываем туда HTML
  await promises.writeFile(filePath, html, 'utf-8');

  // Читаем файл и возвращаем его
  return fs.readFileSync(filePath, 'utf-8');
};
