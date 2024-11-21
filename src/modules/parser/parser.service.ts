import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { TELEGRAM_URL } from '@shared/constants';
import { getLastPost, getPostId, getPostImageUrl, getPostText } from './utils';
import { FetchChannelResponse } from '@modules/parser/types';

@Injectable()
export class ParserService {
  constructor(private readonly httpService: HttpService) {}

  async fetchChannel(id: string): Promise<FetchChannelResponse> {
    const response = await firstValueFrom(
      this.httpService.get(TELEGRAM_URL + id, {
        responseType: 'text',
      }),
    );

    const lastPost = await getLastPost(id, response.data);
    const imageUrl = getPostImageUrl(lastPost);
    const postText = getPostText(lastPost);
    const postId = getPostId(lastPost);

    return {
      data: {
        imageUrl,
        postText,
        postId,
      },
      code: 200,
    };
  }
}
