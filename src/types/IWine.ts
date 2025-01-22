export interface Wine {
  id: number;
  title: string;
  averageRating: number;
  description: string;
  imageUrl: string;
  link: string;
  price: string;
  ratingCount: number;
  score: number;
}

export interface RecommendedWinesResponse {
  recommendedWines: Wine[];
  totalFound: number;
}
