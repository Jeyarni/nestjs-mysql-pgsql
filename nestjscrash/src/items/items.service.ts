import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  //     private readonly items:Item[]=[{
  //         id:"34343545",
  //         name:"item one",
  //         description:"item one desc",
  //         qty:5
  //     },
  //     {
  //         id:"34343546",
  //         name:"item two",
  //         description:"item two desc",
  //         qty:10
  //     },
  // ];

  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({_id:id});
  }

  async create(item:Item):Promise<Item>{
    const newItem=new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id:String):Promise<Item>{
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id:string, item:Item):Promise<Item>{
      return await this.itemModel.findByIdAndUpdate(id,item,{new:true})
  }

}
