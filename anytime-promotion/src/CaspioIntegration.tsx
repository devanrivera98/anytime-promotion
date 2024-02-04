import { useEffect } from "react";

const CaspioIntegration: React.FC = () => {
  useEffect(() => {
    const script: HTMLScriptElement = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://c1hbu366.caspio.com/dp/6abdb000eeb8ef752d55480bb7c3/emb';

    const caspioContainer: HTMLElement | null =
      document.getElementById('caspioContainer');

    if (caspioContainer) {
      caspioContainer.appendChild(script);
    }

    return () => {
      if (caspioContainer && script.parentNode === caspioContainer) {
        caspioContainer.removeChild(script);
      }
    };
  }, []);

  return <div id="caspioContainer"></div>;
};

export default CaspioIntegration;
