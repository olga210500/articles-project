import axios from 'axios';

const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c749bcfd31aa43699c96442e10391a49';

export const fetchArticles = () => axios.get(url);
export const fetchUserArticles=()=> {return JSON.parse(localStorage.getItem('userArticles')||'[]')}

export const deleteArticle = (id) => {
    const userArticles=JSON.parse(localStorage.getItem('userArticles')||'[]');
    const newArticles = userArticles.filter((article) => article.id !== id);
    localStorage.setItem('userArticles',JSON.stringify(newArticles))
    return id;
};

export const createArticle = (newArticle) =>{
    const userArticles=localStorage.getItem('userArticles');
    const newArticles = userArticles?[newArticle,...JSON.parse(userArticles)]:[newArticle];
    localStorage.setItem('userArticles',JSON.stringify(newArticles))
    return newArticle;
} 
export const pinArticle=(articleToCheck)=>{
    const userArticles=JSON.parse(localStorage.getItem('userArticles')||'[]');
    const index = userArticles.findIndex(article => article.id === articleToCheck.id);
    if (index !== -1) {
      userArticles.splice(index, 1);
      userArticles.unshift(articleToCheck);

    }
    localStorage.setItem('userArticles',JSON.stringify(userArticles))
    return userArticles;
}
