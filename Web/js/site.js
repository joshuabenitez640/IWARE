document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the animated class to trigger CSS animations
        entry.target.classList.add("animated")
        console.log("[v0] Animated element:", entry.target.className)
      }
    })
  }, observerOptions)

  // Observe all elements with animation classes
  document.querySelectorAll(".fade-in, .slide-left, .slide-right").forEach((el) => {
    observer.observe(el)
  })
})

// Form Submit Handler
function handleFormSubmit(event) {
  event.preventDefault()

  const name = document.getElementById("name").value
  const location = document.getElementById("location").value
  const type = document.getElementById("type").value
  const description = document.getElementById("description").value

  console.log("Form Submitted:", {
    name,
    location,
    type,
    description,
  })

  // Show success message
  alert("Thank you for your report! Your submission has been received. We will review it and take appropriate action.")

  // Reset form
  event.target.reset()
}
