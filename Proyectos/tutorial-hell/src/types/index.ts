export type LessonType = 'video' | 'link' | 'pdf';

export interface Lesson {
  title: string;
  type: LessonType;
  content: string;
  duration?: string;
  description?: string;
}

export interface Course {
  id: string;
  title: string;
  levels: ('beginner' | 'intermediate' | 'advanced')[];
  description: string;
  thumbnail: string;
  lessons: Lesson[];
  routes: string[];
}

export interface RouteStage {
  title: string;
  description?: string;
  courseIds: string[];
}

export interface Route {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  stages: RouteStage[];
}

export interface CourseProgress {
  completed: number[];
  currentLesson: number;
}
