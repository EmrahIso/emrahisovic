export {};

type GtagEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      idOrName: string,
      params?: GtagEventParams
    ) => void;
  }
}
