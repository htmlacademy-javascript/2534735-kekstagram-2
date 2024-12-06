import { getRandomInt, getRandomElement } from './util.js';

const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;
const MAX_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 30;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Артём', 'Светлана', 'Евгений', 'Ксения', 'Максим', 'Ольга', 'Дмитрий', 'Анна'];

export function generateComments(numberOfComments) {
  const comments = [];

  for (let i = 0; i < numberOfComments; i++) {
    const commentId = i + 1;
    const comment = {
      id: commentId,
      avatar: `img/avatar-${getRandomInt(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`,
      message: getRandomElement(MESSAGES),
      name: getRandomElement(NAMES)
    };
    comments.push(comment);
  }

  return comments;
}

export function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= MAX_PHOTOS; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии номер ${i}`,
      likes: getRandomInt(MIN_LIKES, MAX_LIKES),
      comments: generateComments(getRandomInt(0, MAX_COMMENTS))
    };
    photos.push(photo);
  }

  return photos;
}
