import "https://cdn.jsdelivr.net/gh/MarketingPipeline/Code-Runner-Web-Component/dist/code-runner-wc.min.js";

import useCustomElement from "https://cdn.skypack.dev/use-custom-element@1.0.5";

const CodeRunnerComponent = props => {
  const [customElementProps, ref] = useCustomElement(props);

  return <code-runner {...customElementProps} ref={ref} />;
};
