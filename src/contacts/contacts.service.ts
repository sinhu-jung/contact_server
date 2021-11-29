import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContactsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(contactCreateInput: Prisma.ContactCreateInput) {
    return this.prismaService.contact.create({
      data: contactCreateInput,
    });
  }

  getAll() {
    return this.prismaService.contact.findMany();
  }

  delete(id: number) {
    return this.prismaService.contact.delete({
      where: { id },
    });
  }

  get(id: number) {
    return this.prismaService.contact.findUnique({
      where: { id },
    });
  }

  update(id: number, contactUpdateInput: Prisma.ContactUpdateInput) {
    return this.prismaService.contact.update({
      where: { id },
      data: contactUpdateInput,
    });
  }
}