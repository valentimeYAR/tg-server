import * as cheerio from 'cheerio';

export const getPostId = (lastPost: any) => {
  const outerLastPost: any = lastPost.prop('outerHTML');
  const $post = cheerio.load(outerLastPost);
  return Number(
    $post('.tgme_widget_message').attr('data-post').split('/').at(-1),
  );
};
