import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('UA-88090655-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    <script>
      gtag('config', 'AW-967873107');
    </script>
  }