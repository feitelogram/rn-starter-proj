export interface YelpResults {
  total: number;
  businesses: YelpResult[];
}

export interface YelpResult {
  rating: number;
  price: string;
  id: string;
  name: string;
  image_url: string;
  review_count: number;
}
