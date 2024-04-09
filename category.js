 document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.slide-prev');
  const nextButton = document.querySelector('.slide-next');
  const categoryContainer = document.querySelector('.home-category__contents');

  // 스크롤 위치에 따라 버튼 표시 업데이트
  function updateButtonVisibility() {
  const maxScrollLeft = categoryContainer.scrollWidth - categoryContainer.clientWidth;
  if (categoryContainer.scrollLeft === 0) {
  prevButton.style.display = 'none';
} else {
  prevButton.style.display = 'block';
}

  if (categoryContainer.scrollLeft >= maxScrollLeft) {
  nextButton.style.display = 'none';
} else {
  nextButton.style.display = 'block';
}
}

  // 초기 버튼 가시성 설정
  updateButtonVisibility();

  // 스크롤 이벤트 리스너 추가
  categoryContainer.addEventListener('scroll', updateButtonVisibility);

  nextButton.addEventListener('click', function() {
  categoryContainer.scrollTo({
  left: categoryContainer.scrollWidth,
  behavior: 'smooth'
});
});

  prevButton.addEventListener('click', function() {
  categoryContainer.scrollTo({
  left: 0,
  behavior: 'smooth'
});
});
});

