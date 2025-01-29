import { ImageResponse } from "next/og";

export const runtime = "edge";

type Parameters = {
  title?: string;
};

/*
 * To assist with generating dynamic Open Graph (OG) images, you can use the Vercel @vercel/og library to compute and generate social card images using Vercel Edge Functions.
 * @see: https://vercel.com/docs/functions/og-image-generation
 *
 * You can use the following code sample to explore using parameters and different content types with next/og.
 * @see: https://vercel.com/guides/dynamic-text-as-image
 *
 * For this example we are going to generate a simple social card image with a dynamic title.
 */
export async function GET(request: Request) {
  try {
    /*
     * Next we are going to extract the parameters from the request URL.
     */
    const { searchParams } = new URL(request.url);
    const parameters: Parameters = Object.fromEntries(searchParams);
    const { title } = parameters;
    console.log(parameters);

    /*
     * Finally we are fetching the font file from the public directory.
     */
    const interRegular = fetch(new URL("/public/assets/inter/regular.ttf", import.meta.url)).then((res) => res.arrayBuffer());
    const interSemiBold = fetch(new URL("/public/assets/inter/semi-bold.ttf", import.meta.url)).then((res) => res.arrayBuffer());

    return new ImageResponse(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "48px 56px",
          backgroundColor: "hsl(0 0% 99%)",
          position: "relative",
        }}
      >
        {/* Top left username */}
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "56px",
            paddingLeft: "12px",
            fontSize: "32px",
            letterSpacing: "-0.3px",
            color: "hsl(0 0% 45.1%)",
            fontFamily: "Inter",
            fontWeight: 400,
          }}
        >
          @huntsyea
        </div>

        {/* Centered title */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: "0 56px",
          }}
        >
          {title ? (
            <div
              style={{
                fontSize: "62px",
                fontWeight: 600,
                letterSpacing: "-1.5px",
                color: "hsl(0 0% 9%)",
                textAlign: "center",
                fontFamily: "Inter",
                lineHeight: 1.1,
                maxWidth: "720px",
              }}
            >
              {title}
            </div>
          ) : (
            <svg width="32" viewBox="0 0 75 65" fill="hsl(0 0% 9%)">
              <path d="M37.59.25l36.95 64H.64l36.95-64z" />
            </svg>
          )}
        </div>
      </div>,
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: "Inter",
            data: await interRegular,
            weight: 400,
          },
          {
            name: "Inter",
            data: await interSemiBold,
            weight: 600,
          },
        ],
      },
    );
  } catch (error) {
    console.error("Failed to generate OG image:", error);
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
