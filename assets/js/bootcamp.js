document.getElementById("news").addEventListener("click", show_news);
document.getElementById("home").addEventListener("click", show_home);
document.getElementById("courses").addEventListener("click", show_courses);
news = document.getElementById("container-news");
home = document.getElementById("container-home");
courses = document.getElementById("container-courses")
function show_news(){
    home.style.display = "none";
    news.style.display = "flex";
    courses.style.display = "none";
    games.style.display = "none";
}
function show_home(){
    home.style.display = "flex";
    news.style.display = "none";
    courses.style.display = "none";
    games.style.display = "none";
}
function show_courses(){
    home.style.display = "none";
    news.style.display = "none";
    courses.style.display = "flex";
}