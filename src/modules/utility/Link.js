import React from 'react'
import { Link as GatsbyLink } from "gatsby"
import {usePage} from '@modules/layouts/PageContext'
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  const {locale} = usePage();
  
  // Tailor the following test to your environment.
  // This assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    const hasLocale = /^\/([\w]{2})\//.test(to);

    //If it doesn't have the locale specified use the current locale.
    //NOTE(Rejon): While I could also check if it has a locale and if it exists,
    //             I think it could mess with the expectations of how links work. 
    //             If an invalid locale is passed, then it should go to a 404 page, unless the team specifies otherwise. 
    if (!hasLocale) {
      to = `/${locale}${to}`;
    }

    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}
export default Link