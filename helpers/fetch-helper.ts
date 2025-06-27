export interface ProductExternal {
  id: string;
  name: string;
  price: number;
}

enum REVALIDATION_TIME {
  MINUTE = 60,
  HOUR = 3600,
}

export const getProducts = async (): Promise<ProductExternal[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      { next: { revalidate: 10 * REVALIDATION_TIME.MINUTE } }
    );

    if (!res.ok) {
      console.info(`Failed to fetch products: ${res.statusText}`);
      return [];
    }

    const data = await res.json();
    return data as ProductExternal[];
  } catch (error) {
    console.info('Error fetching products:', error);
    return [];
  }
};

export const getProductById = async (
  id: string
): Promise<ProductExternal | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
      { next: { revalidate: 10 * REVALIDATION_TIME.MINUTE } }
    );

    if (res.status === 404) {
      console.info(`Not Found`);
      return null;
    }

    if (!res.ok) {
      console.info(`Failed to fetch product ${id}: ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data as ProductExternal;
  } catch (error) {
    console.info(`Error fetching product ${id}:`, error);
    return null;
  }
};
