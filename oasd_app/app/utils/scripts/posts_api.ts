// connect to the CMS and handle all the posts queries
// import axios from 'axios'

import { FeaturedPostParam, PostCardParams } from '../interfaces/interfaces';

const featuredPost: PostCardParams[] = [
  {
    category: 'Culture',
    title: 'Knitting In Africa History',
    thumbnail: '/images/posts/post_1.jpg',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?',
    link: 'knitting-in-africa-history',
    lastUpdate: '22 Dec 2023',
  },

  {
    category: 'Education',
    title: 'The History of Algebra',
    thumbnail: '/images/posts/post_2.jpg',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit',
    link: 'the-history-of-algebra',
    lastUpdate: '27 Dec 2023',
  },

  {
    category: 'Health Care',
    title: 'War Diseases, And How To Over-Come It',
    thumbnail: '/images/posts/post_3.jpg',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit',
    link: 'war-diseases-and-how-to-overcome-it',
    lastUpdate: '27 Dec 2023',
  },

  {
    category: 'Crisis',
    title: 'Water is Out On Sudan',
    thumbnail: '/images/posts/post_4.jpg',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit',
    link: 'water-is-out-on-sudan',
    lastUpdate: '27 Dec 2023',
  },
];
const posts: PostCardParams[] = [
  {
    category: 'Culture',
    title: 'Knitting In Africa History',
    thumbnail: '/images/posts/post_1.jpg',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?',
    link: 'knitting-in-africa-history',
    lastUpdate: '22 Dec 2023',
  },

  {
    category: 'Education',
    title: 'The History of Algebra',
    thumbnail: '/images/posts/post_2.jpg',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit',
    link: 'the-history-of-algebra',
    lastUpdate: '27 Dec 2023',
  },

  {
    category: 'Health Care',
    title: 'War Diseases, And How To Over-Come It',
    thumbnail: '/images/posts/post_3.jpg',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit',
    link: 'war-diseases-and-how-to-overcome-it',
    lastUpdate: '27 Dec 2023',
  },

  {
    category: 'Crisis',
    title: 'Water is Out On Sudan',
    thumbnail: '/images/posts/post_4.jpg',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit',
    link: 'water-is-out-on-sudan',
    lastUpdate: '27 Dec 2023',
  },
  {
    category: 'Culture',
    title: 'Knitting In Africa History',
    thumbnail: '/images/posts/post_1.jpg',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?',
    link: '#',
    lastUpdate: '22 Dec 2023',
  },
];

export async function fetchPost(postSlug: string): Promise<PostCardParams> {
  return new Promise((resolve, reject) => {
    const post = posts.find((post) => post.link == postSlug);
    if (post) resolve(post);
    else reject('Error');
  });
}

export async function fetchRelatedPosts(
  postCategory: string
): Promise<PostCardParams[]> {
  return new Promise((resolve, reject) => {
    const relatedPosts = posts.filter((post) => {
      return post.category == postCategory;
    });
    // console.log(relatedPosts);
    if (relatedPosts) resolve(relatedPosts);
    else reject('error');
  });
}

export async function getFeaturedPosts(): Promise<FeaturedPostParam[]> {
  return Promise.resolve(featuredPost);
}
