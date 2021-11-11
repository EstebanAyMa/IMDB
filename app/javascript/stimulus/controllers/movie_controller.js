import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    url: String
  }

  connect() {
  }

  searchByTitle(e) {
    fetch(`/posts.json?type=title&query=${e.target.value}`)
      .then(response => response.json())
      .then(data => {
        document.querySelectorAll(".movie-card").forEach(e => e.style.display = 'none')
        data.forEach(i => {
          document.querySelector(`.movie-card[data-movie-id='${i}']`).style.display = 'block'
        })
      })
  }

  searchByGenre(e) {
    fetch(`/posts.json?type=genre&query=${e.target.innerText}`)
      .then(response => response.json())
      .then(data => {
        document.querySelectorAll(".movie-card").forEach(e => e.style.display = 'none')
        data.forEach(i => {
          document.querySelector(`.movie-card[data-movie-id='${i}']`).style.display = 'block'
        })
      })
  }

  displayDetails(e) {
    e.currentTarget.querySelector('.movie-card-details').classList.add('details')
  }

  hideDetails(e) {
    e.currentTarget.querySelector('.movie-card-details').classList.remove('details')
  }
}
