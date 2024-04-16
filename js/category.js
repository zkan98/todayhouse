document.addEventListener('DOMContentLoaded', function() {
  // 이전 및 다음 버튼, 카테고리 컨테이너 선택
  const prevButton = document.querySelector('.slide-prev');
  const nextButton = document.querySelector('.slide-next');
  const categoryContainer = document.querySelector('.home-category__contents');

  // 버튼의 표시 여부를 결정하는 함수
  function updateButtonVisibility() {
    // 최대 스크롤 가능 거리 계산
    const maxScrollLeft = categoryContainer.scrollWidth - categoryContainer.clientWidth;
    // 스크롤 위치가 0이면 이전 버튼 숨김
    if (categoryContainer.scrollLeft === 0) {
      prevButton.style.display = 'none';
    } else {
      prevButton.style.display = 'block';
    }

    // 스크롤 위치가 최대라면 다음 버튼 숨김
    if (categoryContainer.scrollLeft >= maxScrollLeft) {
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = 'block';
    }
  }

  // 초기 버튼 가시성 설정
  updateButtonVisibility();

  // 스크롤 시 버튼 가시성 업데이트
  categoryContainer.addEventListener('scroll', updateButtonVisibility);

  // 다음 버튼 클릭 시 맨 끝으로 스크롤
  nextButton.addEventListener('click', function() {
    categoryContainer.scrollTo({
      left: categoryContainer.scrollWidth,
      behavior: 'smooth' // 부드러운 스크롤 효과
    });
  });

  prevButton.addEventListener('click', function() {
    categoryContainer.scrollTo({
      left: 0,
      behavior: 'smooth' // 부드러운 스크롤 효과
    });
  });
});

