export const GA_MEASUREMENT_ID = 'G-L35YB79102';

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = (action: string, params?: Record<string, any>) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  } else {
    console.warn('gtag not loaded yet');
  }
};
