/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Where the Storybook header button points. Defaults to the local Storybook dev server. */
  readonly VITE_STORYBOOK_URL?: string;
}
