import * as cheerio from 'cheerio';
import { writeHtml } from '@utils/writeHtml';

export const getLastPost = async (id: string, html: string): Promise<any> => {
  const htmlContent = await writeHtml(id, html);

  const $ = cheerio.load(htmlContent);

  let lastPost = $('.tgme_widget_message_wrap').last();

  while (!!lastPost.find('.tgme_widget_message_reply').length) {
    lastPost = lastPost.prev();
  }

  return lastPost;
};
