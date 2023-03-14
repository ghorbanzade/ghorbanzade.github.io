// Copyright 2023 Pejman Ghorbanzade

import Image from 'next/image';
import profilePicture from '@/public/images/pejman.jpg';
import SocialLinks from '@/components/social';

import Markdown from 'markdown-to-jsx';
import Head from 'next/head';

type PageContent = Record<'name' | 'title' | 'about', string>;

export default function Page(props: PageContent) {
  return (
    <div className="flex h-screen md:items-center">
      <Head>
        <title>Pejman Ghorbanzade</title>
        <meta
          name="description"
          content="Personal Website of Pejman Ghorbanzade"
        />
      </Head>
      <div className="mx-auto max-w-screen-lg md:grid md:grid-cols-4 md:gap-3">
        <div className="rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-bl dark:from-black dark:to-slate-900 md:col-span-1 md:border">
          <div className="space-y-4 md:flex md:h-full md:flex-wrap md:content-between">
            <div className="hidden py-2 text-center md:block">
              <Image
                className="rounded-lg"
                src={profilePicture}
                alt={props.name}
              />
            </div>
            <div className="w-full text-center">
              <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-200">
                {props.name}
              </h1>
              <h2 className="text-slate-600 dark:text-slate-300">
                {props.title}
              </h2>
            </div>
            <SocialLinks />
          </div>
        </div>
        <div className="rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 md:col-span-3 md:border">
          <Markdown className="wsl-mark prose prose-base prose-slate min-w-full dark:prose-invert">
            {props.about}
          </Markdown>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(): Promise<{ props: PageContent }> {
  const fileContents = await fetch(
    'https://raw.githubusercontent.com/ghorbanzade/ghorbanzade/main/Readme.md'
  );
  return {
    props: {
      name: 'Pejman Ghorbanzade',
      title: 'Software Engineer',
      about: await fileContents.text()
    }
  };
}
