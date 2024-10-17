
import { faker } from '@faker-js/faker';

export default function createRandomPost() {
  return {
    profileImg: faker.image.avatar(),
    uploaderId: faker.internet.userName(),
    imgs: [faker.image.url(),faker.image.url(),faker.image.url(),faker.image.url()],
    numOfLike: faker.number.int(),
    numOfComment: faker.number.int(),
    uploadBefore: faker.date.birthdate(),
    content: faker.lorem.paragraph(),
  };
}

export interface PostI {
  profileImg: string;
  uploaderId: string;
  imgs: string[];
  numOfLike: number;
  numOfComment: number;
  uploadBefore: Date;
  content: string;
}

export class Post implements PostI {
  profileImg: string;
  uploaderId: string;
  imgs: string[];
  numOfLike: number;
  numOfComment: number;
  uploadBefore: Date;
  content: string;

  constructor() {
    this.profileImg = faker.image.avatar() || '';
    this.uploaderId = faker.internet.userName();
    this.imgs = [faker.image.url(),faker.image.url(),faker.image.url(),faker.image.url()];
    this.numOfLike = faker.number.int();
    this.numOfComment = faker.number.int();
    this.uploadBefore = faker.date.birthdate() || new Date();
    this.content = faker.lorem.paragraph() || '';
  }
}