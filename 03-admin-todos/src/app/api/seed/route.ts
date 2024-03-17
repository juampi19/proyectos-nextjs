import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: Request) {

  //Purgar la base de datos antes de trabajar con ella
  await prisma.todo.deleteMany();

  //Prepara insercion
 
  await prisma.todo.createMany({
    data: [
      { description: 'Piedra del alma', complete: true },
      { description: 'Piedra del poder' },
      { description: 'Piedra del tiempo' },
      { description: 'Piedra del espacio' },
      { description: 'Piedra del realidad' },
    ]
  })
  

  return NextResponse.json({ message: 'Seed executed!' });
}