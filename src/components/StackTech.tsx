import React from 'react';

export default function StackTech() {
  return (
    <div>
      <p className={'text-center mt-8 text-3xl font-bold text-gray-400'}>
        🚀 Stack of Technologies
      </p>

      <p className={'flex flex-1 justify-center mt-8 gap-5'}>
        <a href="https://skillicons.dev/">
          <img src="https://skillicons.dev/icons?i=bash,lua,neovim,git,gitlab,github,githubactions,py,django,redis,postgres,nginx,docker,kubernetes,html,css,javascript,typescript,react,tailwind,aws,gcp&perline=11&theme=dark" />
        </a>
      </p>
      <p className={'flex flex-1 justify-center mt-8 gap-5'}>
        <a href="https://github.com/shaggy-axel/?tab=repositories">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=shaggy-axel&layout=compact&hide_border=true&hide_title=true&count_private=true&include_all_commits=true&show_icons=true&bg_color=00000000&text_color=c3c6ce&icon_color=4e64f7&hide=html,css" />
        </a>
      </p>
    </div>
  );
}
