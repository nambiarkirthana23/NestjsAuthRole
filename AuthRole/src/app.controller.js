import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller()
export class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    @Get()
    getHello() {
        return this.appService.getHello();
    }
    @Post('/file')
    @UseInterceptors(FileInterceptor('file'))
    handleupload(
    @UploadedFile()
    file) {
        return "File upload Api";
    }
}
