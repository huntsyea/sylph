import { DeployButton } from "@/components/deploy";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Hunter Yeagley</h1>
            <h2>Product Leader. Builder. Investor.</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          I’m a Product Leader at Ramsey Solutions, where
          I’ve spent the last few years
          growing marketplace products and building new things. I spend significant time coaching solo
          founders on product-market fit and helping them bring their ideas to
          life. Beyond work, I’m constantly tinkering with new ideas; particularly in the realm of knowledge work. 
        </p>
        <p>
         <b>Mission:</b> Serve as a leader of craft and community, accelerating the growth of both people and
          as a leader of craft and community, accelerating the growth of both people and
          ideas around me.
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="writing" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
      <DeployButton />
    </FadeIn.Container>
  );
}
