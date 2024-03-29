// Copyright 2023 Pejman Ghorbanzade

import Image from 'next/image';
import Markdown from 'markdown-to-jsx';

import profilePicture from '@/public/images/pejman.jpg';
import DarkModeButton from '@/src/components/DarkModeButton';
import NavBar from '@/src/components/NavBar';
import SocialLinks from '@/src/components/SocialLinks';

export default async function Page() {
  const aboutPage = await fetch(
    'https://raw.githubusercontent.com/ghorbanzade/ghorbanzade/main/Readme.md'
  );
  const fileContent = await aboutPage.text()
  return (
    <main className="flex h-screen md:items-center">
      <div className="mx-auto max-w-screen-lg">
        <div className='py-6 justify-center flex'>
          <NavBar />
        </div>
        <div className="md:grid md:grid-cols-4 md:gap-3">
          <div className="rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-bl dark:from-black dark:to-slate-900 md:col-span-1 md:border">
            <div className="space-y-4 md:flex md:h-full md:flex-wrap md:content-between">
              <div className="hidden py-2 text-center md:block">
                <Image
                  className="rounded-lg"
                  src={profilePicture}
                  alt="Pejman Ghorbanzade"
                />
              </div>
              <div className="w-full text-center">
                <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-200">Pejman Ghorbanzade</h1>
                <h2 className="text-slate-600 dark:text-slate-300">Software Engineer</h2>
              </div>
              <SocialLinks />
            </div>
          </div>
          <div className="relative rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 md:col-span-3 md:border">
            <div className="absolute right-8 top-8">
              <DarkModeButton />
            </div>
            <Markdown className="wsl-mark prose prose-base prose-slate min-w-full dark:prose-invert">
              {fileContent}
            </Markdown>
          </div>
        </div>
      </div>
    </main>
  );
}
