const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.play();
			} else {
				entry.target.pause();
			}
		});
	},
	{ threshold: 0.5 }
);

document.addEventListener("DOMContentLoaded", () => {
	const videos = document.querySelectorAll(".lazy-video");
	videos.forEach((video) => observer.observe(video));

	// Add scroll functionality
	const scrollIndicator = document.querySelector(".scroll-indicator");

	scrollIndicator.addEventListener("click", () => {
		document.getElementById("memes-section").scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});

	// Modal popup functionality
	const giftPopup = document.querySelector(".gift-popup img");
	const modal = document.getElementById("gift-modal");
	const closeButton = document.querySelector(".close-button");
	const modalVideo = modal.querySelector("video");
	const giftMessage = document.getElementById("giftMessage");

	giftPopup.addEventListener("click", () => {
		modal.style.display = "block";
		modalVideo.currentTime = 0;
		modalVideo.play();
		giftMessage.style.display = "none";
	});

	// Add timeupdate event listener to check video progress
	modalVideo.addEventListener("timeupdate", () => {
		if (modalVideo.currentTime >= modalVideo.duration / 2.6) {
			giftMessage.style.display = "block";
		}
	});

	closeButton.addEventListener("click", () => {
		modal.style.display = "none";
		modalVideo.pause();
		modalVideo.currentTime = 0; // Reset video position
	});

	window.addEventListener("click", (event) => {
		if (event.target === modal) {
			modal.style.display = "none";
			modalVideo.pause();
			modalVideo.currentTime = 0; // Reset video position
		}
	});
});
