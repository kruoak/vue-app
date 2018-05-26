importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.f80b40fb7d29eb4cd17d.js",
    "revision": "40e6d47dc0a12cc62aca4e2f6b516319"
  },
  {
    "url": "/_nuxt/layouts_default.ed07231fc3debf34b171.js",
    "revision": "015addf40ba665793005010332ac25e0"
  },
  {
    "url": "/_nuxt/layouts_public.a75c60a346b105e18bda.js",
    "revision": "ca6163cb685eabd07b09764d9151b904"
  },
  {
    "url": "/_nuxt/manifest.9c7d66e24124aad61c44.js",
    "revision": "571f6fa04c639d0ccfa02538df45a4c1"
  },
  {
    "url": "/_nuxt/pages_about.e8d67282aa77460c76d3.js",
    "revision": "4dc5d956acbc8b725781118bf1ed78cb"
  },
  {
    "url": "/_nuxt/pages_about1.8ed3c5cc83e8dc26c21c.js",
    "revision": "f8c4bf1370d1e8e12a19aacd726e32d2"
  },
  {
    "url": "/_nuxt/pages_about3.c50afab009432b41fe87.js",
    "revision": "baafeb86cd3b7442a17ef193c5f7e439"
  },
  {
    "url": "/_nuxt/pages_addmem.2d41d85d28d6fb744e5d.js",
    "revision": "3147b6ad22fdf763f8b0cc133b8ceafa"
  },
  {
    "url": "/_nuxt/pages_chat.f44c349b483ce4d80ba0.js",
    "revision": "99418a96ab637f44008338dee378d090"
  },
  {
    "url": "/_nuxt/pages_index.8972aabc30d3156d8589.js",
    "revision": "cc16329151e2d96c859909d9ba0276a4"
  },
  {
    "url": "/_nuxt/pages_info.b0ada58b9a85fcc93535.js",
    "revision": "dbede722e6aedf3cb6d126fbdbdf8c63"
  },
  {
    "url": "/_nuxt/pages_register.d5c3270f91a67a7452ab.js",
    "revision": "9e9d6241374b06ffc9c2c24da1ae5748"
  },
  {
    "url": "/_nuxt/pages_student_edit.ac02373781dcd7fbe9d9.js",
    "revision": "6a5896d4e9fa221da94b7d9b8fd2a8e0"
  },
  {
    "url": "/_nuxt/pages_student_index.75fb02ac8e03751d9d6a.js",
    "revision": "9e458f6f52823da9ab3595910f7596cf"
  },
  {
    "url": "/_nuxt/pages_student-list.007dd8f2d97c7c8a508a.js",
    "revision": "b8731abe1f9df244addf5b8b99a9f666"
  },
  {
    "url": "/_nuxt/pages_student-list2.1.6b74363fd6591172df0a.js",
    "revision": "501037b9c261d8f1c0b60e379c4b5729"
  },
  {
    "url": "/_nuxt/pages_student-list2.3dc11afd2f3168cdb873.js",
    "revision": "5850d306a4a37ba58ebe616caf544ec9"
  },
  {
    "url": "/_nuxt/pages_student.7124322eda315ff23bce.js",
    "revision": "0dc05fe168d63499fed8ab2033ad4108"
  },
  {
    "url": "/_nuxt/pages_student2.1.93ebb72e05fe54dfb73f.js",
    "revision": "7896823a8b1ed17c83afb2c5fc690298"
  },
  {
    "url": "/_nuxt/pages_student2.8966370b6124a6cded9c.js",
    "revision": "dde7d0bd8dbec0a7558c3e37921e59ae"
  },
  {
    "url": "/_nuxt/vendor.74f2defa12adc698f562.js",
    "revision": "2ccf03799c4d57659cbe8c49813c3a36"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

