import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import {CreateItemDto} from './dto/create-item.dto';
// import {Request, Response} from 'express';
import {Item} from './interfaces/item.interface';
import {ItemsService} from './items.service'


@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService:ItemsService){}
    @Get()
    findAll():Promise<Item[]>{
        return this.itemsService.findAll()
    }

    // we can use req and res
    // @Get()
    // findAll(@Req() req:Request, @Res() res:Response):Response{
    //     console.log(req.url);
    //     return res.send("Hello World")
    // }

    @Get(':id')
    findOne(@Param('id') id):Promise<Item>{
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto:CreateItemDto):Promise<Item>{
        return this.itemsService.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id):Promise<Item>{
        return this.itemsService.delete(id)
    }

    @Put(':id')
    update(@Body() createItemDto:CreateItemDto, @Param('id') id):Promise<Item>{
        return this.itemsService.update(id,createItemDto)
    }


}
