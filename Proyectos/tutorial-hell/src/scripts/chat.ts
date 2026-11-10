let isChatLoading = false;
let selectedModel = 'openrouter/free';

async function getAIResponse(userMessage: string): Promise<string> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userMessage, model: selectedModel }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => null);
    const msg = err?.error?.error?.message || err?.error?.message || err?.error || 'Error al contactar la IA';
    throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg));
  }
  const data = await res.json();
  return data.reply;
}

export function showChatBtn(): void {
  const btn = document.getElementById('chatBtn');
  if (btn) btn.classList.add('chat-btn--visible');
}

export function hideChatBtn(): void {
  const btn = document.getElementById('chatBtn');
  if (btn) btn.classList.remove('chat-btn--visible');
}

function openChat(): void {
  const modal = document.getElementById('chatModal');
  if (modal) modal.classList.add('chat-modal--open');
}

function closeChat(): void {
  const modal = document.getElementById('chatModal');
  if (modal) modal.classList.remove('chat-modal--open');
}

function scrollChat(): void {
  const msgContainer = document.getElementById('chatMessages');
  if (msgContainer) {
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }
}

function addMessage(role: 'user' | 'bot', text: string): void {
  const container = document.getElementById('chatMessages');
  if (!container) return;

  const typing = container.querySelector('.chat-typing');
  if (typing) typing.closest('.chat-message')?.remove();

  const msgEl = document.createElement('div');
  msgEl.className = `chat-message chat-message--${role}`;

  const avatar = document.createElement('div');
  avatar.className = 'chat-message__avatar';
  avatar.textContent = role === 'bot' ? 'IA' : 'T';

  const bubble = document.createElement('div');
  bubble.className = 'chat-message__text';
  bubble.textContent = text;

  msgEl.appendChild(avatar);
  msgEl.appendChild(bubble);
  container.appendChild(msgEl);
  scrollChat();
}

function showTypingIndicator(): void {
  const container = document.getElementById('chatMessages');
  if (!container) return;

  const typing = document.createElement('div');
  typing.className = 'chat-message chat-message--bot';
  typing.innerHTML = `
    <div class="chat-message__avatar">IA</div>
    <div class="chat-message__text chat-typing">
      <span></span><span></span><span></span>
    </div>
  `;
  container.appendChild(typing);
  scrollChat();
}

async function sendMessage(): Promise<void> {
  const input = document.getElementById('chatInput') as HTMLInputElement | null;
  if (!input || isChatLoading) return;

  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  isChatLoading = true;

  addMessage('user', text);
  showTypingIndicator();

  try {
    const response = await getAIResponse(text);
    addMessage('bot', response);
  } catch {
    addMessage('bot', 'Lo siento, hubo un error al contactar la IA. Intenta de nuevo.');
  }

  isChatLoading = false;
}

function initModelSelector(): void {
  const select = document.getElementById('chatModelSelect') as HTMLSelectElement | null;
  if (!select) return;
  select.value = selectedModel;
  select.addEventListener('change', () => {
    selectedModel = select.value;
  });
}

export function initChat(): void {
  const chatBtn = document.getElementById('chatBtn');
  const closeBtn = document.getElementById('chatCloseBtn');
  const overlay = document.getElementById('chatOverlay');
  const sendBtn = document.getElementById('chatSendBtn');
  const chatInput = document.getElementById('chatInput');

  chatBtn?.addEventListener('click', openChat);
  closeBtn?.addEventListener('click', closeChat);
  overlay?.addEventListener('click', closeChat);
  sendBtn?.addEventListener('click', sendMessage);

  chatInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  initModelSelector();
  hideChatBtn();
}

export function showHomeChat(): void {
  hideChatBtn();
  closeChat();
}
