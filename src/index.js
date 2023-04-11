import './index.css';

const loginBtn = document.querySelector('#login');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('#modal');
const loginContainer = document.querySelector('#loginContainer');

// 登入按鈕點擊事件，點擊後顯示登入彈窗
loginBtn.addEventListener('click', () => {
  modal.classList.remove('opacity-0', 'pointer-events-none');
});

// 關閉按鈕點擊事件，點擊後關閉登入彈窗
closeBtn.addEventListener('click', () => {
  modal.classList.add('opacity-0', 'pointer-events-none');
});

// 點選背景可以關閉登入彈窗
modal.addEventListener('mousedown', (e) => {
  if (!loginContainer.contains(e.target)) {
    modal.classList.add('opacity-0', 'pointer-events-none');
  }
});

// 渲染清單
function renderList(id, contents) {
  const targetUl = document.querySelector(`#${id}`);

  const svgColor = id === 'list2' ? 'text-white' : 'text-primary';

  let htmlStr = ``;
  contents.map((content) => {
    htmlStr += renderTemplate(content, svgColor);
  });
  targetUl.innerHTML = htmlStr;
}

// 渲染清單模板
function renderTemplate(content, svgColor) {
  const template = `
    <li class="mt-6 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="mr-4 h-6 w-6 stroke-current ${svgColor}"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
      ${content}
    </li>
  `;
  return template;
}

renderList('list1', ['一般會員', '最多兩人同時在線', '每日最多下載50G']);
renderList('list2', ['標準會員', '最多四人同時在線', '每日最多下載150G']);
renderList('list3', ['高級會員', '不限制連線數', '不限制下載量']);
