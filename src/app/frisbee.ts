export interface Frisbee {
  id: number
  name: string
  description: string
  speed: number
  glide: number
  turn: number
  fade: number
  rating: number
  category: 'distance' | 'fairway' | 'midrange' | 'putter'
  image: string
  price: number
}
