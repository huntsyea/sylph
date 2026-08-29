import { DeployButton } from "@/components/deploy";
import { Favorites } from "@/components/favorites";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { contentCatalog } from "@/lib/content";
import { favoriteGroups } from "@/lib/favorites";
import { readHomeIntro, renderHomeBody } from "@/lib/home";
import { getDeployUrl } from "@/lib/site/profile";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default async function Home() {
  const { title, tagline, body } = readHomeIntro();
  const intro = await renderHomeBody(body);
  const posts = contentCatalog.getCategory("posts");
  const projects = contentCatalog.getCategory("projects");

  return (
    <FadeIn.Container>
      {(title || tagline) && (
        <FadeIn.Item>
          <div className="flex justify-between">
            <div>
              {title ? <h1>{title}</h1> : null}
              {tagline ? <h2>{tagline}</h2> : null}
            </div>
          </div>
        </FadeIn.Item>
      )}
      {intro ? (
        <>
          <Spacer />
          <FadeIn.Item>{intro}</FadeIn.Item>
        </>
      ) : null}
      {posts && (
        <FadeIn.Item>
          <Posts category={posts} />
        </FadeIn.Item>
      )}
      {projects && (
        <FadeIn.Item>
          <Posts category={projects} />
        </FadeIn.Item>
      )}
      <FadeIn.Item>
        <Favorites groups={favoriteGroups} />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
      <DeployButton href={getDeployUrl().toString()} />
    </FadeIn.Container>
  );
}
