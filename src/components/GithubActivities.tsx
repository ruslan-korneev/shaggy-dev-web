import React from 'react';

export default function GithubActivities() {
  return (
    <div>
      <p className={'text-center mt-8 text-3xl font-bold text-gray-400'}>⚡ GitHub Activities</p>

      <p className={'flex justify-center mt-8'}>
        <a href="https://skillicons.dev">
          <img src="https://github-readme-stats.vercel.app/api?username=shaggy-axel&layout=compact&hide_border=true&hide_title=true&count_private=true&include_all_commits=true&show_icons=true&bg_color=00000000&text_color=c3c6ce&icon_color=4e64f7" />
        </a>
      </p>
    </div>
  );
}
