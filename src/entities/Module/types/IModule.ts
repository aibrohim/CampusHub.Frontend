import { ICourse } from "@/entities/Course";

export interface IModule {
  id: string;
  name: string;
  course: ICourse;
}
