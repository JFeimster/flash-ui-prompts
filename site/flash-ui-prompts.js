const DATA_PATH = '../data/flash-ui-prompts/master-flash-ui-prompts.json';
const fallbackData = {count:0, groups:[], items:[]};
const state = {items: [], groups: [], categories: [], brands: [], styles: []};
const els = {};

function norm(v){ return String(v || '').toLowerCase().trim(); }
function uniq(arr){ return [...new Set(arr.filter(Boolean))]; }
function getText(item, key){ return item[key] || ''; }

async function loadData(){
  try{
    const res = await fetch(DATA_PATH, {cache:'no-store'});
    if(!res.ok) throw new Error('fetch failed');
    return await res.json();
  }catch(e){
    console.warn('Using fallback data path:', DATA_PATH, e);
    return fallbackData;
  }
}

function fillSelect(select, values, label){
  select.innerHTML = `<option value="">${label}</option>` + values.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('');
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function visibleItems(){
  const q = norm(els.search.value);
  const group = els.groupFilter.value;
  const category = els.categoryFilter.value;
  const brand = els.brandFilter.value;
  const style = els.styleFilter.value;
  return state.items.filter(item => {
    const hay = [item.name, item.id, item.group_name, item.brand, item.category, item.type, item.visual_style, item.primary_cta, item.hook, item.hero_message, item.flash_ui_prompt].map(norm).join(' ');
    return (!q || hay.includes(q)) &&
      (!group || item.group_id === group) &&
      (!category || norm(item.category) === norm(category)) &&
      (!brand || norm(item.brand) === norm(brand)) &&
      (!style || norm(item.visual_style) === norm(style));
  });
}

function render(){
  const items = visibleItems();
  els.resultsMeta.textContent = `${items.length} of ${state.items.length} prompts match your filters.`;
  els.cards.innerHTML = '';
  if(!items.length){
    els.cards.innerHTML = '<div class="empty">No prompts match. Clear filters and try again.</div>';
    return;
  }
  const template = els.cardTemplate;
  for(const item of items){
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('h2').textContent = item.name;
    const dl = node.querySelector('dl');
    const pairs = [
      ['ID', item.id], ['Group', item.group_name], ['Brand', item.brand], ['Category', item.category],
      ['Type', item.type], ['Visual Style', item.visual_style], ['Primary CTA', item.primary_cta], ['Hook', item.hook]
    ];
    pairs.filter(([,v]) => v).forEach(([k,v]) => { dl.insertAdjacentHTML('beforeend', `<dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd>`); });
    const promptEl = node.querySelector('.prompt');
    promptEl.textContent = item.flash_ui_prompt || '';
    node.querySelector('.copy-btn').addEventListener('click', async () => {
      await navigator.clipboard.writeText(item.flash_ui_prompt || '');
      node.querySelector('.copy-btn').textContent = 'Copied';
      setTimeout(() => node.querySelector('.copy-btn').textContent = 'Copy prompt', 1100);
    });
    node.querySelector('.toggle-btn').addEventListener('click', () => {
      const hidden = promptEl.hasAttribute('hidden');
      if(hidden) promptEl.removeAttribute('hidden'); else promptEl.setAttribute('hidden', '');
      node.querySelector('.toggle-btn').textContent = hidden ? 'Hide full prompt' : 'View full prompt';
    });
    els.cards.appendChild(node);
  }
}

async function init(){
  Object.assign(els, {
    search: document.getElementById('search'),
    groupFilter: document.getElementById('groupFilter'),
    categoryFilter: document.getElementById('categoryFilter'),
    brandFilter: document.getElementById('brandFilter'),
    styleFilter: document.getElementById('styleFilter'),
    cards: document.getElementById('cards'),
    resultsMeta: document.getElementById('resultsMeta'),
    cardTemplate: document.getElementById('cardTemplate'),
  });
  const data = await loadData();
  state.items = data.items || [];
  state.groups = data.groups || [];
  state.categories = uniq(state.items.map(x => x.category));
  state.brands = uniq(state.items.map(x => x.brand));
  state.styles = uniq(state.items.map(x => x.visual_style));
  document.getElementById('totalCount').textContent = data.count || state.items.length;
  document.getElementById('groupCount').textContent = state.groups.length;
  fillSelect(els.groupFilter, state.groups.map(g => `${g.group_name}|||${g.group_id}`), 'All groups');
  els.groupFilter.querySelectorAll('option').forEach(opt => { if(opt.value.includes('|||')) { const [label,id] = opt.value.split('|||'); opt.textContent = label; opt.value = id; }});
  fillSelect(els.categoryFilter, state.categories, 'All categories');
  fillSelect(els.brandFilter, state.brands, 'All brands');
  fillSelect(els.styleFilter, state.styles, 'All visual styles');
  [els.search, els.groupFilter, els.categoryFilter, els.brandFilter, els.styleFilter].forEach(el => el.addEventListener('input', render));
  render();
}
init();
