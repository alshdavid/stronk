/// <reference lib="webworker" />

globalThis.addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});
