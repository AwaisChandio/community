import React from "react";

import SEO from "../modules/utility/seo";
import { useStaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import useTranslation from "@modules/utility/useTranslation";
import Shortcodes from "@modules/utility/shortcodes";

const NotFoundPage = () => {
  const { locale } = useTranslation();
  //NOTE(Rejon): I could do a gatsby-node and programmatically create these pages.
  //             But there's a chance that a missing 404 in the content folder will break the app.
  //             I'll take the L.
  const { allMdx: nodes } = useStaticQuery(graphql`
    query Get404Pages {
      allMdx(
        filter: { fileAbsolutePath: { regex: "//([\\\\w]{2})/404.mdx$/" } }
      ) {
        nodes {
          headings(depth: h1) {
            value
          }
          fileAbsolutePath
          body
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const page = nodes.nodes.find(
    ({ fileAbsolutePath }) => fileAbsolutePath.indexOf(`/${locale}/`) !== -1
  );
  //Use the Title Rule. Else just use a hardcoded value.
  const _title =
    page !== undefined && page !== null
      ? page.frontmatter.title ||
        (page.headings.length > 0 ? page.headings[0].value : null) ||
        "404: Page Not Found"
      : "404: Page Not Found";

  if (page) {
    return (
      <>
        <SEO title={_title} />
        <MDXProvider components={Shortcodes}>
          <MDXRenderer>{page.body}</MDXRenderer>
        </MDXProvider>
      </>
    );
  }

  return (
    <>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  );
};

export default NotFoundPage;