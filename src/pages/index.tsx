import React from "react"
import { graphql } from "gatsby"
import { About, CustomFonts, Footer, Projects, SEO, Sidebar, Skills, StructuredData, Summary, Tools } from "../components"
import "../styles/global.css"

export function IndexPage({ data }) {
  const { profile, projects, site, social } = data

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <SEO description={undefined} meta={undefined} title={undefined} />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />
      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />
        <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
          <Summary profile={profile} />
          <div className="flex flex-wrap">
            <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
              {profile.skills && <Skills skills={profile.skills} />}
            </div>
            <div className="md:w-1/4 pb-12">
              {profile.tools && <Tools tools={profile.tools} />}
            </div>
          </div>
          {profile.about && <About about={profile.about} />}
          <Projects projects={projects} />
        </main>
      </div>
      <Footer
        name={profile.name}
        showThemeLogo={site.siteMetadata.showThemeLogo}
      />
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        showThemeLogo
        formspreeEndpoint
      }
    }
    profile: profileYaml {
      ...ProfileFragment
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    history: allWorkHistoryYaml {
      nodes {
        ...WorkHistoryFragment
      }
    }
    projects: allProjectsYaml {
      nodes {
        ...ProjectFragment
      }
    }
  }
`
