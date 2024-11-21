import * as cheerio from 'cheerio';

export const getPostText = (lastPost: cheerio.Cheerio<any>) => {
  return lastPost.find('.tgme_widget_message_text').text();
};
