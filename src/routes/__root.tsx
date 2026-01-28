import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { cn } from "@/lib/utils";
import GlobalBackground from "../components/GlobalBackground";
import Header from "../components/Header";
import appCss from "../styles.css?url";

const RootDocument = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <GlobalBackground />
                <Header />
                <div
                    className={cn([
                        "flex min-h-screen w-full",
                        "pt-(--content-top-padding) pb-20 px-6",
                        "selection:bg-neon-green selection:text-black",
                    ])}
                >
                    {children}
                </div>
                <TanStackDevtools
                    config={{
                        position: "bottom-right",
                    }}
                    plugins={[
                        {
                            name: "Tanstack Router",
                            render: <TanStackRouterDevtoolsPanel />,
                        },
                    ]}
                />
                <Scripts />
            </body>
        </html>
    );
};

export const Route = createRootRoute({
    head: () => ({
        links: [
            { href: "/favicon.svg", rel: "icon", type: "image/svg+xml" },
            { href: appCss, rel: "stylesheet" },
            { href: "https://fonts.googleapis.com", rel: "preconnect" },
            { crossOrigin: "anonymous", href: "https://fonts.gstatic.com", rel: "preconnect" },
            {
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Outfit:wght@400;700&display=swap",
                rel: "stylesheet",
            },
        ],
        meta: [
            { charSet: "utf-8" },
            { content: "width=device-width, initial-scale=1, viewport-fit=cover", name: "viewport" },
            { title: "tylercannon.dev" },
            { content: "Tyler Cannon's personal website", name: "description" },
        ],
    }),
    shellComponent: RootDocument,
});
