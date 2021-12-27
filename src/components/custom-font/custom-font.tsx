import React from "react"
import { Helmet } from "react-helmet"

export function CustomFonts() {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap"
      />
    </Helmet>
  )
}
