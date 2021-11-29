import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { ContactsService } from './contacts.service';
  import { Prisma } from '@prisma/client';
  
  @Controller('contacts')
  export class ContactsController {
    constructor(private readonly contactsService: ContactsService) {}
    @Get()
    getAll() {
      return this.contactsService.getAll();
    }
  
    @Get(':id')
    get(@Param('id') id) {
      return this.contactsService.get(Number(id));
    }
  
    @Post()
    create(@Body() contactCreateInput: Prisma.ContactCreateInput) {
      return this.contactsService.create(contactCreateInput);
    }
  
    @Delete(':id')
    delete(@Param('id') id) {
      return this.contactsService.delete(Number(id));
    }
  
    @Put(':id')
    update(
      @Param('id') id,
      @Body() contactUpdateInput: Prisma.ContactUpdateInput,
    ) {
      return this.contactsService.update(Number(id), contactUpdateInput);
    }
  }