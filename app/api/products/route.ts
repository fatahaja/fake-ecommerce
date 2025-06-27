import { NextResponse } from 'next/server';
import products from '@/data/products.json';

export async function GET() {
  try {
    return NextResponse.json(products);
  } catch (e) {
    return NextResponse.json(
      { error: 'Internal Server Error' + e },
      { status: 500 }
    );
  }
}
