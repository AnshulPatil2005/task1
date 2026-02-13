// Photo URLs for each section
const sectionPhotos = {
    '1': 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800',
    '2': 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800',
    '3': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    '4': 'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?w=800'
};

const modal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const sections = document.querySelectorAll('.section');

// Add click event to each section
sections.forEach(section => {
    section.addEventListener('click', function() {
        const sectionNumber = this.getAttribute('data-section');
        modalImage.src = sectionPhotos[sectionNumber];
        modal.classList.add('active');
    });
});

// Close modal when X is clicked
closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modal.classList.remove('active');
    }
});
