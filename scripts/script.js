document.addEventListener('DOMContentLoaded', function () {
  const articles = document.querySelectorAll('#articles article');
  const articleCountText = document.querySelector('#article-count');
  const categoryFilter = document.querySelector('#category-filter');
  const searchInput = document.querySelector('#search-input');

  // Функция для отображения только первых 3 статей
  function showLastThreeArticles() {
    articles.forEach((article, index) => {
      article.style.display = index < 3 ? 'block' : 'none';
    });
    updateArticleCount(true); // Показываем общее количество статей
  }

  // Функция для обновления счётчика статей
  function updateArticleCount(showTotal = false) {
    if (showTotal) {
      articleCountText.textContent = `Всего статей: ${articles.length}`;
    } else {
      const visibleArticlesCount = Array.from(articles).filter(
        (article) => article.style.display === 'block'
      ).length;
      articleCountText.textContent = `Найдено статей: ${visibleArticlesCount}`;
    }
  }

  // Функция фильтрации по категориям
  categoryFilter.addEventListener('change', function () {
    const selectedCategory = categoryFilter.value.toLowerCase();

    if (selectedCategory === '') {
      // Если выбрана категория "Все", возвращаемся к исходному состоянию
      showLastThreeArticles();
    } else {
      articles.forEach((article) => {
        const articleCategory = article.dataset.category.toLowerCase();
        article.style.display =
          articleCategory === selectedCategory ? 'block' : 'none';
      });
      updateArticleCount(); // Показываем количество видимых статей
    }
  });

  // Функция поиска по статьям
  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();

    articles.forEach((article) => {
      const title = article
        .querySelector('.article-title')
        .textContent.toLowerCase();
      const content = article.querySelector('p').textContent.toLowerCase();

      if (title.includes(query) || content.includes(query)) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });

    updateArticleCount(); // Показываем количество найденных статей
  });

  // Инициализация: показываем только последние 3 статьи
  showLastThreeArticles();
});
