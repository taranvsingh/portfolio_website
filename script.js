function toggleContent(element) {
    const details = (element.parentNode).querySelector('.work__details');
    const img = details.querySelector('.work__image');
    const preview_text = (element.parentNode).querySelector('.preview__text');

    preview_text.style.display = preview_text.style.display === 'none' ? 'block' : 'none';
    // Toggle visibility
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
    
    // Toggle image if it exists
    if (img) {
        img.style.display = img.style.display === 'none' ? 'block' : 'none';
    }
}