import { ICourse } from "@/entities/Course";

export interface IGroup {
  id: string;
  name: string;
  course: ICourse;
}
