export const ReactBoard = props => {
  const onloaded = html => {
    let script = window.document.createElement('script');
    script.innerHTML = html
    window.document.head.appendChild(script);
  }
  ((w, d, id) => {
    let s = window.document.createElement('script');
    s.src = 'https://react-board-sdk.s3-ap-northeast-1.amazonaws.com/main.js';
    window.document.head.appendChild(s);
    s.onload = () => {
      const html = `
        rbdSdk.init({
          projectToken: '${id}'
        });
      `
      onloaded(html)
    }
  })(window, document, props.projectToken);
  return false;
};


export default ReactBoard;