import { CourseProps } from "./types";
import { File } from "../classes"

export default class Course {
  static count: number = 1;
  id: number;
  name: string;
  credit: number;

  constructor(name: string, credit: number) {
    this.id = Course.count++;
    this.name = name;
    this.credit = credit;

    File.append(this);
  }

  toJSON(): CourseProps {
    return {
      id: this.id,
      name: this.name,
      credit: this.credit
    };
  }

  toString(): string {
    return `${this.id},  ${this.name}, ${this.credit}`;
  }
}
