import type { CourseProgress } from '../types';

function getProgress(): Record<string, CourseProgress> {
  try {
    const raw = localStorage.getItem('courseProgress');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: Record<string, CourseProgress>): void {
  localStorage.setItem('courseProgress', JSON.stringify(progress));
}

export function getCourseProgress(courseId: string): CourseProgress {
  const progress = getProgress();
  if (!progress[courseId]) {
    progress[courseId] = { completed: [], currentLesson: 0 };
    saveProgress(progress);
  }
  return progress[courseId];
}

export function completeLesson(courseId: string, lessonIndex: number, totalLessons: number): void {
  const progress = getProgress();
  if (!progress[courseId]) {
    progress[courseId] = { completed: [], currentLesson: 0 };
  }
  if (!progress[courseId].completed.includes(lessonIndex)) {
    progress[courseId].completed.push(lessonIndex);
  }
  if (lessonIndex < totalLessons - 1) {
    progress[courseId].currentLesson = lessonIndex + 1;
  }
  saveProgress(progress);
}

export function uncompleteLesson(courseId: string, lessonIndex: number): void {
  const progress = getProgress();
  if (progress[courseId]) {
    progress[courseId].completed = progress[courseId].completed.filter(
      (i) => i !== lessonIndex
    );
    saveProgress(progress);
  }
}

export function getProgressPercent(courseId: string, totalLessons: number): number {
  const progress = getCourseProgress(courseId);
  return Math.round((progress.completed.length / totalLessons) * 100);
}
