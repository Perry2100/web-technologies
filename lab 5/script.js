const openButtons = document.querySelectorAll('.open-btn');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.getElementById('close-btn');
const newsCards = document.querySelectorAll('.news-card');

const newsData = {
  1: {
    title: 'Новость 1',
    text: 'Новость 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil corporis debitis labore fugiat id, eligendi ratione veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatum!'
  },
  2: {
    title: 'Новость 2',
    text: 'Новость 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, incidunt voluptates quisquam neque labore eaque eveniet nihil iure.'
  },
  3: {
    title: 'Новость 3',
    text: 'Новость 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, molestiae excepturi facilis sint nemo laborum debitis sit asperiores adipisci!'
  }
};

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const newsId = btn.getAttribute('data-news');

    // Set modal content
    modalTitle.textContent = newsData[newsId].title;
    modalText.textContent = newsData[newsId].text;

    // Highlight selected card
    newsCards.forEach(card => card.classList.remove('active'));
    document.getElementById(`news${newsId}`).classList.add('active');

    // Show modal
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
  newsCards.forEach(card => card.classList.remove('active'));
});
