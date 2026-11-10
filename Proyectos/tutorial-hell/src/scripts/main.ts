import { initTheme, toggleTheme } from './theme';
import { initCourses, initSearch, showHome, registerCourseActions, getCurrentLessonState } from './courses';
import { initChat } from './chat';

registerCourseActions();

function exportProgress(): void {
  const data: Record<string, unknown> = {};
  const theme = localStorage.getItem('theme');
  const lastCourseId = localStorage.getItem('lastCourseId');
  const courseProgressRaw = localStorage.getItem('courseProgress');

  if (theme) data.theme = theme;
  if (lastCourseId) data.lastCourseId = lastCourseId;
  if (courseProgressRaw) {
    try { data.courseProgress = JSON.parse(courseProgressRaw); } catch { /* skip */ }
  }

  const notesKeys: Record<string, string> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('notes-')) {
      notesKeys[key] = localStorage.getItem(key) || '';
    }
  }
  if (Object.keys(notesKeys).length) data.notes = notesKeys;

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `progreso-cursos-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProgress(file: File): void {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result as string);

      if (data.theme) {
        localStorage.setItem('theme', data.theme);
        document.documentElement.setAttribute('data-theme', data.theme);
      }

      if (data.courseProgress) {
        localStorage.setItem('courseProgress', JSON.stringify(data.courseProgress));
      }

      if (data.lastCourseId) {
        localStorage.setItem('lastCourseId', data.lastCourseId);
      }

      if (data.notes && typeof data.notes === 'object') {
        for (const [key, value] of Object.entries(data.notes)) {
          if (typeof value === 'string' && value.trim()) {
            localStorage.setItem(key, value);
          }
        }
      }

      window.location.reload();
    } catch {
      alert('El archivo no tiene un formato valido.');
    }
  };
  reader.readAsText(file);
}

function updateThemeLabel(): void {
  const theme = document.documentElement.getAttribute('data-theme');
  const label = document.getElementById('themeLabel');
  if (label) {
    label.textContent = theme === 'dark' ? 'Tema claro' : 'Tema oscuro';
  }
}

function closeDropdown(): void {
  const el = document.getElementById('settingsDropdown');
  if (el) el.hidden = true;
}

function toggleDropdown(): void {
  const el = document.getElementById('settingsDropdown');
  if (el) el.hidden = !el.hidden;
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  const settingsBtn = document.getElementById('settingsBtn');
  const dropdown = document.getElementById('settingsDropdown');

  settingsBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  document.addEventListener('click', (e) => {
    if (!dropdown?.hidden && !(e.target as HTMLElement).closest('.header__settings')) {
      closeDropdown();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown();

    const tag = (e.target as HTMLElement).tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;

    if (e.key === 't' || e.key === 'T') {
      toggleTheme();
      updateThemeLabel();
      return;
    }

    const state = getCurrentLessonState();
    if (!state.courseId) return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      (window as any).__app.goToLesson(state.lessonIndex - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      (window as any).__app.goToLesson(state.lessonIndex + 1);
    }
  });

  updateThemeLabel();
  initCourses();
  initSearch();

  const logoLink = document.getElementById('logoLink');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      showHome();
      closeDropdown();
    });
  }

  const btnBack = document.getElementById('btnBack');
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      (window as any).__app.goBackFromCourse();
      closeDropdown();
    });
  }

  const btnRouteBack = document.getElementById('btnRouteBack');
  if (btnRouteBack) {
    btnRouteBack.addEventListener('click', () => {
      showHome();
      closeDropdown();
    });
  }

  initChat();

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    toggleTheme();
    updateThemeLabel();
    closeDropdown();
  });

  document.getElementById('exportBtn')?.addEventListener('click', () => {
    exportProgress();
    closeDropdown();
  });

  const importBtn = document.getElementById('importBtn');
  const importInput = document.getElementById('importFileInput') as HTMLInputElement | null;
  if (importBtn && importInput) {
    importBtn.addEventListener('click', () => {
      importInput.click();
      closeDropdown();
    });
    importInput.addEventListener('change', () => {
      if (importInput.files?.[0]) importProgress(importInput.files[0]);
      importInput.value = '';
    });
  }
});
