import {Tweet} from '../types/tweet';
import {userRaul, userPedro, userEronaldo} from './users';

const tweet1: Tweet = {
  id: '1',
  reason: null,
  content: 'Bom dia, rapaziada!!',
  date: '2022-08-16 16:00:00',
  interactions: {
    likes: 20845,
    retweets: 0,
    comments: 10,
    likedByYou: false,
    retweetedByYou: false,
  },
  isThread: true,
  media:
    null /* 'https://i.ibb.co/J5BGBkV/Whats-App-Image-2022-08-03-at-20-10-02.jpg' */,
  user: userRaul,
  comments: [],
};

const tweet2: Tweet = {
  id: '2',
  reason: null,
  content: 'Vocês conhecem a BeeCrowd?',
  date: '2022-08-16 11:00:00',
  interactions: {
    likes: 1,
    retweets: 1000,
    comments: 10,
    likedByYou: true,
    retweetedByYou: true,
  },
  isThread: false,
  media: {
    uri: 'https://i.ibb.co/nc1kgX0/Whats-App-Image-2022-08-06-at-08-32-44.jpg',
    type: 'image',
  },
  user: userPedro,
  comments: [],
};

const tweet3: Tweet = {
  id: '3',
  reason: null,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin nec erat sed elementum. Cras sit amet ornare lorem. Mauris porta blandit mattis. Praesent vel augue ut nisl vehicula aliquet ac non est. Nunc sit amet elit velit. Morbi iaculis fringilla est, sed tristique magna ullamcorper a. Aliquam ultrices vehicula tellus at ultricies. Phasellus iaculis tincidunt arcu ac maximus laoreet.',
  date: '2022-08-12 16:00:00',
  interactions: {
    likes: 10,
    retweets: 0,
    comments: 0,
    likedByYou: true,
    retweetedByYou: false,
  },
  isThread: false,
  media: null,
  user: userEronaldo,
  comments: [
    {
      id: '1',
      reason: null,
      content: 'Muito bom!!',
      date: '2022-08-16 16:00:00',
      interactions: {
        likes: 20,
        retweets: 0,
        comments: 10,
        likedByYou: false,
        retweetedByYou: false,
      },
      isThread: true,
      media:
        null /* 'https://i.ibb.co/J5BGBkV/Whats-App-Image-2022-08-03-at-20-10-02.jpg' */,
      user: userRaul,
    },
  ],
};

export {tweet1, tweet2, tweet3};
