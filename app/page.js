import AboutPage from "./about/page";
import { getSortedPostsData } from "../lib/posts";



// app/page.js
export default function Home() {

  return (
    <main>
       <AboutPage />
    </main>
  )
}

