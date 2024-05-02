function submitReview(event) {
    event.preventDefault();
    
    // Отображение сообщения об отправке отзыва
    document.getElementById("confirmation-message").textContent = "Ваш отзыв отправлен";
    
    // Очистка формы
    clearReviewForm();
}

function clearReviewForm() {
    // Очистка полей формы
    document.getElementById("review-form").reset();
    
    // Очистка сообщения подтверждения
    document.getElementById("confirmation-message").textContent = "";
}