import { getMDXComponent } from 'mdx-bundler/client';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import { useEffect, useMemo, useState } from 'react';

import MDXComponents from '@/components/content/MDXComponents';
import type { HeadingScrollSpy } from '@/components/content/TableOfContents';
import TableOfContents from '@/components/content/TableOfContents';
import Layout from '@/components/layout/Layout';
import Meta from '@/components/layout/Meta';
import useScrollSpy from '@/hooks/useScrollspy';
import { getFileBySlug, getFileSlugArray } from '@/lib/mdx.server';
import { basePageMeta } from '@/utils/metaConfigs';

interface Params extends ParsedUrlQuery {
  slug: string[];
}

export type BlogFrontmatter = {
  wordCount: number;
  slug: string;
  englishOnly?: boolean;
  title: string;
  description: string;
  banner?: string;
  publishedAt: string;
  lastUpdated?: string;
  tags: string;
  repost?: string;
};

export type BlogType = {
  code: string;
  frontmatter: BlogFrontmatter;
};

function SingleTutorialPage({ code, frontmatter }: BlogType) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  const activeSection = useScrollSpy();

  const [toc, setToc] = useState<HeadingScrollSpy>();

  useEffect(() => {
    function calculateToc() {
      const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');
      const headingArr: HeadingScrollSpy = [];
      headings.forEach(heading => {
        const { id } = heading;
        const level = +heading.tagName.replace('H', '');
        const text = `${heading.textContent}`;
        headingArr.push({ id, level, text });
      });

      setToc(headingArr);
    }

    calculateToc();
  }, [frontmatter.slug]);
  const minLevel = toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  return (
    <Layout meta={<Meta {...basePageMeta} />}>
      <main>
        <section className="layout">
          <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
            <article className="mdx prose mx-auto mt-4 w-full transition-colors dark:prose-invert">
              <Component
                components={
                  {
                    ...MDXComponents,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  } as any
                }
              />
            </article>

            <aside className="py-4">
              <div className="sticky top-36">
                <TableOfContents toc={toc} minLevel={minLevel} activeSection={activeSection} />
              </div>
            </aside>
          </section>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tutorials = await getFileSlugArray('tutorial');
  return {
    paths: tutorials.map(slug => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;
  const tutorial = await getFileBySlug('tutorial', slug.join('/'));
  // const recommendations = await getRecommendations(slug.join('/'));

  return {
    props: { ...tutorial },
  };
};

export default SingleTutorialPage;
