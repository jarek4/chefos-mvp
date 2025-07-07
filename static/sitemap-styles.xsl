<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                xmlns="http://www.w3.org/1999/xhtml"
                exclude-result-prefixes="sitemap"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap</title>
        <meta charset="UTF-8"/>
        <style type="text/css">
          body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
          h1 { margin-bottom: 15px; }
          ul { list-style-type: none; padding-left: 0; } /* Use a list instead of table */
          li { margin-bottom: 8px; }
          a { text-decoration: none; color: #007bff; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <!-- Changed table to an unordered list for simplicity -->
        <ul>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <li>
              <a href="{sitemap:loc}">
                <xsl:value-of select="sitemap:loc"/>
              </a>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
