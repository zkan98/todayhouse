document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.banner-slider');
  const slides = document.querySelectorAll('.banner-item');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => {
      slide.style.display = 'none'; // 모든 슬라이드를 숨깁니다.
    });
    slides[index].style.display = 'flex'; // 현재 슬라이드만 표시합니다.
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // 다음 슬라이드 인덱스 계산
    showSlide(currentSlide); // 슬라이드 보여주기
  }

  showSlide(currentSlide); // 처음 슬라이드를 시작합니다.
  setInterval(nextSlide, 3000); // 3초마다 자동으로 슬라이드 변경
});
