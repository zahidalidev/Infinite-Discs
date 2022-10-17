import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Frisbee } from './frisbee'

const data: Frisbee[] = [
  {
    id: 1,
    name: 'Aztec',
    description:
      "The Aztec is a speed 10 driver, flying straight with a little bit of fade at the end. Don't let the speed 10 fool you, the Aztec will bring unexpected distance and accuracy to your game. This disc has a skinnier rim than the big distance drivers, making it more comfortable for most disc golfers. The Aztec is said to be a longer Exodus or Sphinx.",
    speed: 10,
    glide: 5,
    turn: -1.2,
    fade: 1.9,
    rating: 5,
    category: 'distance',
    price: 1599,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_9d8fb8-1f38.JPG',
  },
  {
    id: 2,
    name: 'Emperor',
    description:
      'Conquer the courses with the Emperor from Infinite Discs. This is a moderately overstable, powerful distance driver that you will need to enhance the accuracy of your distance game.',
    speed: 12,
    glide: 5.1,
    turn: -1.1,
    fade: 2.5,
    rating: 4,
    category: 'distance',
    price: 1899,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_e279d9-957d.JPG',
  },
  {
    id: 3,
    name: 'Maya',
    description:
      'The Maya is an understable distance bomber! Beginner to Intermediate players will find the Maya to be an awesome straight flying distance driver, while advanced to open players will utilize the Maya for massive understable distance shots.',
    speed: 11.9,
    glide: 5.1,
    turn: -2.9,
    fade: 1,
    rating: 4,
    category: 'distance',
    price: 1599,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_highres_21.JPG',
  },
  {
    id: 4,
    name: 'Pharoah',
    description:
      'The Pharaoh is the quintessential distance driver, built for a high speed release and maximum distance. The fade is not overpowering, making this a distance driver that will work wonders even for intermediate players. Throw the Pharaoh off the tee when you need to cover as much territory as possible. Rule your local disc golf course with the Pharaoh!',
    speed: 12.9,
    glide: 5.8,
    turn: -1.2,
    fade: 2,
    rating: 5,
    category: 'distance',
    price: 1899,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_9e7335-ab65.JPG',
  },
  {
    id: 5,
    name: 'Slab',
    description:
      'The SLAB is a high-speed, very overstable distance driver with a flat top and wide rim. The SLAB is designed for power throwers who want a disc that still fades, no matter how hard it is thrown. This disc works wonders for spike hyzer throws, strong forehand throws, as a wind fighter, or as a utility disc when you need to fade hard around obstacles. Watch the Slab slice dependably through the air under any conditions. ',
    speed: 11.9,
    glide: 3,
    turn: 0,
    fade: 4,
    rating: 4,
    category: 'distance',
    price: 1899,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_ad5b14-46c3.JPG',
  },
  {
    id: 6,
    name: 'Centurion',
    description:
      'The Centurion is a workable fairway driver. It is a straight-flying, precision driver that will fit into the bags of both novice and professional players. All players can count on the Centurion to hold whichever line they put it on with only a slight end fade. It is a workhorse control driver for precise placement on the fairway.',
    speed: 7,
    glide: 5.1,
    turn: -1.1,
    fade: 1.5,
    rating: 5,
    category: 'fairway',
    price: 1299,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_29102d-efbb.JPG',
  },
  {
    id: 7,
    name: 'Exodus',
    description:
      'The Exodus by Infinite Discs is a stable, controllable fairway driver. The comfortable rim design and manageable speed are perfect for players at all experience levels. The Exodus is a trustworthy disc on the fairway and excellent for navigating wooded courses.  It has a precise, long flight pattern with a consistent fade, plus it can also handle all the power you can give it for long-distance flights. All Infinite Discs branded discs are manufactured by Innova Champion Discs. ',
    speed: 7.1,
    glide: 4.9,
    turn: -0.5,
    fade: 2,
    rating: 5,
    category: 'fairway',
    price: 1899,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_asdfasdf_67.JPG',
  },
  {
    id: 8,
    name: 'Scepter',
    description:
      'The Scepter is a flat-top, overstable fairway driver for power throwers or for utility use to get around obstacles on the disc golf course. It is very comfortable for forehand use and will always fight out of anhyzer releases. You can count on the Scepter to slice through headwinds and to make a dramatic end-of-flight fade.',
    speed: 9,
    glide: 3.7,
    turn: 0,
    fade: 3.9,
    rating: 5,
    category: 'fairway',
    price: 2999,
    image: 'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_DSC07379.JPG',
  },
  {
    id: 9,
    name: 'Sphinx',
    description:
      "The SPHINX is the perfect disc for new players who want a distance driver / control driver crossover that won't fade too soon while covering as much distance as possible. With an understable release and manageable speed rating, the Sphinx can fly with accuracy and ease. For experienced players the Sphinx is a wonderful, understable utility disc for hyzer-flips, long anhyzer throws, or power rollers. The Sphinx will stand the test of time as a disc that earns a spot in any bag.",
    speed: 9,
    glide: 6,
    turn: -2.8,
    fade: 1,
    rating: 5,
    category: 'fairway',
    price: 1599,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_c040d2-991e.JPG',
  },
  {
    id: 10,
    name: 'Anubis',
    description:
      'The Anubis is a straight-flying, all-purpose, precision mid-range disc that will fit into the bags of both novice and professional players. Every player can count on the Anubis to hold the line whether thrown for shorter approaches or for longer distances off the tee. The Anubis will help players to fine-tune their throwing skills by flying precisely in accordance with the release from the hand. ',
    speed: 5,
    glide: 5,
    turn: -0.2,
    fade: 0.2,
    rating: 4,
    category: 'midrange',
    price: 1299,
    image: 'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_AnubisI.JPG',
  },
  {
    id: 11,
    name: 'Chariot',
    description:
      "The Chariot is a straight-flying mid-range disc with excellent glide and a knack for following the thrower's angle of release. It can be guided on smooth hyzer lines, on anhyzer turns, or can be used for straight, precision approaches on the fairway. The Chariot finishes with a gentle and consistent fade and is ready for frequent use in your disc golf game. All Infinite Discs branded discs are manufactured by Innova Champion Discs. ",
    speed: 5,
    glide: 5,
    turn: 0,
    fade: 1.1,
    rating: 5,
    category: 'midrange',
    price: 1395,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_bd52a1-4f14.JPG',
  },
  {
    id: 12,
    name: 'Inca',
    description:
      'The Inca is the quintessential mid-range with a beaded rim and a dependable fade at the end of flight. It is designed to handle power, so you can give it some heat off the tee or across the fairway.',
    speed: 5,
    glide: 4.9,
    turn: 0,
    fade: 2.7,
    rating: 5,
    category: 'midrange',
    price: 1299,
    image: 'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_Image024.jpg',
  },
  {
    id: 13,
    name: 'Ra',
    description:
      'The Infinite Discs Ra is a moderately overstable midrange with a very flat top and comfortable, beaded rim. It feels and flies perfectly for both backhand and forehand players. It is difficult to find a midrange that is so easy to control and so precise under multiple course conditions.',
    speed: 5,
    glide: 4.1,
    turn: -0.1,
    fade: 2.5,
    rating: 4,
    category: 'midrange',
    price: 1495,
    image: 'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_rasmall_2.JPG',
  },
  {
    id: 14,
    name: 'Cohort',
    description:
      'The Cohort is a unique putt-and-approach disc that is a great, beadless option for mid-range and approach shots with a comfortable rim for either backhand or forehand players. The revolution toward smaller-diameter discs for mid-range shots continues and the Cohort is stable enough to hold the line when thrown with confidence.',
    speed: 3.5,
    glide: 4,
    turn: 0,
    fade: 0.9,
    rating: 5,
    category: 'putter',
    price: 1599,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_f27509-47dd.JPG',
  },
  {
    id: 15,
    name: 'Myth',
    description:
      "The MYTH is the first putter in the Infinite Discs brand lineup and we wanted to start strong. The Myth is a dependable, beaded putter with a comfortable rim that can be used for precision putting, or as a driving putter and approach disc. If your putting game can't be a thing of legend, then at least let it be a thing of Myth. Inspire friends and family to talk about your epic putts around late-night campfires for generations to come.",
    speed: 2,
    glide: 3,
    turn: 0,
    fade: 1.9,
    rating: 5,
    category: 'putter',
    price: 1395,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_asdfasdf_14.JPG',
  },
  {
    id: 16,
    name: 'Ruin',
    description:
      "The Infinite Discs Ruin is the small diameter, overstable approach disc manufactured by Innova that everyone's been waiting for! This beadless approach disc has very little glide and will start fading right out of the hand, giving your upshots perfect, predictable placement.",
    speed: 3,
    glide: 3,
    turn: 0,
    fade: 2.9,
    rating: 4,
    category: 'putter',
    price: 1599,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_58d89d-daf5.JPG',
  },
  {
    id: 17,
    name: 'Scarab',
    description:
      "The Scarab is a beaded putter that has a similar rim configuration to the Infinite Discs Myth, but with a different flight plate that provides a longer glide for longer putts and approaches. If you love throwing putters for distance, or you're seeking pinpoint accuracy with your putting game, the Scarab will earn a spot in your disc bag.",
    speed: 2,
    glide: 4,
    turn: -0.1,
    fade: 1,
    rating: 5,
    category: 'putter',
    price: 1199,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_4777a6-26e9.JPG',
  },
  {
    id: 18,
    name: 'Tomb',
    description:
      'The TOMB is a flat-topped, low-profile, putt-and-approach disc with a comfortably smooth, beaded rim. The Tomb has just the right amount of stability to cover ground while threading the needle on approach shots, whether thrown forehand or backhand. It can also be used as a crossover mid-range, driving putter, or to hold the line while putting for distance or in moderate winds.',
    speed: 3.1,
    glide: 3.9,
    turn: 0,
    fade: 1.1,
    rating: 5,
    category: 'putter',
    price: 1899,
    image:
      'https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_2bb56f-7ca9.JPG',
  },
]

@Injectable({
  providedIn: 'root',
})
export class FrisbeeService {
  loadFrisbeeData(): Observable<Frisbee[]> {
    return of(data)
  }

  loadFrisbee(id: string): Observable<Frisbee> {
    const idNumber = parseInt(id, 10)
    const frisbee = data.find((f) => f.id === idNumber)
    return of(frisbee)
  }
}
