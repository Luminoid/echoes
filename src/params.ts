import { defineParams } from '@sveltejs/kit/params';

export const params = defineParams({
  lang: (param) => (param === 'zh' ? param : undefined),
});
