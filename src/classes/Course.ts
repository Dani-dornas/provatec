import { CourseProps } from "./types";

export default class Course {
  static count: number = 1;
  id: number;
  name: string;
  credit: number;

  constructor(name: string, credit: number) {
    this.id = Course.count++;
    this.name = name;
    this.credit = credit;
  }

  toJSON(): CourseProps {
    return {
      id: this.id,
      name: this.name,
      credit: this.credit
    };
  }

  toString(): string {
    return `[Course ${this.id}: ${this.name}]`;
  }
}
