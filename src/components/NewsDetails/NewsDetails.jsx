import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './NewsDetails.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GetArticle from '../GetArticle/GetArticle';

const NewsDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  const fetchArticleDetails = async () => {
    try {
      if (!id) {
        console.error('Article ID is undefined.');
        return;
      }

      const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.error('Ett fel inträffade:', error);
    }
  };

  useEffect(() => {
    fetchArticleDetails();
  }, [id]);

  return (
    <>
      <Header />

      <div className='container'>
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.published}</p>
          <p>{article.category}</p>
          <img className='articleImg' src={article.imageUrl} alt={article.title} />
          <p>{article.content}</p>
        </div>
      )}
      </div>
        <GetArticle/>
        <Footer />
    </>
  );
};

export default NewsDetails;
