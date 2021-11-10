import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    url: String
  }

  connect() {
  }

  movie(e) {
    fetch(`/posts.json?query=${e.target.value}`)
      .then(response => response.json())
      .then(data => {
        document.querySelectorAll(".movie-card").forEach(e => e.style.display = 'none')
        data.forEach(i => {
          document.querySelector(`.movie-card[data-movie-id='${i}']`).style.display = 'block'
        })
      })
  }
}
