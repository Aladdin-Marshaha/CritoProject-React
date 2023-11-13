// import React, { useState, useEffect } from 'react';
// import './OurNewsAndArticles.css';

// const OurNewsAndArticles = () => {




//     const [articles, setArticles] = useState([]);

//     const NewsArticle = async () => {
//         try {
//             const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
//             const data = await response.json();
//             console.log(data)
//             setArticles(data); // Spara datan i statevariabeln
//         } catch (error) {
//             console.error('Ett fel inträffade:', error);
//             // Om det uppstår ett fel kan du hantera det här
//         }
//     };

//     useEffect(() => {
//         NewsArticle();
//     }, []); // Anropa NewsArticle vid mount

//     return (
//         <>
//             <section className="our-news-and-articles">
//                 <div className="container">
//                     <h2>Our News & Articles</h2>
//                     <div className="parent">
//                         {articles.map((article, index) => (
//                             <div key={index} className="child">
//                                 <img src={article.imageUrl} alt={article.title} />
//                                 <p>{article.category}</p>
//                                 <h3>{article.title}</h3>
//                                 <p>{article.description}</p>
//                                 <p> {article.published} </p>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="center-content">
//                         <img src="News-fotos/page-number.png" alt="" />
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default OurNewsAndArticles;


import React, { useState, useEffect } from 'react';
import './OurNewsAndArticles.css';
import { Link } from 'react-router-dom';

const OurNewsAndArticles = () => {
    const [articles, setArticles] = useState([]);

    const NewsArticle = async () => {
        try {
            const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
            const data = await response.json();

            console.log(data)
            setArticles(data);
        } catch (error) {
            console.error('Ett fel inträffade:', error);
        }
    };

    useEffect(() => {
        NewsArticle();
    }, []);

    return (
        <>
            <div className='OurNewsAndArticles' >
                <div className="container">
                    <h2>Our News & Articles</h2>
                    <div className="parent">
                        {articles.map((article, index) => (
                            <Link to= {`/news/${article.id}`} key={index} className="child">
                                <div className="image-container">
                                    <img src={article.imageUrl} alt={article.title} />
                                    <div className="date-box">
                                        <p>{formatDate(article.published)}</p>
                                    </div>
                                </div>
                                <p>{article.category}</p>
                                <h3>{article.title}</h3>
                                <p>{article.content}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="center-content">
                        <img src="News-fotos/page-number.png" alt="" />
                    </div>
                </div>
            </div>

        </>
    );
};

// Funktion för att formatera datumet till "DD Mon" format (t.ex. "25 Mar")
const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};

export default OurNewsAndArticles;
