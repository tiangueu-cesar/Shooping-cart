import { Rating } from "./rating";

export class ProductPayload {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: Rating
}
