import { DefaultResponse } from '@shared/types';

export interface FetchChannelResponse extends DefaultResponse {
  data: {
    imageUrl: string;
    postText: string;
    postId: number;
  };
}
