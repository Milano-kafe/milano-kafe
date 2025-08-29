import { NextSeo } from 'next-seo';

export const SEO = {
  title: 'Milano Kafe - Your Favorite Cafe',
  description: 'Welcome to Milano Kafe, where we serve the best coffee and delicious meals.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://milano-kafe.com/',
    site_name: 'Milano Kafe',
    images: [
      {
        url: 'https://milano-kafe.com/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Milano Kafe',
      },
    ],
  },
  twitter: {
    handle: '@milano_kafe',
    site: '@milano_kafe',
    cardType: 'summary_large_image',
  },
};

export const setMetaTags = (title: string, description: string) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        images: [
          {
            url: 'https://milano-kafe.com/images/og-image.jpg',
            width: 800,
            height: 600,
            alt: title,
          },
        ],
      }}
    />
  );
};