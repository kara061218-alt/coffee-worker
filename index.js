export default {
  async fetch(request) {
    return new Response("Hello World from Coffee Place!", {
      headers: { "Content-Type": "text/plain" }
    });
  }
};
