export default {
  async fetch(request) {
    return new Response("(haha)", {
      headers: { "Content-Type": "text/plain" }
    });
  }
};
