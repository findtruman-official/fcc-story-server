import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
  ParseFilePipe,
  MaxFileSizeValidator,
  Res,
  StreamableFile,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { IdentGuard } from 'src/core/guards/ident.guard';
import { IpfsService } from './ipfs.service';

@Controller('ipfs')
export class IpfsController {
  constructor(private readonly ipfsSvc: IpfsService) {}

  @UseGuards(IdentGuard)
  @Post('json')
  async uploadJson(@Body() data: any) {
    return await this.ipfsSvc.storeJson(data);
  }

  @UseGuards(IdentGuard)
  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 })],
      }),
    )
    file: Express.Multer.File,
  ) {
    return await this.ipfsSvc.storeFile(file.buffer);
  }

  @Get('json/:cid')
  async getJson(@Param('cid') cid: string) {
    return await this.ipfsSvc.loadJson(cid);
  }

  @Get('file/:cid')
  async getFile(@Res() res: Response, @Param('cid') cid: string) {
    const content = await this.ipfsSvc.loadFile(cid);

    const buffer = Buffer.from(content);

    const sf = new StreamableFile(buffer);
    sf.getStream().pipe(res);
  }

  @Get('test-image/:cid')
  async tmpl(@Param('cid') cid: string) {
    return `
    <html>
      <body style="text-align: center;">
        <img style="max-height: 100%; max-width: 100%; margin: 0 auto;" src="/ipfs/file/${cid}"/>
      </body>
    </html>`;
  }
}
