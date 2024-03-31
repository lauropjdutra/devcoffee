const reviewsContainer = document.querySelector(".reviews")
const prevButton = document.querySelector(".prev-btn")
const nextButton = document.querySelector(".next-btn")

let currentIndex = 0

nextButton.addEventListener("click", () => {
  const reviewWidth = reviewsContainer.children[0].offsetWidth + 20
  const containerWidth = reviewsContainer.offsetWidth
  const maxScroll = reviewsContainer.scrollWidth - containerWidth
  if (currentIndex < maxScroll) {
    currentIndex += reviewWidth
    reviewsContainer.scrollTo({ left: currentIndex, behavior: "smooth" })
  }
})

prevButton.addEventListener("click", () => {
  const reviewWidth = reviewsContainer.children[0].offsetWidth + 20
  if (currentIndex > 0) {
    currentIndex -= reviewWidth
    reviewsContainer.scrollTo({ left: currentIndex, behavior: "smooth" })
  }
})