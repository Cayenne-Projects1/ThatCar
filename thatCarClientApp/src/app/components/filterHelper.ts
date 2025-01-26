import { Vehicle } from './vehicle.model';

export const filterItems = <T extends Vehicle>(
  items: T[],
  filters: {
    searchQuery?: string;
    searchBy?: keyof T;
    minPrice?: number;
    maxPrice?: number;
    location?: string;
    bodyType?: string;
  }
): T[] => {
  return items.filter((item) => {
    const { searchQuery, searchBy, minPrice, maxPrice, location, bodyType } =
      filters;

    console.log(`Checking item:`, item); // Debugging input item

    // Check for search query
    if (
      searchQuery &&
      searchBy &&
      item[searchBy]
        ?.toString()
        .toLowerCase()
        .indexOf(searchQuery.toLowerCase()) === -1
    ) {
      console.log(
        `Filtered out due to searchQuery (${searchQuery}) and searchBy`
      );
      return false;
    }

    // Check price range
    if (minPrice !== undefined && item.price < minPrice) {
      console.log(`Filtered out due to minPrice (${minPrice})`);
      return false;
    }
    if (maxPrice !== undefined && item.price > maxPrice) {
      console.log(`Filtered out due to maxPrice (${maxPrice})`);
      return false;
    }

    // Check location
    if (location && item.location.toLowerCase() !== location.toLowerCase()) {
      console.log(`Filtered out due to location (${location})`);
      return false;
    }

    // Check body type
    if (bodyType && item.bodyType.toLowerCase() !== bodyType.toLowerCase()) {
      console.log(`Filtered out due to bodyType (${bodyType})`);
      return false;
    }

    console.log(`Item passed all filters!`);
    return true; // If no filters block the item, include it
  });
};
