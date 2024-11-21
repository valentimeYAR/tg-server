import { Controller, Get, Query } from '@nestjs/common';
import { ParserService } from './parser.service';
import { FetchChannelResponse } from '@modules/parser/types';
import { ErrorResponse } from '@shared/types';

@Controller('parser')
export class ParserController {
  constructor(private readonly parserService: ParserService) {}

  @Get('channel')
  async fetchChannel(
    @Query('id') id: string,
  ): Promise<FetchChannelResponse | ErrorResponse> {
    if (!id) {
      return {
        code: 400,
        message: 'Отсутствует ID',
      };
    }
    return this.parserService.fetchChannel(id);
  }
}
