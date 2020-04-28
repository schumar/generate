module.exports = {
  title: "DevTut",
  description: "Example based programming tutorials for solids develops",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/mstile-150x150.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
  ],
  themeConfig: {
    repo: "devtut/generate",
    editLinks: true,
    docsDir: "docs",
    algolia: {
      apiKey: "028db77cb984cc13fd130716ea60a98c",
      indexName: "devtut",
    },
    smoothScroll: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "Topics",
        ariaLabel: "Topics",
        items: [
          {
            text: "Programming Language",
            items: [
              {
                text: "Python",
                link: "/python/",
              },
              {
                text: "PHP",
                link: "/php/",
              },
              {
                text: "JavsScript",
                link: "/javascript/",
              },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/python/": [
        {
          title: "Python",
          collapsable: false,
          // sidebarDepth: 2,
          children: [
            ["", "Disclaimer"],
            "getting-started-with-python-language",
            "python-data-types",
            "indentation",
            "comments-and-documentation",
            "date-and-time",
            "enum",
            "set",
            "simple-mathematical-operators",
            "bitwise-operators",
            "boolean-operators",
            "operator-precedence",
            "variable-scope-and-binding",
            "conditionals",
            "comparisons",
            "loops",
            "arrays",
            "multidimensional-arrays",
            "dictionary",
            "list",
            "list-comprehensions",
            "list-slicing-selecting-parts-of-lists",
            "groupby",
            "linked-lists",
            "linked-list-node",
            "filter",
            "heapq",
            "tuple",
            "basic-input-and-output",
            "files-folders-i-o",
            "os-path",
            "iterables-and-iterators",
            "functions",
            "defining-functions-with-list-arguments",
            "functional-programming-in-python",
            "partial-functions",
            "decorators",
            "classes",
            "metaclasses",
            "string-formatting",
            "string-methods",
            "using-loops-within-functions",
            "importing-modules",
            "difference-between-module-and-package",
            "math-module",
            "complex-math",
            "collections-module",
            "operator-module",
            "json-module",
            "sqlite3-module",
            "the-os-module",
            "the-locale-module",
            "itertools-module",
            "asyncio-module",
            "random-module",
            "functools-module",
            "the-dis-module",
            "the-base64-module",
            "queue-module",
            "deque-module",
            "webbrowser-module",
            "tkinter",
            "pyautogui-module",
            "indexing-and-slicing",
            "plotting-with-matplotlib",
            "graph-tool",
            "generators",
            "reduce",
            "map-function",
            "exponentiation",
            "searching",
            "sorting-minimum-and-maximum",
            "counting",
            "the-print-function",
            "regular-expressions-regex",
            "copying-data",
            "context-managers-with-statement",
            "the-name-special-variable",
            "checking-path-existence-and-permissions",
            "creating-python-packages",
            "usage-of-pip-module-pypi-package-manager",
            "pip-pypi-package-manager",
            "parsing-command-line-arguments",
            "subprocess-library",
            "setup-py",
            "recursion",
            "type-hints",
            "exceptions",
            "raise-custom-errors-exceptions",
            "commonwealth-exceptions",
            "urllib",
            "web-scraping-with-python",
            "html-parsing",
            "manipulating-xml",
            "python-requests-post",
            "distribution",
            "property-objects",
            "overloading",
            "polymorphism",
            "method-overriding",
            "user-defined-methods",
            "string-representations-of-class-instances-str-and-repr-methods",
            "debugging",
            "reading-and-writing-csv",
            "writing-to-csv-from-string-or-list",
            "dynamic-code-execution-with-exec-and-eval",
            "pyinstaller-distributing-python-code",
            "data-visualization-with-python",
            "the-interpreter-command-line-console",
            "args-and-kwargs",
            "garbage-collection",
            "pickle-data-serialisation",
            "binary-data",
            "idioms",
            "data-serialization",
            "multiprocessing",
            "multithreading",
            "processes-and-threads",
            "python-concurrency",
            "parallel-computation",
            "sockets",
            "websockets",
            "sockets-and-message-encryption-decryption-between-client-and-server",
            "python-networking",
            "python-http-server",
            "flask",
            "introduction-to-rabbitmq-using-amqpstorm",
            "descriptor",
            "tempfile-namedtemporaryfile",
            "input-subset-and-output-external-data-files-using-pandas",
            "unzipping-files",
            "working-with-zip-archives",
            "getting-start-with-gzip",
            "stack",
            "working-around-the-global-interpreter-lock-gil",
            "deployment",
            "logging",
            "web-server-gateway-interface-wsgi",
            "python-server-sent-events",
            "alternatives-to-switch-statement-from-other-languages",
            "list-destructuring-aka-packing-and-unpacking",
            "accessing-python-source-code-and-bytecode",
            "mixins",
            "attribute-access",
            "arcpy",
            "abstract-base-classes-abc",
            "plugin-and-extension-classes",
            "immutable-datatypes-int-float-str-tuple-and-frozensets",
            "incompatibilities-moving-from-python-2-to-python-3",
            "2to3-tool",
            "non-official-python-implementations",
            "abstract-syntax-tree",
            "unicode-and-bytes",
            "python-serial-communication-pyserial",
            "neo4j-and-cypher-using-py2neo",
            "basic-curses-with-python",
            "templates-in-python",
            "pillow",
            "the-pass-statement",
            "cli-subcommands-with-precise-help-output",
            "database-access",
            "connecting-python-to-sql-server",
            "postgresql",
            "python-and-excel",
            "turtle-graphics",
            "python-persistence",
            "design-patterns",
            "hashlib",
            "creating-a-windows-service-using-python",
            "mutable-vs-immutable-and-hashable-in-python",
            "configparser",
            "optical-character-recognition",
            "virtual-environments",
            "python-virtual-environment-virtualenv",
            "virtual-environment-with-virtualenvwrapper",
            "create-virtual-environment-with-virtualenvwrapper-in-windows",
            "sys",
            "chempy-python-package",
            "pygame",
            "pyglet",
            "audio",
            "pyaudio",
            "shelve",
            "iot-programming-with-python-and-raspberry-pi",
            "kivy-cross-platform-python-framework-for-nui-development",
            "pandas-transform-preform-operations-on-groups-and-concatenate-the-results",
            "similarities-in-syntax-differences-in-meaning-python-vs-javascript",
            "call-python-from-c",
            "ctypes",
            "writing-extensions",
            "python-lex-yacc",
            "unit-testing",
            "py-test",
            "profiling",
            "python-speed-of-program",
            "performance-optimization",
            "security-and-cryptography",
            "secure-shell-connection-in-python",
            "python-anti-patterns",
            "common-pitfalls",
            "hidden-features",
            "date-formatting",
            "ijson",
            "django",
            "code-blocks-execution-frames-and-namespaces",
          ],
        },
      ],
      "/php/": [
        {
          title: "PHP",
          collapsable: false,
          children: [["", "Disclaimer"]],
        },
      ],
    },
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-145300963-3",
      },
    ],
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      "sitemap",
      {
        hostname: "https://devtut.github.io",
      },
    ],
  ],
};
