import { Course } from ".";
import { StudentProps } from "./types";

export default class Students {
  name: string;
  courses: Course[];

  constructor(name: string, courses: Course[]) {
    this.name = name;
    this.courses = courses;
  }

  toJSON(): StudentProps {
    return {
      name: this.name,
      courses: this.courses.map((course) => ({
        id: course.id,
        name: course.name,
        credit: course.credit,
      })),
    };
  }
}
