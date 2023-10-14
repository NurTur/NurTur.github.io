import Image from 'next/image';
import FrontendGif from 'public/gifs/Frontend.gif';

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

type INavTableProps = {
  imageSrc?: StaticImageData | null;
  imageAlt?: string;
  hasText: boolean;
  description: string;
  title: string;
  text: string;
  linkHref: string;
  linkText: string;
};

function secondPartOfNavTable({
  imageSrc = null,
  imageAlt = '',
  hasText = false,
  description = '',
  title = '',
  text = '',
  linkHref = '#',
  linkText = '',
}: INavTableProps) {
  return (
    <>
      {imageSrc && (
        <div className="sej-hbk-col">
          <Image src={imageSrc} alt={imageAlt} width="190" height="250" />
        </div>
      )}
      {hasText && (
        <div className="sej-hbk-col">
          <span className="sej-hbook-cat green d-block">{description} </span>
          <h3 className="sej-hbk-h">{title}</h3>
          <p className="sej-hbk-p">{text}</p>
          <a data-g-c={linkHref} className="btn" href={linkHref}>
            {linkText}
          </a>
        </div>
      )}
    </>
  );
}

export const navigationConfig = [
  {
    name: 'Frontend',
    hasChild: true,
    link: '#',
    firstColumn: [
      { name: 'HTML/CSS', link: '/tutorial/html_css' },
      { name: 'Javascript', link: '/tutorial/javascript' },
    ],
    secondColumn: [
      { name: 'Angular', link: '/tutorial/angular' },
      { name: 'React.js', link: '/tutorial/react' },
    ],
    secondPart: secondPartOfNavTable({
      imageSrc: FrontendGif,
      imageAlt: 'Frontend frameworks and libraries gif',
      hasText: true,
      description: 'Rundown',
      title: '2024 SEO Blueprint: Your Comprehensive 5-Guide Stack To SEO Strategy',
      text: `Access this carefully curated content to help you plan your 2024 SEO strategy, from tactical advice to key metrics
    you can benchmark against.`,
      linkHref:
        'https://www.searchenginejournal.com/rundown/2024-seo-blueprint-your-comprehensive-5-guide-stack-to-seo-strategy/?itm_source=website&amp;itm_medium=nav-bar-latest&amp;itm_campaign=nav-bar-latest',
      linkText: 'Access The Rundown',
    }),
  },
  {
    name: 'Backend',
    hasChild: true,
    link: '#',
    firstColumn: [
      { name: 'Python', link: '/tutorial/python' },
      { name: 'Java', link: '/tutorial/java' },
    ],
    secondColumn: [
      { name: 'C++', link: '/tutorial/c_plus' },
      { name: 'PHP', link: '/tutorial/php' },
    ],
    secondPart: secondPartOfNavTable({
      imageSrc: FrontendGif,
      imageAlt: 'Frontend frameworks and libraries gif',
      hasText: true,
      description: 'Rundown',
      title: '2024 SEO Blueprint: Your Comprehensive 5-Guide Stack To SEO Strategy',
      text: `Access this carefully curated content to help you plan your 2024 SEO strategy, from tactical advice to key metrics
    you can benchmark against.`,
      linkHref:
        'https://www.searchenginejournal.com/rundown/2024-seo-blueprint-your-comprehensive-5-guide-stack-to-seo-strategy/?itm_source=website&amp;itm_medium=nav-bar-latest&amp;itm_campaign=nav-bar-latest',
      linkText: 'Access The Rundown',
    }),
  },
  {
    name: 'Databases',
    hasChild: true,
    link: '#',
    firstColumn: [{ name: 'MySQL', link: '/tutorial/mysql' }],
    secondColumn: [{ name: 'MongoDB', link: '/tutorial/mongodb' }],
    secondPart: secondPartOfNavTable({
      imageSrc: FrontendGif,
      imageAlt: 'Frontend frameworks and libraries gif',
      hasText: true,
      description: 'Rundown',
      title: '2024 SEO Blueprint: Your Comprehensive 5-Guide Stack To SEO Strategy',
      text: `Access this carefully curated content to help you plan your 2024 SEO strategy, from tactical advice to key metrics
    you can benchmark against.`,
      linkHref:
        'https://www.searchenginejournal.com/rundown/2024-seo-blueprint-your-comprehensive-5-guide-stack-to-seo-strategy/?itm_source=website&amp;itm_medium=nav-bar-latest&amp;itm_campaign=nav-bar-latest',
      linkText: 'Access The Rundown',
    }),
  },
  {
    name: 'Mobile',
    hasChild: true,
    link: '#',
    firstColumn: [{ name: 'Swift', link: '/tutorial/swift' }],
    secondColumn: [{ name: 'Kotlin', link: '/tutorial/kotlin' }],
    secondPart: secondPartOfNavTable({
      imageSrc: FrontendGif,
      imageAlt: 'Frontend frameworks and libraries gif',
      hasText: true,
      description: 'Rundown',
      title: '2024 SEO Blueprint: Your Comprehensive 5-Guide Stack To SEO Strategy',
      text: `Access this carefully curated content to help you plan your 2024 SEO strategy, from tactical advice to key metrics
    you can benchmark against.`,
      linkHref:
        'https://www.searchenginejournal.com/rundown/2024-seo-blueprint-your-comprehensive-5-guide-stack-to-seo-strategy/?itm_source=website&amp;itm_medium=nav-bar-latest&amp;itm_campaign=nav-bar-latest',
      linkText: 'Access The Rundown',
    }),
  },
  {
    name: 'Exercises',
    hasChild: true,
    link: '#',
    firstColumn: [
      { name: 'HTML/CSS', link: '/exercise/html_css' },
      { name: 'Javascript', link: '/exercise/javascript' },
      { name: 'Angular', link: '/exercise/angular' },
      { name: 'React.js', link: '/exercise/react' },
      { name: 'Swift', link: '/exercise/swift' },
      { name: 'Kotlin', link: '/exercise/kotlin' },
    ],
    secondColumn: [
      { name: 'Python', link: '/exercise/python' },
      { name: 'Java', link: '/exercise/java' },
      { name: 'C++', link: '/exercise/c_plus' },
      { name: 'PHP', link: '/exercise/php' },
      { name: 'MySQL', link: '/exercise/mysql' },
      { name: 'MongoDB', link: '/exercise/mongodb' },
    ],
    secondPart: secondPartOfNavTable({
      imageSrc: FrontendGif,
      imageAlt: 'Frontend frameworks and libraries gif',
      hasText: true,
      description: 'Rundown',
      title: '2024 SEO Blueprint: Your Comprehensive 5-Guide Stack To SEO Strategy',
      text: `Access this carefully curated content to help you plan your 2024 SEO strategy, from tactical advice to key metrics
    you can benchmark against.`,
      linkHref:
        'https://www.searchenginejournal.com/rundown/2024-seo-blueprint-your-comprehensive-5-guide-stack-to-seo-strategy/?itm_source=website&amp;itm_medium=nav-bar-latest&amp;itm_campaign=nav-bar-latest',
      linkText: 'Access The Rundown',
    }),
  },
  {
    name: 'Quiz',
    hasChild: true,
    link: '#',
    firstColumn: [
      { name: 'HTML/CSS', link: '/quiz/html_css' },
      { name: 'Javascript', link: '/quiz/javascript' },
      { name: 'Angular', link: '/quiz/angular' },
      { name: 'React.js', link: '/quiz/react' },
      { name: 'Swift', link: '/quiz/swift' },
      { name: 'Kotlin', link: '/quiz/kotlin' },
    ],
    secondColumn: [
      { name: 'Python', link: '/quiz/python' },
      { name: 'Java', link: '/quiz/java' },
      { name: 'C++', link: '/quiz/c_plus' },
      { name: 'PHP', link: '/quiz/php' },
      { name: 'MySQL', link: '/quiz/mysql' },
      { name: 'MongoDB', link: '/quiz/mongodb' },
    ],
    secondPart: secondPartOfNavTable({
      imageSrc: FrontendGif,
      imageAlt: 'Frontend frameworks and libraries gif',
      hasText: true,
      description: 'Rundown',
      title: '2024 SEO Blueprint: Your Comprehensive 5-Guide Stack To SEO Strategy',
      text: `Access this carefully curated content to help you plan your 2024 SEO strategy, from tactical advice to key metrics
    you can benchmark against.`,
      linkHref:
        'https://www.searchenginejournal.com/rundown/2024-seo-blueprint-your-comprehensive-5-guide-stack-to-seo-strategy/?itm_source=website&amp;itm_medium=nav-bar-latest&amp;itm_campaign=nav-bar-latest',
      linkText: 'Access The Rundown',
    }),
  },
  {
    name: 'Interview',
    hasChild: true,
    link: '#',
    firstColumn: [
      { name: 'HTML/CSS', link: '/interview/html_css' },
      { name: 'Javascript', link: '/interview/javascript' },
      { name: 'Angular', link: '/interview/angular' },
      { name: 'React.js', link: '/interview/react' },
      { name: 'Swift', link: '/interview/swift' },
      { name: 'Kotlin', link: '/interview/kotlin' },
    ],
    secondColumn: [
      { name: 'Python', link: '/interview/python' },
      { name: 'Java', link: '/interview/java' },
      { name: 'C++', link: '/interview/c_plus' },
      { name: 'PHP', link: '/interview/php' },
      { name: 'MySQL', link: '/interview/mysql' },
      { name: 'MongoDB', link: '/interview/mongodb' },
    ],
    secondPart: secondPartOfNavTable({
      imageSrc: FrontendGif,
      imageAlt: 'Frontend frameworks and libraries gif',
      hasText: true,
      description: 'Rundown',
      title: '2024 SEO Blueprint: Your Comprehensive 5-Guide Stack To SEO Strategy',
      text: `Access this carefully curated content to help you plan your 2024 SEO strategy, from tactical advice to key metrics
    you can benchmark against.`,
      linkHref:
        'https://www.searchenginejournal.com/rundown/2024-seo-blueprint-your-comprehensive-5-guide-stack-to-seo-strategy/?itm_source=website&amp;itm_medium=nav-bar-latest&amp;itm_campaign=nav-bar-latest',
      linkText: 'Access The Rundown',
    }),
  },
];
