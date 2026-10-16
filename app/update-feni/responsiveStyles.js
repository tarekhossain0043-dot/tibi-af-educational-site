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
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .container {
      width: 100%;
      max-width: 100%;
      padding-left: 12px !important;
      padding-right: 12px !important;
    }

    header > .container:first-child {
      display: flex !important;
      flex-direction: column;
      align-items: stretch !important;
      gap: 4px;
    }

    header > .container:first-child .social {
      order: -1;
      justify-content: flex-end;
    }

    header > .container:first-child .s_links {
      justify-content: flex-end;
      margin: 0;
      padding: 4px 0 !important;
    }

    .simple-search {
      width: 100%;
    }

    .simple-search form {
      display: flex;
      width: 100%;
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

    .logo_nav_link {
      display: grid !important;
      grid-template-columns: minmax(0, 1fr);
      justify-items: center;
      gap: 10px;
      padding-top: 8px;
      padding-bottom: 10px;
      text-align: center;
    }

    .time_part,
    .header_logo,
    .head_vedio {
      width: 100% !important;
      text-align: center !important;
    }

    .time_part {
      font-size: 0.85rem;
      line-height: 1.7;
    }

    .header_current_date {
      margin-bottom: 4px !important;
    }

    .header_logo img {
      display: block;
      width: min(190px, 60vw);
      height: auto;
      margin: 0 auto;
    }

    .head_vedio {
      display: none;
    }

    #main-nav > .container > .nav_menus {
      display: none !important;
    }

    #main-nav .nav_link_sm {
      display: flex !important;
      width: 100%;
      align-items: flex-start;
      gap: 8px;
    }

    #main-nav .nav_section_left_sm {
      flex: 1 1 auto;
      min-width: 0;
    }

    #main-nav .nav_section_left_sm ul {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      margin: 0;
      padding: 8px 0;
    }

    #main-nav .nav_section_left_sm li {
      min-width: 0;
      margin: 0;
    }

    #main-nav .nav_section_left_sm a {
      display: block;
      padding: 4px 0;
      white-space: nowrap;
    }

    #main-nav .nav_section_right_sm {
      flex: 0 0 auto;
      padding-top: 8px;
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
