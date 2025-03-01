import { Post } from "@/types/post";
import { USERS } from "./user";

export const IMAGE_URLS = [
  "https://friendkit.cssninja.io/assets/img/demo/unsplash/1.jpg",
  "https://friendkit.cssninja.io/assets/img/demo/unsplash/2.jpg",
  "https://friendkit.cssninja.io/assets/img/demo/unsplash/3.jpg",
  "https://friendkit.cssninja.io/assets/img/demo/unsplash/4.jpg",
  "https://friendkit.cssninja.io/assets/img/demo/unsplash/5.jpg",
  "https://friendkit.cssninja.io/assets/img/demo/unsplash/6.jpg",
  "https://friendkit.cssninja.io/assets/img/demo/unsplash/7.jpg",
  "https://friendkit.cssninja.io/assets/img/demo/unsplash/8.jpg ",
  "https://friendkit.cssninja.io/assets/img/demo/unsplash/9.jpg",
  "https://friendkit.cssninja.io/assets/img/demo/unsplash/10.jpg",
  "https://friendkit.cssninja.io/assets/img/demo/unsplash/11.jpg",
  "https://friendkit.cssninja.io/assets/img/demo/unsplash/12.jpg",
];

const generateRandomImages = (maxImages: number = 5): Post["images"] => {
  const count = Math.floor(Math.random() * (maxImages + 1));
  const selectedImages = [];
  const usedIndices = new Set();

  while (selectedImages.length < count) {
    const index = Math.floor(Math.random() * IMAGE_URLS.length);
    if (!usedIndices.has(index)) {
      usedIndices.add(index);
      selectedImages.push({
        uuid: `img${Date.now()}-${index}`,
        url: IMAGE_URLS[index],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }
  }

  return selectedImages;
};

export const POSTS: Post[] = [
  {
    id: 1,
    description:
      "What a beautiful day for a walk in the park! I stopped by the flower garden and picked up a lovely bouquet of fresh blooms—roses, daisies, and lilies. The weather was just perfect, with a gentle breeze and clear skies, making it an unforgettable moment.",
    userId: "user1",
    author: USERS[0],
    likeCount: 25,
    commentCount: 5,
    isLiked: false,
    images: generateRandomImages(3),
    createdAt: "2025-02-20T10:00:00Z",
    updatedAt: "2025-02-20T10:05:00Z",
  },
  {
    id: 2,
    description:
      "I made the most delicious homemade pizza tonight—thin crust, fresh mozzarella, and a variety of toppings like pepperoni, mushrooms, and olives. The kitchen smelled amazing while it baked, and sharing it with family made the evening even more special. Definitely a recipe I’ll try again soon!",
    userId: "user2",
    author: USERS[1],
    likeCount: 15,
    commentCount: 3,
    isLiked: true,
    images: generateRandomImages(4),
    createdAt: "2025-02-21T18:30:00Z",
    updatedAt: "2025-02-21T18:35:00Z",
  },
  {
    id: 3,
    description:
      "Hiking in the mountains with friends was an incredible experience! The trails were challenging but rewarding, with breathtaking views of snow-capped peaks and lush forests. We stopped at a scenic overlook for lunch, and the fresh air made it a day I’ll cherish for years to come.",
    userId: "user3",
    author: USERS[2],
    likeCount: 40,
    commentCount: 8,
    isLiked: false,
    images: generateRandomImages(5),
    createdAt: "2025-02-19T09:15:00Z",
    updatedAt: "2025-02-19T09:20:00Z",
  },
  {
    id: 4,
    description:
      "Just finished reading an absolutely great book—‘The Midnight Library’ by Matt Haig. It’s a thought-provoking story about life choices and second chances, and I couldn’t put it down. I’m already recommending it to everyone I know, and it left me inspired to try new things in life.",
    userId: "user1",
    author: USERS[0],
    likeCount: 10,
    commentCount: 2,
    isLiked: false,
    images: [],
    createdAt: "2025-02-18T14:00:00Z",
    updatedAt: "2025-02-18T14:00:00Z",
  },
  {
    id: 5,
    description:
      "Working on a new painting in my studio today—it’s a vibrant landscape with bold colors and swirling skies. I spent hours mixing paints and layering details, and I’m really excited about how it’s coming together. It’s been a relaxing and fulfilling creative process, and I can’t wait to share the final piece!",
    userId: "user2",
    author: USERS[1],
    likeCount: 30,
    commentCount: 6,
    isLiked: true,
    images: generateRandomImages(2),
    createdAt: "2025-02-22T12:00:00Z",
    updatedAt: "2025-02-22T12:05:00Z",
  },
  {
    id: 5,
    description:
      "The city lights at night are absolutely mesmerizing—I took a late-night stroll and captured the glowing skyline from the bridge. The reflections on the water, the hum of the city, and the cool night air created a magical atmosphere. It’s moments like these that make me love urban life.",
    userId: "user3",
    author: USERS[2],
    likeCount: 50,
    commentCount: 12,
    isLiked: false,
    images: generateRandomImages(3),
    createdAt: "2025-02-21T22:00:00Z",
    updatedAt: "2025-02-21T22:10:00Z",
  },
  {
    id: 6,
    description:
      "Enjoying my morning coffee with an incredible view from my balcony—sunrise painted the sky in shades of orange and pink. The peaceful silence, the warmth of the mug in my hands, and the chirping birds made it the perfect start to my day. I could get used to mornings like this!",
    userId: "user1",
    author: USERS[0],
    likeCount: 20,
    commentCount: 4,
    isLiked: true,
    images: [],
    createdAt: "2025-02-20T07:30:00Z",
    updatedAt: "2025-02-20T07:35:00Z",
  },
  {
    id: 7,
    description:
      "Spent the afternoon exploring a new park in town—it’s full of winding trails, beautiful trees, and a serene lake. I brought a picnic and relaxed by the water, listening to the rustling leaves and distant laughter of families. It’s such a lovely escape from the busy city life.",
    userId: "user2",
    author: USERS[1],
    likeCount: 18,
    commentCount: 3,
    isLiked: false,
    images: generateRandomImages(1),
    createdAt: "2025-02-19T15:00:00Z",
    updatedAt: "2025-02-19T15:05:00Z",
  },
  {
    id: 8,
    description:
      "Trying out a new recipe for dinner tonight—homemade lasagna with layers of rich tomato sauce, creamy béchamel, and melted cheese. The kitchen was a mess, but the aroma was worth it, and my family loved every bite. I can’t wait to experiment with more recipes like this!",
    userId: "user3",
    author: USERS[2],
    likeCount: 22,
    commentCount: 7,
    isLiked: true,
    images: generateRandomImages(2),
    createdAt: "2025-02-18T19:00:00Z",
    updatedAt: "2025-02-18T19:05:00Z",
  },
  {
    id: 9,
    description:
      "Captured the most stunning sunset vibes at the beach—golden hues spread across the sky, reflecting off the calm waves. I sat there for hours, feeling the sand between my toes and the cool breeze on my face. It was the perfect way to end a long, beautiful day.",
    userId: "user1",
    author: USERS[0],
    likeCount: 35,
    commentCount: 9,
    isLiked: false,
    images: generateRandomImages(4),
    createdAt: "2025-02-22T17:45:00Z",
    updatedAt: "2025-02-22T17:50:00Z",
  },
];
