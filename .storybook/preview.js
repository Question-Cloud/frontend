import "../styles/globals.css";
import { QueryClientProvider, DialogProvider, UserSessionProvider } from "@/providers";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider>
        <DialogProvider>
          <UserSessionProvider>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Story />
            </div>
          </UserSessionProvider>
        </DialogProvider>
      </QueryClientProvider>
    ),
  ],
};

export default preview;
