import type { Preview } from '@storybook/nextjs-vite'
import React from 'react'

// Import our design system CSS
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    docs: {
      toc: true,
    },
  },

  // Configure dark mode support
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      document.documentElement.className = theme === 'dark' ? 'dark' : '';

      return React.createElement('div', { className: theme }, React.createElement(Story));
    },
  ],
};

export default preview;