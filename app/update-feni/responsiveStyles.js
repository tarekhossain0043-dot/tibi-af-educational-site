const updateFeniResponsiveCss = `
  *, *::before, *::after {
    box-sizing: border-box;
  }

  img[src="https://updatefeni.com/wp-content/uploads"] {
    display: none !important;
  }

  img, video, iframe {
    max-width: 100% !important;
  }

  .featured-news-container .big-news > .overlay {
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
  }

  @media (max-width: 767px) {
    html, body {
      max-width: 100%;
      overflow-x: hidden;
    }

    body {
      padding-left: 12px !important;
      padding-right: 12px !important;
    }

    .container {
      width: 100%;
      max-width: 100%;
      padding-left: 12px !important;
      padding-right: 12px !important;
    }

    .simple-search form {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .simple-search input {
      box-sizing: border-box;
      flex: 1 1 220px;
      width: 220px !important;
      min-width: 0;
      max-width: calc(100vw - 120px);
      height: 44px;
      padding: 0 12px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    .simple-search button {
      flex: 0 0 auto;
      min-width: 80px;
      height: 44px;
      padding: 0 16px;
      border-radius: 5px;
      font-size: 14px;
    }
  }

  @media (max-width: 576px) {
    .news-items {
      display: block;
    }

    .news-card, .news-item, .news-list {
      min-width: 0;
    }

    .footer-container {
      width: 100%;
      padding-left: 12px;
      padding-right: 12px;
    }

    .footer-links {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }

    .footer-logo-section img {
      width: min(100%, 300px) !important;
      height: auto !important;
    }
  }
`;

export default updateFeniResponsiveCss;
