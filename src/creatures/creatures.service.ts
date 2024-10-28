import { Injectable } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreaturesService {
  constructor (private prisma:PrismaService) {}
  create(createCreatureDto: CreateCreatureDto) {
    return 'This action adds a new creature';
  }

  findAllAlive() {
    return this.prisma.spells.findMany({
      
    })
  }

  findOne(id: number) {
    return this.prisma.spells.findUnique({
      where: {id},
    })
  }

  update(id: number, updateCreatureDto: UpdateCreatureDto) {
    return this.prisma.spells.update({
      where: {id},
      data:updateCreatureDto,
    })
  }

  remove(id: number) {
    return this.prisma.spells.delete({
      where: {id},
    })
  }
}
