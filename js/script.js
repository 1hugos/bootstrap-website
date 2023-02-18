document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");

	function AddShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	window.addEventListener("scroll", AddShadow);

    const navList = document.querySelector(".navbar-collapse")
    const allNavItems = document.querySelectorAll(".nav-link");

    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
});
