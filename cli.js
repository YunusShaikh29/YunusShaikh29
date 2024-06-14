#!/usr/bin/env node

console.clear();
console.log('\n\x1b[36m', 'Hi Myself Yunus 🙋‍♂️', '\x1b[0m\n');

const greenStr = (str) => `\x1b[32m${str}\x1b[32m`;

const info = {
  status: 'Developer',
  gh: 'https://github.com/YunusShaikh29',
  desc: 'A full stack dev 💻',
  skills: {
    langs: ['.js', '.ts'],
    skills: ['git', 'docker', 'networking', 'oss'],
  },
};

console.log(greenStr(JSON.stringify(info, null, 2)));