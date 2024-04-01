/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_API: string;
  readonly REACT_APP_BASE_DOMAIN: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace Intl {
  type Key =
    | "calendar"
    | "collation"
    | "currency"
    | "numberingSystem"
    | "timeZone"
    | "unit";

  function supportedValuesOf(input: Key): string[];
}
