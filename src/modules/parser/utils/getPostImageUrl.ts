import * as cheerio from 'cheerio';

export const getPostImageUrl = (lastPost: any): string => {
  // Получаем <a> в котором лежит картинка
  const lastPostImageHtml = lastPost
    .find('a.tgme_widget_message_photo_wrap')
    .prop('outerHTML');

  // Обратно преобразуем тег в хтмл для получения атрибутов
  const $postImage = cheerio.load(lastPostImageHtml);

  // За счет регулярки получаем путь к картинке
  return $postImage('a')
    .attr('style')
    .match(/background-image:url\(['"]?(.*?)['"]?\)/)[1];
};
