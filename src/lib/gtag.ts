export const GA_MEASUREMENT_ID = 'G-L35YB79102';

type GtagEventParams = Record<string, string | number | boolean | undefined>;

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = (action: string, params?: GtagEventParams) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  } else {
    console.warn('gtag not loaded yet');
  }
};
