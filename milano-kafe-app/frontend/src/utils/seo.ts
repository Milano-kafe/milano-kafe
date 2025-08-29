import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const useSEO = (title, description, keywords) => {
    useEffect(() => {
        document.title = title;
        const metaDescription = document.querySelector("meta[name='description']");
        const metaKeywords = document.querySelector("meta[name='keywords']");

        if (metaDescription) {
            metaDescription.content = description;
        } else {
            const newMetaDescription = document.createElement('meta');
            newMetaDescription.name = 'description';
            newMetaDescription.content = description;
            document.head.appendChild(newMetaDescription);
        }

        if (metaKeywords) {
            metaKeywords.content = keywords;
        } else {
            const newMetaKeywords = document.createElement('meta');
            newMetaKeywords.name = 'keywords';
            newMetaKeywords.content = keywords;
            document.head.appendChild(newMetaKeywords);
        }
    }, [title, description, keywords]);
};

const SEO = ({ title, description, keywords }) => {
    useSEO(title, description, keywords);

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    );
};

export default SEO;