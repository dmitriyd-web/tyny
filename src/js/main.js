document.addEventListener('DOMContentLoaded', function(){
	
	if ( window.innerWidth >= 992 ) {
		//	show date
	
		setTimeout(() => {
			document.querySelector(".main-date").classList.add("show")
		}, 1000 )

		//	show info
		
		setTimeout(() => {
			document.querySelector(".main-info").classList.add("show")
		}, 2000 )

		//	show title letters
		
		let showLetter = 1

		setInterval(() => {
			if ( showLetter < 17 ) {
				document.querySelector(".letter-" + showLetter).classList.add("show")
				showLetter++
			}
		}, 200 )
	}

	//	scroll header

	let scrollpos = window.scrollY

	const header = document.querySelector("header")
	const scrollChange = 1

	const add_class_on_scroll = () => header.classList.add("scroll")
	const remove_class_on_scroll = () => header.classList.remove("scroll")

	window.addEventListener('scroll', function() { 
		scrollpos = window.scrollY;

		if (scrollpos >= scrollChange + 100) { add_class_on_scroll() }
		else { remove_class_on_scroll() }
	
	})

	//  mobile menu

	let menuToggle = document.querySelector(".menu-toggle")
	let headerNavigation = document.querySelector(".header-navigation")

	menuToggle.addEventListener( "click" , () => {
		menuToggle.classList.toggle("open")
		headerNavigation.classList.toggle("open")
	})
	
	//  Initialize Swiper
	
	const swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	},
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	  }
	});

	//	submit form

	const form = document.querySelector(".contacts-form")

	form.addEventListener('submit', (e) => {
		e.preventDefault()
		
		if ( !(form.querySelector(".form-name").value) ) {
			form.querySelector(".form-name").classList.add("input-error")
			alert("Введите имя")
			setTimeout(() => {
				form.querySelector(".form-name").classList.remove("input-error")
			}, 2000 )
		}	else if ( !(form.querySelector(".form-email").value) ) {
			form.querySelector(".form-email").classList.add("input-error")
			alert("Введите Email")
			setTimeout(() => {
				form.querySelector(".form-email").classList.remove("input-error")
			}, 2000 )
		}	else if ( !(form.querySelector(".form-question").value) ) {
			form.querySelector(".form-question").classList.add("input-error")
			alert("Введите сообщение")
			setTimeout(() => {
				form.querySelector(".form-question").classList.remove("input-error")
			}, 2000 )
		}	else {
			console.log('Имя:', form.querySelector(".form-name").value, 'E-mail:', form.querySelector(".form-email").value, 'Сообщение:', form.querySelector(".form-question").value)
		}

	})
})

