import { courses, routes } from '../data/courses';
import type { Course, Route } from '../types';
import { getCourseProgress, completeLesson, uncompleteLesson, getProgressPercent } from './progress';
import { showHomeChat, showChatBtn } from './chat';
import { fireConfetti } from './confetti';

let currentCourseId: string | null = null;
let currentLessonIndex = 0;
let currentRouteId: string | null = null;

const PAGE_SIZE = 6;
let filteredCourses: Course[] = [];
let visibleCount = PAGE_SIZE;

function getTotalDuration(course: Course): string {
  let totalSec = 0;
  course.lessons.forEach((l) => {
    if (l.duration) {
      const parts = l.duration.split(':').map(Number);
      if (parts.length === 3) {
        totalSec += parts[0] * 3600 + parts[1] * 60 + parts[2];
      } else if (parts.length === 2) {
        totalSec += parts[0] * 60 + parts[1];
      }
    }
  });
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  return h > 0 ? `${h}h ${m}m` : `${m} min`;
}

function getRouteIcon(icon: string): string {
  if (icon === 'server') {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>';
  }
  if (icon === 'monitor') {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>';
  }
  if (icon === 'layers') {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 22,8.5 12,15 2,8.5"/><polyline points="2,15.5 12,22 22,15.5"/><polyline points="2,11.5 12,18 22,11.5"/></svg>';
  }
  if (icon === 'terminal') {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4,17 10,11 4,5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>';
  }
  if (icon === 'database') {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>';
  }
  if (icon === 'cloud') {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>';
  }
  if (icon === 'shield') {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';
  }
  return '';
}

function getRouteProgress(route: Route): { completed: number; total: number; percent: number } {
  let completed = 0;
  let total = 0;
  for (const stage of route.stages) {
    for (const courseId of stage.courseIds) {
      const course = courses.find(c => c.id === courseId);
      if (course) {
        const progress = getCourseProgress(courseId);
        completed += progress.completed.length;
        total += course.lessons.length;
      }
    }
  }
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { completed, total, percent };
}

function renderRouteCards(): void {
  const container = document.getElementById('routeCards');
  if (!container) return;

  container.innerHTML = routes
    .map((route) => {
      const { completed, total, percent } = getRouteProgress(route);
      return `
      <article class="route-card" onclick="__app.openRoute('${route.id}')" style="--route-color:${route.color}">
        <div class="route-card__icon">${getRouteIcon(route.icon)}</div>
        <div class="route-card__body">
          <h3 class="route-card__title">${route.name}</h3>
          <p class="route-card__desc">${route.description}</p>
          <div class="route-card__stages">${route.stages.length} etapas &middot; ${total} lecciones</div>
          <div class="route-card__progress"><div class="route-card__progress-bar" style="width:${percent}%"></div></div>
          <div class="route-card__progress-text">${percent}% completado</div>
        </div>
      </article>`;
    })
    .join('');
}

function levelLabel(level: string): string {
  if (level === 'beginner') return 'Principiante';
  if (level === 'intermediate') return 'Intermedio';
  if (level === 'advanced') return 'Avanzado';
  return level;
}

function levelClass(level: string): string {
  if (level === 'beginner') return 'course-card__level--beginner';
  if (level === 'intermediate') return 'course-card__level--intermediate';
  if (level === 'advanced') return 'course-card__level--advanced';
  return '';
}

function renderCourseGrid(coursesToRender: Course[]): void {
  const grid = document.getElementById('courseGrid');
  const count = document.getElementById('courseCount');
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  if (!grid || !count) return;

  if (coursesToRender.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
          <path d="M8 11h6"/>
        </svg>
        <h3>No se encontraron cursos</h3>
        <p>Intenta con otra búsqueda</p>
      </div>`;
    count.textContent = '0 cursos';
    if (loadMoreContainer) loadMoreContainer.innerHTML = '';
    return;
  }

  const total = coursesToRender.length;
  const shown = Math.min(visibleCount, total);
  count.textContent = `${total} curso${total > 1 ? 's' : ''}`;

  const displayed = coursesToRender.slice(0, shown);

  grid.innerHTML = displayed
    .map((course) => {
      const percent = getProgressPercent(course.id, course.lessons.length);
      const progress = getCourseProgress(course.id);
      return `
      <article class="course-card" onclick="__app.openCourse('${course.id}')">
        <div class="course-card__thumb">
          <img src="${course.thumbnail}" alt="${course.title}" loading="lazy" />
          <div class="course-card__play">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          </div>
          <span class="course-card__badge">${course.lessons.length} lecciones</span>
        </div>
        <div class="course-card__body">
          <h3 class="course-card__title">${course.title}</h3>
          ${course.levels.map(l => `<span class="course-card__level ${levelClass(l)}">${levelLabel(l)}</span>`).join(' ')}
          <div class="course-card__meta">
            <span style="display:flex;align-items:center;gap:4px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              ${getTotalDuration(course)}
            </span>
            <span style="display:flex;align-items:center;gap:4px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              ${course.lessons.length} clases
            </span>
          </div>
          <div class="course-card__progress">
            <div class="course-card__progress-bar" style="width:${percent}%"></div>
          </div>
          <div class="course-card__progress-text">
            <span>${percent}% completado</span>
            <span>${progress.completed.length}/${course.lessons.length}</span>
          </div>
        </div>
      </article>`;
    })
    .join('');

  if (loadMoreContainer) {
    if (shown < total) {
      loadMoreContainer.innerHTML = `
        <div class="load-more">
          <span class="load-more__info">Mostrando ${shown} de ${total} cursos</span>
          <button class="load-more__btn" onclick="__app.loadMore()">Cargar m&aacute;s cursos</button>
        </div>`;
    } else {
      loadMoreContainer.innerHTML = `
        <div class="load-more">
          <span class="load-more__info load-more__info--done">Mostrando ${total} de ${total} cursos</span>
        </div>`;
    }
  }
}

function getYouTubeId(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1);
    const v = u.searchParams.get('v');
    if (v) return v;
    if (u.pathname.includes('/embed/') || u.pathname.includes('/shorts/')) {
      return u.pathname.split('/').pop() || '';
    }
    return url;
  } catch {
    return url;
  }
}

function renderCourseDetail(course: Course): void {
  const container = document.getElementById('courseDetail');
  if (!container) return;

  const progress = getCourseProgress(course.id);
  const percent = getProgressPercent(course.id, course.lessons.length);
  const lesson = course.lessons[currentLessonIndex];

  const getTypeIcon = (type: string): string => {
    if (type === 'video') {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23,7 16,12 23,17"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>';
    } else if (type === 'link') {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
    } else if (type === 'pdf') {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>';
    }
    return '';
  };

  const getTypeLabel = (type: string): string => {
    if (type === 'video') return 'Video';
    if (type === 'link') return 'Enlace externo';
    if (type === 'pdf') return 'PDF';
    return type;
  };

  const renderContent = (l: typeof lesson): string => {
    if (l.type === 'video') {
      const videoId = getYouTubeId(l.content);
      return `
        <div class="video-wrapper" id="videoWrapper">
          <iframe
            id="videoPlayer"
            src="https://www.youtube.com/embed/${videoId}?rel=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>`;
    } else if (l.type === 'link') {
      return `
        <div class="resource-link" onclick="window.open('${l.content}', '_blank')">
          <div class="resource-link__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </div>
          <div class="resource-link__info">
            <div class="resource-link__title">Acceder al recurso externo</div>
            <div class="resource-link__desc">${l.content}</div>
          </div>
        </div>`;
    } else if (l.type === 'pdf') {
      return `
        <div class="resource-link" onclick="__app.downloadPDF('${l.content}')">
          <div class="resource-link__icon" style="background:rgba(0,200,255,0.1);color:#00c8ff;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
          </div>
          <div class="resource-link__info">
            <div class="resource-link__title">Descargar PDF</div>
            <div class="resource-link__desc">${l.content}</div>
          </div>
        </div>`;
    }
    return '';
  };

  container.innerHTML = `
    <div class="course-detail__header">
      <h1 class="course-detail__title">${course.title}</h1>
      <p class="course-detail__instructor"></p>
      <p class="course-detail__desc">${course.description}</p>
    </div>

    <div class="player-layout">
      <div class="player-main">
        ${renderContent(lesson)}

        <div class="video-info">
          <span class="video-info__type">${getTypeLabel(lesson.type)}</span>
          <h2 class="video-info__title">
            ${currentLessonIndex + 1}. ${lesson.title}
          </h2>
          ${lesson.description ? `<p class="video-info__description">${lesson.description}</p>` : ''}
          ${lesson.duration ? `<p class="video-info__description">Duracion: ${lesson.duration}</p>` : ''}

          ${renderNotes(course.id, currentLessonIndex)}

          <div class="video-info__nav">
            ${currentLessonIndex > 0 ? `
              <button class="btn-nav" onclick="__app.goToLesson(${currentLessonIndex - 1})">
                &larr; Anterior
              </button>
            ` : ''}
            ${currentLessonIndex < course.lessons.length - 1 ? `
              <button class="btn-nav btn-nav--primary" onclick="__app.goToLesson(${currentLessonIndex + 1})">
                Siguiente &rarr;
              </button>
            ` : ''}
          </div>
        </div>
      </div>

      <aside class="lesson-sidebar">
        <div class="lesson-sidebar__header">
          <span class="lesson-sidebar__title">Contenido del curso</span>
        </div>
        <div class="lesson-sidebar__list" id="lessonList">
          ${course.lessons
            .map(
              (l, i) => `
            <div
              class="lesson-item ${i === currentLessonIndex ? 'lesson-item--active' : ''} ${progress.completed.includes(i) ? 'lesson-item--completed' : ''}"
              onclick="__app.goToLesson(${i})"
            >
              <div class="lesson-item__type-icon lesson-item__type-icon--${l.type}">
                ${getTypeIcon(l.type)}
              </div>
              <div class="lesson-item__check" onclick="event.stopPropagation();__app.toggleLessonComplete(${i})">
                ${progress.completed.includes(i) ? `
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                ` : ''}
              </div>
              <div class="lesson-item__info">
                <div class="lesson-item__title">${i + 1}. ${l.title}</div>
                <div class="lesson-item__duration">${l.duration || (l.type === 'video' ? 'Video' : 'Recurso')}</div>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
        <div class="lesson-sidebar__progress-bar-container">
          <span class="lesson-sidebar__progress-text">${percent}% completado (${progress.completed.length}/${course.lessons.length})</span>
          <div class="progress-bar">
            <div class="progress-bar__fill" style="width:${percent}%"></div>
          </div>
        </div>
      </aside>
    </div>`;

  setTimeout(() => {
    const active = document.querySelector('.lesson-item--active');
    if (active) {
      active.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, 100);
}

function stopVideo(): void {
  const iframe = document.querySelector<HTMLIFrameElement>('#videoPlayer');
  if (iframe) {
    iframe.src = '';
  }
}

function downloadPDF(filename: string): void {
  alert(`Descargando: ${filename}\n\nEn produccion, esto descargaria el archivo PDF real.`);
}

function renderRouteMap(route: Route, filterText?: string): void {
  const container = document.getElementById('routeDetail');
  if (!container) return;

  const { completed, total, percent } = getRouteProgress(route);

  const q = filterText?.toLowerCase().trim() || '';

  const stagesHtml = route.stages
    .map((stage, si) => {
      const courseCards = stage.courseIds
        .map((courseId) => {
          const course = courses.find((c) => c.id === courseId);
          if (!course) return '';
          if (q && !course.title.toLowerCase().includes(q) && !course.description.toLowerCase().includes(q)) return '';
          const pct = getProgressPercent(course.id, course.lessons.length);
          return `
            <div class="route-course-card" onclick="__app.openRouteCourse('${route.id}', '${course.id}')">
              <div class="route-course-card__thumb">
                <img src="${course.thumbnail}" alt="${course.title}" loading="lazy" />
              </div>
              <div class="route-course-card__body">
                <div class="route-course-card__title">${course.title}</div>
                <div class="route-course-card__meta">${course.lessons.length} lecciones</div>
                <div class="route-course-card__bar"><div class="route-course-card__bar-fill" style="width:${pct}%"></div></div>
                <div class="route-course-card__progress">${pct}%</div>
              </div>
            </div>`;
        })
        .filter(html => html !== '')
        .join('');

      if (q && !courseCards) return '';

      return `
        <div class="route-stage">
          <div class="route-stage__header">
            <span class="route-stage__number">${si + 1}</span>
            <div>
              <div class="route-stage__title">${stage.title}</div>
              ${stage.description ? `<div class="route-stage__desc">${stage.description}</div>` : ''}
            </div>
          </div>
          <div class="route-stage__courses">
            ${courseCards}
          </div>
          ${si < route.stages.length - 1 ? '<div class="route-stage__connector"></div>' : ''}
        </div>`;
    })
    .filter(html => html !== '')
    .join('');

  const noResults = q && !stagesHtml
    ? '<div class="no-results" style="margin-top:2rem"><h3>No se encontraron cursos</h3><p>Intenta con otra búsqueda</p></div>'
    : '';

  container.innerHTML = `
    <div class="route-map">
      <div class="route-map__header">
        <h1 class="route-map__title" style="color:${route.color}">${route.name}</h1>
        <p class="route-map__desc">${route.description}</p>
        <div class="route-map__progress">
          <span>${percent}% completado (${completed}/${total} lecciones)</span>
          <div class="route-map__bar"><div class="route-map__bar-fill" style="width:${percent}%"></div></div>
        </div>
      </div>
      <div class="route-map__stages">
        ${stagesHtml}
      </div>
      ${noResults}
    </div>`;
}

function openRoute(routeId: string): void {
  const route = routes.find((r) => r.id === routeId);
  if (!route) return;

  currentRouteId = routeId;

  const homeView = document.getElementById('homeView');
  const routeView = document.getElementById('routeView');
  if (!homeView || !routeView) return;

  homeView.classList.remove('view--active');
  routeView.classList.add('view--active');

  const input = document.getElementById('searchInput') as HTMLInputElement | null;
  if (input) input.value = '';
  renderRouteMap(route);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openRouteCourse(routeId: string, courseId: string): void {
  const routeView = document.getElementById('routeView');
  if (routeView) routeView.classList.remove('view--active');

  (window as any).__app.openCourse(courseId);
  currentRouteId = routeId;
}

function showHome(): void {
  const homeView = document.getElementById('homeView');
  const courseView = document.getElementById('courseView');
  const routeView = document.getElementById('routeView');
  if (!homeView || !courseView) return;

  homeView.classList.add('view--active');
  courseView.classList.remove('view--active');
  if (routeView) routeView.classList.remove('view--active');
  currentCourseId = null;
  currentLessonIndex = 0;
  currentRouteId = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const input = document.getElementById('searchInput') as HTMLInputElement | null;
  if (input) input.value = '';
  filteredCourses = [...courses];
  visibleCount = PAGE_SIZE;
  renderRouteCards();
  renderCourseGrid(filteredCourses);
  renderContinueWatching();
  showHomeChat();
  stopVideo();
}

function openCourse(courseId: string): void {
  const course = courses.find((c) => c.id === courseId);
  if (!course) return;

  currentCourseId = courseId;
  saveLastCourseId(courseId);

  const progress = getCourseProgress(courseId);
  currentLessonIndex = progress.currentLesson || 0;
  if (currentLessonIndex >= course.lessons.length) {
    currentLessonIndex = 0;
  }

  renderCourseDetail(course);

  const homeView = document.getElementById('homeView');
  const courseView = document.getElementById('courseView');
  const routeView = document.getElementById('routeView');
  if (!homeView || !courseView) return;

  homeView.classList.remove('view--active');
  if (routeView) routeView.classList.remove('view--active');
  courseView.classList.add('view--active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  showChatBtn();
}

function goBackFromCourse(): void {
  if (currentRouteId) {
    const routeView = document.getElementById('routeView');
    const courseView = document.getElementById('courseView');
    if (routeView && courseView) {
      courseView.classList.remove('view--active');
      routeView.classList.add('view--active');
      currentCourseId = null;
      currentLessonIndex = 0;
      stopVideo();
      const route = routes.find(r => r.id === currentRouteId);
      if (route) {
        const input = document.getElementById('searchInput') as HTMLInputElement | null;
        renderRouteMap(route, input?.value || '');
      }
      return;
    }
  }
  showHome();
}

function loadMore(): void {
  visibleCount += PAGE_SIZE;
  renderCourseGrid(filteredCourses);
}

function goToLesson(index: number): void {
  const course = courses.find((c) => c.id === currentCourseId);
  if (!course || index < 0 || index >= course.lessons.length) return;

  currentLessonIndex = index;
  renderCourseDetail(course);

  if (window.innerWidth <= 900) {
    const playerMain = document.querySelector('.player-main');
    if (playerMain) {
      playerMain.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function toggleCompleteLesson(index?: number): void {
  const i = index ?? currentLessonIndex;
  const course = courses.find((c) => c.id === currentCourseId);
  if (!course) return;

  const progress = getCourseProgress(course.id);
  const isCompleted = progress.completed.includes(i);
  const allDoneBefore = progress.completed.length === course.lessons.length;

  if (isCompleted) {
    uncompleteLesson(course.id, i);
  } else {
    completeLesson(course.id, i, course.lessons.length);
  }

  renderCourseDetail(course);

  if (!isCompleted && !allDoneBefore) {
    const updated = getCourseProgress(course.id);
    if (updated.completed.length === course.lessons.length) {
      fireConfetti();
      showCourseCompletedModal(course);
    }
  }
}

function getSuggestedCourses(course: Course): Course[] {
  const routeMatch = routes.find((r) =>
    r.stages.some((s) => s.courseIds.includes(course.id))
  );
  if (routeMatch) {
    const allIds: string[] = [];
    let found = false;
    for (const stage of routeMatch.stages) {
      for (const cid of stage.courseIds) {
        if (found) allIds.push(cid);
      }
      if (stage.courseIds.includes(course.id)) found = true;
    }
    const suggested = allIds
      .map((id) => courses.find((c) => c.id === id))
      .filter((c): c is Course => c !== undefined);
    if (suggested.length > 0) return suggested.slice(0, 3);
  }

  const sameLevel = courses
    .filter((c) => c.id !== course.id && c.levels.some(l => course.levels.includes(l)))
    .slice(0, 3);
  if (sameLevel.length > 0) return sameLevel;

  return courses.filter((c) => c.id !== course.id).slice(0, 3);
}

function showCourseCompletedModal(course: Course): void {
  const existing = document.getElementById('completionModal');
  if (existing) existing.remove();

  const suggested = getSuggestedCourses(course);
  const suggestedHtml = suggested
    .map((c) => {
      const pct = getProgressPercent(c.id, c.lessons.length);
      return `
        <div class="suggestion-card" onclick="__app.goToSuggestedCourse('${c.id}')">
          <div class="suggestion-card__thumb">
            <img src="${c.thumbnail}" alt="${c.title}" loading="lazy" />
          </div>
          <div class="suggestion-card__body">
            <div class="suggestion-card__title">${c.title}</div>
            <div class="suggestion-card__bar"><div class="suggestion-card__bar-fill" style="width:${pct}%"></div></div>
            <div class="suggestion-card__progress">${pct}% completado</div>
          </div>
        </div>`;
    })
    .join('');

  const overlay = document.createElement('div');
  overlay.id = 'completionModal';
  overlay.className = 'completion-modal';
  overlay.innerHTML = `
    <div class="completion-modal__backdrop" onclick="__app.dismissCelebration()"></div>
    <div class="completion-modal__content">
      <button class="completion-modal__close" onclick="__app.dismissCelebration()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="completion-modal__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20,6 9,17 4,12"/></svg>
      </div>
      <h2 class="completion-modal__title">¡Felicidades!</h2>
      <p class="completion-modal__desc">Has completado <strong>${course.title}</strong></p>

      ${suggested.length > 0 ? `
        <div class="completion-modal__suggestions">
          <p class="completion-modal__suggestions-title">Siguientes cursos sugeridos:</p>
          <div class="completion-modal__grid">${suggestedHtml}</div>
        </div>
      ` : ''}

      <button class="completion-modal__btn" onclick="__app.dismissCelebration()">Seguir explorando</button>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.offsetHeight;
  overlay.classList.add('completion-modal--visible');
}

function dismissCelebration(): void {
  const modal = document.getElementById('completionModal');
  if (modal) {
    modal.classList.remove('completion-modal--visible');
    setTimeout(() => modal.remove(), 300);
  }
  const canvas = document.getElementById('confettiCanvas');
  if (canvas) canvas.remove();
  const style = document.getElementById('confettiStyle');
  if (style) style.remove();
}

function goToSuggestedCourse(courseId: string): void {
  dismissCelebration();
  const homeView = document.getElementById('homeView');
  const routeView = document.getElementById('routeView');
  if (homeView) homeView.classList.remove('view--active');
  if (routeView) routeView.classList.remove('view--active');
  openCourse(courseId);
}

export function initSearch(): void {
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.addEventListener('input', () => {
    const query = (input as HTMLInputElement).value.toLowerCase().trim();

    const routeView = document.getElementById('routeView');
    if (routeView?.classList.contains('view--active') && currentRouteId) {
      const route = routes.find(r => r.id === currentRouteId);
      if (route) {
        renderRouteMap(route, query);
        return;
      }
    }

    filteredCourses = courses.filter(
      (c) =>
        c.title.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query)
    );
    visibleCount = PAGE_SIZE;
    renderCourseGrid(filteredCourses);

    if (currentCourseId !== null) {
      showHome();
    }
  });
}

function saveLastCourseId(courseId: string): void {
  localStorage.setItem('lastCourseId', courseId);
}

function renderContinueWatching(): void {
  const container = document.getElementById('continueWatching');
  if (!container) return;

  const lastId = localStorage.getItem('lastCourseId');
  if (!lastId) { container.innerHTML = ''; return; }

  const course = courses.find((c) => c.id === lastId);
  if (!course) { container.innerHTML = ''; return; }

  const progress = getCourseProgress(course.id);
  if (progress.completed.length === 0 && progress.currentLesson === 0) {
    container.innerHTML = '';
    return;
  }

  const lessonIdx = progress.currentLesson || 0;
  const lesson = course.lessons[lessonIdx];
  const percent = getProgressPercent(course.id, course.lessons.length);

  container.innerHTML = `
    <div class="continue-card">
      <div class="continue-card__thumb">
        <img src="${course.thumbnail}" alt="${course.title}" loading="lazy" />
      </div>
      <div class="continue-card__body">
        <div class="continue-card__label">Continuar curso</div>
        <div class="continue-card__title">${course.title}</div>
        <div class="continue-card__lesson">Lecci&oacute;n ${lessonIdx + 1}: ${lesson.title} &middot; ${percent}% completado</div>
      </div>
      <button class="continue-card__action" onclick="__app.openCourse('${course.id}')">Continuar</button>
    </div>`;
}

export function initCourses(): void {
  filteredCourses = [...courses];
  visibleCount = PAGE_SIZE;
  renderRouteCards();
  renderCourseGrid(filteredCourses);
  renderContinueWatching();
}

export function getCurrentLessonState(): { courseId: string | null; lessonIndex: number } {
  return { courseId: currentCourseId, lessonIndex: currentLessonIndex };
}

let notesTimer: ReturnType<typeof setTimeout> | null = null;

function saveNotes(courseId: string, lessonIndex: number, content: string): void {
  const key = `notes-${courseId}-${lessonIndex}`;
  if (content.trim()) {
    localStorage.setItem(key, content);
  } else {
    localStorage.removeItem(key);
  }
  const el = document.getElementById('notesSaved');
  if (el) {
    el.classList.add('notes-saved--visible');
    setTimeout(() => el.classList.remove('notes-saved--visible'), 2000);
  }
}

function loadNotes(courseId: string, lessonIndex: number): string {
  return localStorage.getItem(`notes-${courseId}-${lessonIndex}`) || '';
}

function toggleNotes(): void {
  const textarea = document.getElementById('notesTextarea');
  const toggle = document.getElementById('notesToggle');
  if (!textarea || !toggle) return;

  const isVisible = textarea.classList.contains('notes-textarea--visible');
  textarea.classList.toggle('notes-textarea--visible');
  if (!isVisible) {
    textarea.focus();
  }
}

function renderNotes(courseId: string, lessonIndex: number): string {
  const saved = loadNotes(courseId, lessonIndex);
  return `
    <div class="notes-section">
      <button class="notes-toggle" id="notesToggle" onclick="__app.toggleNotes()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
        Notas
      </button>
      <textarea
        class="notes-textarea ${saved ? 'notes-textarea--visible' : ''}"
        id="notesTextarea"
        placeholder="Escribe tus notas sobre esta leccion..."
        oninput="__app.onNotesInput()"
      >${saved}</textarea>
      <div class="notes-saved" id="notesSaved">Notas guardadas</div>
    </div>`;
}

function onNotesInput(): void {
  if (notesTimer) clearTimeout(notesTimer);
  notesTimer = setTimeout(() => {
    if (currentCourseId) {
      const textarea = document.getElementById('notesTextarea') as HTMLTextAreaElement | null;
      if (textarea) {
        saveNotes(currentCourseId, currentLessonIndex, textarea.value);
      }
    }
  }, 500);
}

export function registerCourseActions(): void {
  (window as any).__app = {
    ...(window as any).__app,
    openCourse,
    goToLesson,
    toggleCompleteLesson,
    downloadPDF,
    toggleNotes,
    onNotesInput,
    toggleLessonComplete: toggleCompleteLesson,
    openRoute,
    openRouteCourse,
    goBackFromCourse,
    loadMore,
    dismissCelebration,
    goToSuggestedCourse,
  };
}

export { showHome };
