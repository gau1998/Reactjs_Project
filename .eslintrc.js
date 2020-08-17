module.exports = {
  extends: ['airbnb'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'template-curly-spacing': ['off'],
    'react/forbid-prop-types': 'off',
    'react/static-property-placement': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'array-callback-return': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'global-require': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-closing-tag-location': 'off',
    'no-plusplus':'off',
    'jsx-a11y/control-has-associated-label':'off',
    'no-underscore-dangle':'off',
    'react/no-array-index-key': 'off',
    'no-tabs':'off',
    "no-control-regex":'off',
    'jsx-a11y/no-noninteractive-element-interactions':'off',
    'jsx-a11y/label-has-associated-control':'off',
    'no-else-return':'off', 
     'max-len':'off',
     'no-nested-ternary':'off',
     'radix':'off',
     'prefer-destructuring':'off'
  },
  env: {
    browser: true,
    node: true,
  },
};

