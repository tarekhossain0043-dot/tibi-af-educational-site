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

  @media (max-width: 576px) {
    html, body {
      max-width: 100%;
      overflow-x: hidden;
    }

    .container {
      width: 100%;
      max-width: 100%;
      padding-left: 12px;
      padding-right: 12px;
    }

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
