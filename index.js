export default {
  async fetch(request) {
    return new Response("(Haha)
                    ", {
      headers: { "Content-Type": "text/plain" }
    });
  }
};
