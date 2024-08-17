import postcssPresetEnv from 'postcss-preset-env';
import tailwindcss from 'tailwindcss';

export default {
  plugins: [
    tailwindcss(),
    postcssPresetEnv({
      stage: 0, // Adjust settings as needed
    }),
  ],
};
