const authorsEl = document.querySelectorAll('.author');
const container = document.querySelector('.testimonials-container');
const textEl = document.querySelector('.text');

const testimonials = [{
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Sit scelerisque aliquam vel sapien. Pharetra, tortor<br>ultrices nunc integer enim. Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.',
	color: 'gray'
},{
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Sit scelerisque aliquam vel sapien. Pharetra, tortor<br>ultrices nunc integer enim. Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.',
	color: '#FF676D'
},{
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Sit scelerisque aliquam vel sapien. Pharetra, tortor<br>ultrices nunc integer enim. Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.',
	color: '#00C9A7'
},{
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Sit scelerisque aliquam vel sapien. Pharetra, tortor<br>ultrices nunc integer enim. Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.',
	color: '#F16529'
},{
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Sit scelerisque aliquam vel sapien. Pharetra, tortor<br>ultrices nunc integer enim. Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.',
	color: '#021B79'
}];

addTestimonial(0);

authorsEl.forEach((author, idx) => {
	author.addEventListener('click', (e) => {
		addTestimonial(idx);
		author.classList.add('selected');
	})
});

function addTestimonial(idx) {
	const testimonial = testimonials[idx];
	
	textEl.innerHTML = testimonial.text;
	container.style.background = testimonial.color;
	container.style.boxShadow = '0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.19)';
	
	authorsEl.forEach(author => {
		author.classList.remove('selected');
	});
}

