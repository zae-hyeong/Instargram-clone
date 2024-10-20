import { faker } from "@faker-js/faker";

export default function createRandomPost() {
  return new Post();
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
    this.profileImg =
      faker.image.avatar() ||
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fphotos%2F%25EC%2595%2584%25EB%25B0%2594%25ED%2583%2580&psig=AOvVaw2rKK-yx3XSsk6QgQ89nX-Z&ust=1729501335517000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi1t9fMnIkDFQAAAAAdAAAAABAE";
    this.uploaderId = faker.internet.userName() || "nick.name_vv";
    this.imgs = [
      faker.image.url() ||
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EC%2595%2584%25EB%25B0%2594%25ED%2583%2580%2520%25EC%258B%259C%25EB%25A6%25AC%25EC%25A6%2588&psig=AOvVaw2rKK-yx3XSsk6QgQ89nX-Z&ust=1729501335517000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi1t9fMnIkDFQAAAAAdAAAAABAJ",
      faker.image.url(),
      faker.image.url(),
      faker.image.url(),
    ];
    this.numOfLike = faker.number.int() || 12345;
    this.numOfComment = faker.number.int() || 12;
    this.uploadBefore = faker.date.birthdate() || new Date();
    this.content =
      faker.lorem.paragraph() ||
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ipsa architecto accusantium libero quas culpa quia possimus dolores laborum debitis. Porro cum dolor odit earum doloribus inventore nam officia similique.";
  }
}
