// ==========================================================
// Menu mobile (hambúrguer)
// ==========================================================
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Fecha o menu ao clicar fora dele (em telas pequenas)
document.addEventListener('click', (event) => {
  const clickedInsideNav = mainNav.contains(event.target);
  const clickedToggle = navToggle.contains(event.target);

  if (!clickedInsideNav && !clickedToggle) {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// ==========================================================
// Ano automático no rodapé
// ==========================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ==========================================================
// Exemplo: simulação de troca de status (documento válido / inválido)
// Isso é só para você estudar como o site poderia reagir
// a diferentes respostas de uma API real de validação.
// ==========================================================
function setDocumentStatus(isValid) {
  const banner = document.getElementById('statusBanner');
  const text = document.getElementById('statusText');

  banner.classList.toggle('status--valid', isValid);
  banner.classList.toggle('status--invalid', !isValid);
  text.textContent = isValid ? 'Documento válido!' : 'Documento inválido ou não encontrado.';
}

// Deixe disponível no console para você testar:
// setDocumentStatus(false)
window.setDocumentStatus = setDocumentStatus;
