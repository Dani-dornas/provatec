export interface CourseProps {
  id: number;
  name: string;
  credit: number;
}

export interface StudentProps {
  name: string;
  courses: CourseProps[];
}