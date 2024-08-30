function toggleMenu() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
}

let currentImageIndex = 0;
const beforeImages = [
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
];
const afterImages = [
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
];

function updateBeforeAfterImages() {
  const beforeImage = document.querySelector('.before-image');
  const afterImage = document.querySelector('.after-image');
  beforeImage.src = beforeImages[currentImageIndex];
  afterImage.src = afterImages[currentImageIndex];
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + beforeImages.length) % beforeImages.length;
  updateBeforeAfterImages();
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % beforeImages.length;
  updateBeforeAfterImages();
}

let currentTestimonialIndex = 0;
const testimonials = [
  { text: '"Texas Valley Landscaping transformed my backyard into an oasis. Highly recommend their services!"', author: '- John Doe' },
  { text: '"Professional, timely, and affordable. Our front yard looks amazing thanks to Texas Valley Landscaping!"', author: '- Jane Smith' },
  { text: '"The best landscaping company in Houston. Excellent customer service and quality work!"', author: '- Alex Johnson' },
  { text: '"Great experience from start to finish. Texas Valley Landscaping exceeded our expectations!"', author: '- Sarah Lee' },
];

function updateTestimonials() {
  const testimonialContainer = document.getElementById('testimonial-container');
  testimonialContainer.innerHTML = '';
  for (let i = 0; i < 4; i++) {
      const testimonialIndex = (currentTestimonialIndex + i) % testimonials.length;
      const testimonial = testimonials[testimonialIndex];
      const testimonialBox = document.createElement('div');
      testimonialBox.className = 'testimonial-box';
      testimonialBox.innerHTML = `<p>${testimonial.text}</p><p>${testimonial.author}</p>`;
      testimonialContainer.appendChild(testimonialBox);
  }
}

function rotateTestimonials() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  updateTestimonials();
}

setInterval(rotateTestimonials, 4000);

function nextQuoteStep(step) {
  const currentStep = document.querySelector('.quote-container:not([style*="display: none"])');
  currentStep.style.display = 'none';
  document.getElementById(`quote-step-${step}`).style.display = 'block';
}

function submitQuote() {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const preferPhone = document.getElementById('prefer-phone').checked;
  const preferEmail = document.getElementById('prefer-email').checked;
  const lawnCare = document.getElementById('lawn-care').checked;
  const trees = document.getElementById('trees').checked;
  
  const landscapingDesign = document.getElementById('landscaping-design').checked;
  const seasonalCleanup = document.getElementById('seasonal-cleanup').checked;
  
  alert(`Quote submitted!
Name: ${name}
Address: ${address}
Phone: ${phone}
Email: ${email}
Preferred Communication: ${preferPhone ? 'Phone' : preferEmail ? 'Email' : 'None'}
Services: ${lawnCare ? 'Lawn Care' : ''} ${trees ? 'Trees' : ''} ${landscapingDesign ? 'Landscaping Design' : ''} ${seasonalCleanup ? 'Seasonal Clean-Up' : ''}`);
}

document.addEventListener('DOMContentLoaded', () => {
  updateBeforeAfterImages();
  updateTestimonials();
});
